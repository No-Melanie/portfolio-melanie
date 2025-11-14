import type { NextConfig } from "next";

const nextConfig: NextConfig = {
images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co', // <--- Adicione este hostname
        port: '',
        pathname: '/**', // Permite qualquer caminho no domínio
      },
    ],
  },
};

export default nextConfig;
