//@ts-check

const { composePlugins, withNx } = require('@nx/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  // Use this to set Nx-specific options
  // See: https://nx.dev/recipes/next/next-config-setup
  nx: {},
  reactCompiler: true,
  // Basic Next.js built-in i18n configuration
  // See: https://nextjs.org/docs/app/api-reference/config/next-config-js/i18n
  i18n: {
    // Add or remove locales as needed
    locales: ['en', 'pt'],
    defaultLocale: 'en',
    localeDetection: false,
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
