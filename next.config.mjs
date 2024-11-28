/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Mantén reactStrictMode habilitado para verificar buenas prácticas

    // Configuración adicional para evitar errores con bibliotecas como `pdfjs-dist`
    webpack: (config) => {
        config.resolve.fallback = {
            fs: false, // Evita errores relacionados con el módulo 'fs'
        };
        return config;
    },
};

export default nextConfig;
