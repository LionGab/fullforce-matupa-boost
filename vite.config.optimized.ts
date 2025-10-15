import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => {
    const plugins = [react()];

    if (mode === "development") {
        try {
            const { componentTagger } = require("lovable-tagger");
            plugins.push(componentTagger());
        } catch (e) {
            console.warn("lovable-tagger not available, skipping...");
        }
    }

    return {
        server: {
            host: "::",
            port: 8080,
        },
        plugins,
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src"),
            },
        },
        build: {
            outDir: "dist",
            sourcemap: false,
            minify: 'terser',
            terserOptions: {
                compress: {
                    drop_console: true,
                    drop_debugger: true,
                    pure_funcs: ['console.log', 'console.info', 'console.debug'],
                },
            },
            rollupOptions: {
                output: {
                    manualChunks: {
                        'vendor-react': ['react', 'react-dom', 'react-router-dom'],
                        'vendor-ui': [
                            '@radix-ui/react-accordion',
                            '@radix-ui/react-dialog',
                            '@radix-ui/react-dropdown-menu',
                            '@radix-ui/react-tabs',
                            '@radix-ui/react-toast',
                        ],
                        'vendor-utils': ['clsx', 'tailwind-merge', 'class-variance-authority'],
                        'vendor-icons': ['lucide-react'],
                    },
                    chunkFileNames: 'assets/js/[name]-[hash].js',
                    entryFileNames: 'assets/js/[name]-[hash].js',
                    assetFileNames: (assetInfo) => {
                        if (!assetInfo.name) return 'assets/[name]-[hash][extname]';
                        const info = assetInfo.name.split('.');
                        const ext = info[info.length - 1];
                        if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
                            return `assets/images/[name]-[hash][extname]`;
                        } else if (/woff|woff2|eot|ttf|otf/i.test(ext)) {
                            return `assets/fonts/[name]-[hash][extname]`;
                        }
                        return `assets/[ext]/[name]-[hash][extname]`;
                    },
                },
            },
            chunkSizeWarningLimit: 1000,
            cssCodeSplit: true,
            assetsInlineLimit: 4096,
        },
        optimizeDeps: {
            include: [
                'react',
                'react-dom',
                'react-router-dom',
                'lucide-react',
            ],
            exclude: ['lovable-tagger'],
        },
    };
});
