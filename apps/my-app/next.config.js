//@ts-check

const { composePlugins, withNx } = require('@nx/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  // Use this to set Nx-specifics
  // See: https://nx.dev/recipes/next/next-config-setup
  nx: {},
  reactCompiler: true,
  basePath: '/source-matcher',
  // i18n: {
  //   locales: ['en', 'pt'],
  //   defaultLocale: 'en',
  //   localeDetection: false,
  // },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
