const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
  unstable_flexsearch: true,
  unstable_staticImage: true,
  staticImage: true,
  flexsearch: {
    codeblocks: true,
  },
  defaultShowCopyCode: true,
});

const nextConfig = withNextra({
  reactStrictMode: true,
  experimental: {
    legacyBrowsers: false,
  },
  // webpack: (config, { webpack }) => {},
  // rewrites() {
  //   return {};
  // },
  // async redirects() {
  //   return [];
  // },
});

module.exports = nextConfig;
