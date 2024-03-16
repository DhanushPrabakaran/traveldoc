// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     // pwa: {
//     //     manifest: './public/manifest.json'
//     //   }
// };

// export default nextConfig;
import withPWA from "@ducanh2912/next-pwa";

const nextConfig = withPWA({
    image: {
        domains: ['https://github.githubassets.com'],
    },
  dest: 'public',
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  disable: false,
  workboxOptions: {
    disableDevLogs: true,
  }
});

export default nextConfig;
