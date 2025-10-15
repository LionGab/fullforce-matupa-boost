import { useEffect } from 'react';

const PerformanceOptimizer = () => {
    useEffect(() => {
        // Removed preloadCriticalResources to avoid preload warnings
        // Images will be loaded naturally by React components

        const optimizeImages = () => {
            const images = document.querySelectorAll('img[loading="lazy"]');

            if ('IntersectionObserver' in window) {
                const imageObserver = new IntersectionObserver((entries, observer) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const img = entry.target as HTMLImageElement;
                            if (img.dataset.src) {
                                img.src = img.dataset.src;
                                img.removeAttribute('data-src');
                            }
                            observer.unobserve(img);
                        }
                    });
                }, {
                    rootMargin: '50px 0px',
                    threshold: 0.01
                });

                images.forEach(img => imageObserver.observe(img));
            }
        };

        const deferNonCriticalCSS = () => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'style';
            link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap';
            link.onload = function (this: HTMLLinkElement) {
                this.onload = null;
                this.rel = 'stylesheet';
            };
            document.head.appendChild(link);
        };

        const reportWebVitals = () => {
            if ('PerformanceObserver' in window) {
                const lcpObserver = new PerformanceObserver((list) => {
                    const entries = list.getEntries();
                    const lastEntry = entries[entries.length - 1];

                    if (window.gtag) {
                        window.gtag('event', 'web_vitals', {
                            event_category: 'Web Vitals',
                            event_label: 'LCP',
                            value: Math.round(lastEntry.startTime),
                            non_interaction: true,
                        });
                    }
                });

                try {
                    lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
                } catch (e) {
                    console.warn('LCP observation not supported');
                }

                const fidObserver = new PerformanceObserver((list) => {
                    const entries = list.getEntries();
                    entries.forEach((entry: any) => {
                        if (window.gtag) {
                            window.gtag('event', 'web_vitals', {
                                event_category: 'Web Vitals',
                                event_label: 'FID',
                                value: Math.round(entry.processingStart - entry.startTime),
                                non_interaction: true,
                            });
                        }
                    });
                });

                try {
                    fidObserver.observe({ type: 'first-input', buffered: true });
                } catch (e) {
                    console.warn('FID observation not supported');
                }

                const clsObserver = new PerformanceObserver((list) => {
                    let clsValue = 0;
                    const entries = list.getEntries();

                    entries.forEach((entry: any) => {
                        if (!entry.hadRecentInput) {
                            clsValue += entry.value;
                        }
                    });

                    if (window.gtag && clsValue > 0) {
                        window.gtag('event', 'web_vitals', {
                            event_category: 'Web Vitals',
                            event_label: 'CLS',
                            value: Math.round(clsValue * 1000),
                            non_interaction: true,
                        });
                    }
                });

                try {
                    clsObserver.observe({ type: 'layout-shift', buffered: true });
                } catch (e) {
                    console.warn('CLS observation not supported');
                }
            }
        };

        const enableResourceHints = () => {
            const dnsPreconnect = [
                'https://www.googletagmanager.com',
                'https://www.google-analytics.com',
                'https://fonts.googleapis.com',
                'https://fonts.gstatic.com'
            ];

            dnsPreconnect.forEach(url => {
                const link = document.createElement('link');
                link.rel = 'preconnect';
                link.href = url;
                link.crossOrigin = 'anonymous';
                document.head.appendChild(link);
            });
        };

        // preloadCriticalResources(); // Removed to avoid preload warnings
        optimizeImages();
        deferNonCriticalCSS();
        reportWebVitals();
        enableResourceHints();

        const handleVisibilityChange = () => {
            if (document.hidden) {
                if (window.gtag) {
                    window.gtag('event', 'page_visibility', {
                        event_category: 'engagement',
                        event_label: 'hidden',
                        value: 1
                    });
                }
            } else {
                if (window.gtag) {
                    window.gtag('event', 'page_visibility', {
                        event_category: 'engagement',
                        event_label: 'visible',
                        value: 1
                    });
                }
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    return null;
};

export default PerformanceOptimizer;
