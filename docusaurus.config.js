// @ts-check
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'RhinoArtisan Documentation',
  tagline: 'Official documentation for RhinoArtisan jewelry design software',
  favicon: 'img/favicon.ico',
  url: 'https://docs.rhinoartisan.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  i18n: { defaultLocale: 'en', locales: ['en'] },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // ✏️ Enables "Edit this page" button — update with your GitHub repo
          editUrl: 'https://github.com/RafaeldelM/rhinoartisan-docs/edit/main/',
          lastVersion: 'current',
          versions: {
            current: {
              label: 'v7 (latest)',
              path: '/7',
            },
            '6.0': {
              label: 'v6.0',
              path: '/6',
              banner: 'unmaintained',
            },
            '5': {
              label: 'v5',
              path: '/5',
              banner: 'unmaintained',
            },
          },
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'RhinoArtisan Docs',
        logo: {
          alt: 'RhinoArtisan Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownActiveClassDisabled: true,
          },
          {
            href: 'https://www.rhinoartisan.com',
            label: 'Website',
            position: 'right',
          },
          {
            href: 'https://github.com/RafaeldelM/rhinoartisan-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              { label: 'Getting Started', to: '/getting-started/introduction' },
              { label: 'Commands', to: '/commands' },
              { label: 'FAQ', to: '/frequently-asked-questions' },
            ],
          },
          {
            title: 'More',
            items: [
              { label: 'RhinoArtisan Website', href: 'https://www.rhinoartisan.com' },
              { label: 'Buy RhinoArtisan', href: 'https://www.rhinoartisan.com/buy' },
              { label: 'Technical Support', href: 'https://www.rhinoartisan.com/contact' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} RhinoArtisan. Built with Docusaurus.`,
      },
      prism: {
        theme: require('prism-react-renderer').themes.github,
        darkTheme: require('prism-react-renderer').themes.dracula,
      },
    }),
};

module.exports = config;
