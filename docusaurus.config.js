// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Rivet Docs',
	tagline: 'Rivet Documentation Hub',
	url: 'https://your-docusaurus-test-site.com',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',

	organizationName: 'rivet',
	projectName: 'docs',

	i18n: {
		defaultLocale: 'en',
		locales: ['en']
	},

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
					docLayoutComponent: '@theme/DocPage',
					docItemComponent: '@theme/ApiItem'
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/'
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css')
				}
			})
		]
	],

	plugins: [
		[
			'docusaurus-plugin-openapi-docs',
			{
				id: 'openapi',
				docsPluginId: 'classic',
				config: {
					...apiConfig('api-chat', 'ChatService'),
					...apiConfig('api-cloud', 'CloudService'),
					...apiConfig('api-group', 'GroupService'),
					...apiConfig('api-identity', 'IdentityService'),
					...apiConfig('api-kv', 'KvService'),
					...apiConfig('api-party', 'PartyService'),
					...apiConfig('api-matchmaker', 'MatchmakerService')
				}
			}
		]
	],
	themes: ['docusaurus-theme-openapi-docs'],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: 'Rivet Docs',
				logo: {
					alt: 'Rivet Logo',
					src: 'img/logo.svg',
					srcDark: 'img/logo.svg'
				},
				items: [
					{
						type: 'doc',
						docId: 'intro',
						position: 'left',
						label: 'Overview'
					},
					{ to: '/blog', label: 'Blog', position: 'left' },
					{
						href: 'https://github.com/rivet-gg',
						className: 'header-github-link',
						target: '_blank',
						position: 'right'
					}
				]
			},
			footer: {
				style: 'dark',
				links: [
					{
						title: 'Docs',
						items: [
							{
								label: 'Overview',
								to: '/docs/intro'
							}
						]
					},
					{
						title: 'Community',
						items: [
							{
								label: 'Stack Overflow',
								href: 'https://stackoverflow.com/questions/tagged/rivetgg'
							},
							{
								label: 'Discord',
								href: 'https://discordapp.com/invite/docusaurus'
							},
							{
								label: 'Twitter',
								href: 'https://twitter.com/rivetofficial'
							}
						]
					},
					{
						title: 'More',
						items: [
							{
								label: 'Blog',
								to: '/blog'
							},
							{
								label: 'GitHub',
								href: 'https://github.com/rivet-gg'
							}
						]
					}
				],
				copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme
			}
		})
};

function apiConfig(name, service) {
	return {
		[name]: {
			specPath: `spec/${service}.openapi.json`,
			outputDir: `docs/${name}`,
			sidebarOptions: {
				groupPathsBy: 'tag',
				categoryLinkSource: 'tag'
			}
		}
	};
}

module.exports = config;
