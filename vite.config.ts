import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => {
  const plugins = [react()];

  // Only load lovable-tagger in development mode
  if (mode === "development") {
    try {
      // Dynamic import to avoid build errors
      const lovableTagger = require("lovable-tagger");
      if (lovableTagger && lovableTagger.componentTagger) {
        plugins.push(lovableTagger.componentTagger());
      }
    } catch (e) {
      // Silently skip if not available
      console.log("lovable-tagger not available in development");
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
      minify: 'esbuild',
      target: 'es2015',
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (id.includes('node_modules')) {
              if (id.includes('react') || id.includes('react-dom')) {
                return 'vendor';
              }
              if (id.includes('@radix-ui')) {
                return 'ui';
              }
              if (id.includes('lucide-react')) {
                return 'icons';
              }
            }
          },
        },
      },
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
