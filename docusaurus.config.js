// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Rivet',
	tagline: 'Infrastructure for the Metaverse',
	url: 'https://rivet.gg',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
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
				title: 'Rivet',
				logo: {
					alt: 'Rivet Logo',
					src: 'img/logo-circle-small.png'
				},
				items: [
					{
						type: 'doc',
						docId: 'guides/intro',
						position: 'left',
						label: 'Guides'
					},
					{
						type: 'doc',
						docId: 'api/intro',
						position: 'left',
						label: 'API'
					},
					{
						type: 'doc',
						docId: 'libs/intro',
						position: 'left',
						label: 'Libraries'
					},
					{
						type: 'doc',
						docId: 'community/intro',
						position: 'left',
						label: 'Community'
					},
					{
						label: 'Pricing',
						position: 'left',
						to: 'https://rivet.gg/developer/pricing',
						target: '_blank'
					},

					{
						label: 'Dashboard',
						position: 'right',
						to: 'https://rivet.gg/developer/dashboard',
						target: '_blank'
					},
				]
			},
			footer: {
				style: 'dark',
				// links: [
				// 	{
				// 		title: 'Docs',
				// 		items: [
				// 			{
				// 				label: 'Tutorial',
				// 				to: '/docs/intro'
				// 			}
				// 		]
				// 	},
				// 	{
				// 		title: 'Community',
				// 		items: [
				// 			{
				// 				label: 'Stack Overflow',
				// 				href: 'https://stackoverflow.com/questions/tagged/docusaurus'
				// 			},
				// 			{
				// 				label: 'Discord',
				// 				href: 'https://discordapp.com/invite/docusaurus'
				// 			},
				// 			{
				// 				label: 'Twitter',
				// 				href: 'https://twitter.com/docusaurus'
				// 			}
				// 		]
				// 	},
				// 	{
				// 		title: 'More',
				// 		items: [
				// 			{
				// 				label: 'Blog',
				// 				to: '/blog'
				// 			},
				// 			{
				// 				label: 'GitHub',
				// 				href: 'https://github.com/facebook/docusaurus'
				// 			}
				// 		]
				// 	}
				// ],
				copyright: `Copyright © ${new Date().getFullYear()} Rivet Gaming, LLC. Built with Docusaurus.`
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
			outputDir: `docs/api/${name}`,
			sidebarOptions: {
				groupPathsBy: 'tag',
				categoryLinkSource: 'tag'
			}
		}
	};
}

module.exports = config;
