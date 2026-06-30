import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Nexarch/", // <--- Zid had s-satar hna
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});