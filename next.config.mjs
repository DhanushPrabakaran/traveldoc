
import withPWA from "@ducanh2912/next-pwa";
/**
 * @type {import('next').NextConfig}
 */
export const nextConfig =  withPWA({
  dest: 'public',
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  disable: false,
  workboxOptions: {
    disableDevLogs: true,
  }
}
);

// export default nextConfig;
// module.exports = nextConfig;
