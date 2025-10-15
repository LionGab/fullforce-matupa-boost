import { useEffect } from 'react';

declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
        dataLayer?: unknown[];
    }
}

const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

const GoogleAnalytics = () => {
    useEffect(() => {
        const script1 = document.createElement('script');
        script1.async = true;
        script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
        document.head.appendChild(script1);

        const script2 = document.createElement('script');
        script2.textContent = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}', {
        page_path: window.location.pathname,
        page_title: document.title,
        send_page_view: true
      });

      gtag('config', '${GA_MEASUREMENT_ID}', {
        'custom_map': {
          'dimension1': 'user_type',
          'dimension2': 'plan_interest',
          'metric1': 'whatsapp_clicks'
        }
      });

      gtag('event', 'page_load', {
        'event_category': 'engagement',
        'event_label': 'initial_load',
        'value': 1
      });
    `;
        document.head.appendChild(script2);

        return () => {
            document.head.removeChild(script1);
            document.head.removeChild(script2);
        };
    }, []);

    return null;
};

export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (window.gtag) {
        window.gtag('event', eventName, parameters);
    }
};

export const trackConversion = (conversionType: string, value?: number) => {
    if (window.gtag) {
        window.gtag('event', 'conversion', {
            'send_to': `${GA_MEASUREMENT_ID}/${conversionType}`,
            'value': value || 1,
            'currency': 'BRL'
        });
    }
};

export const trackWhatsAppClick = (placement: string, planType?: string) => {
    if (window.gtag) {
        window.gtag('event', 'click_whatsapp', {
            'event_category': 'engagement',
            'event_label': placement,
            'plan_type': planType || 'general',
            'value': 1
        });

        window.gtag('event', 'generate_lead', {
            'currency': 'BRL',
            'value': planType === 'Anual' ? 1428 : 189
        });
    }
};

export default GoogleAnalytics;
