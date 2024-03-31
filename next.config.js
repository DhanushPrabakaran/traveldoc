
// import withPWA from "@ducanh2912/next-pwa";
const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
});

/**
 * @type {import('next').NextConfig}
 */
module.exports =  withPWA({
  // dest: 'public',
  // cacheOnFrontEndNav: true,
  // aggressiveFrontEndNavCaching: true,
  // reloadOnOnline: true,
  // swcMinify: true,
  // disable: false,
  // workboxOptions: {
  //   disableDevLogs: true,
  // }
}
);

// module.exports = nextConfig;
