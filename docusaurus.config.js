// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const mdxMermaid = require('mdx-mermaid');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Rivet',
	tagline: 'Multiplayer Gaming for Everyone',
	url: 'https://rivet.gg',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',

	organizationName: 'rivet',
	projectName: 'docs',

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
					editUrl: 'https://github.com/rivet-gg/docs/tree/main/',
					docLayoutComponent: '@theme/DocPage',
					docItemComponent: '@theme/ApiItem',
					remarkPlugins: [
						// See https://sjwall.github.io/mdx-mermaid/docs/intro/
						[mdxMermaid, {
							theme: { light: 'neutral', dark: 'dark' }
						}]
					],
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
	themes: [
		[
			'@easyops-cn/docusaurus-search-local',
			{
				hashed: true,
				highlightSearchTermsOnTargetPage: true,
				explicitSearchResultPath: true
			}
		],
		'docusaurus-theme-openapi-docs'
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			colorMode: {
				defaultMode: 'dark'
			},
			navbar: {
				title: 'Rivet',
				logo: {
					alt: 'Rivet Logo',
					src: 'img/logo-large-black.svg',
					srcDark: 'img/logo-large.svg'
				},
				items: [
					{
						type: 'doc',
						docId: 'guides/index',
						position: 'left',
						label: 'Guides'
					},
					{
						type: 'doc',
						docId: 'concepts/index',
						position: 'left',
						label: 'Concepts'
					},
					{
						type: 'doc',
						docId: 'api/index',
						position: 'left',
						label: 'API'
					},
					{
						type: 'doc',
						docId: 'libs/index',
						position: 'left',
						label: 'Libraries'
					},
					{
						type: 'doc',
						docId: 'community/index',
						position: 'left',
						label: 'Community'
					},

					// {
					// 	label: 'Pricing',
					// 	position: 'right',
					// 	to: 'https://rivet.gg/developer/pricing',
					// 	target: '_blank'
					// },
					{
						label: 'Dashboard',
						position: 'right',
						to: 'https://rivet.gg/developer/dashboard',
						target: '_blank'
					}
				]
			},
			footer: {
				style: 'dark',
				// links: [
				// 	{
				// 		title: 'Docs',
				// 		items: [
				// 			{
				// 				label: 'Overview',
				// 				to: '/docs/index'
				// 			}
				// 		]
				// 	},
				// 	{
				// 		title: 'Community',
				// 		items: [
				// 			{
				// 				label: 'Stack Overflow',
				// 				href: 'https://stackoverflow.com/questions/tagged/rivetgg'
				// 			},
				// 			{
				// 				label: 'Discord',
				// 				href: 'https://discordapp.com/invite/docusaurus'
				// 			},
				// 			{
				// 				label: 'Twitter',
				// 				href: 'https://twitter.com/rivetofficial'
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
				// 				href: 'https://github.com/rivet-gg'
				// 			}
				// 		]
				// 	}
				// ],
				copyright: `Copyright © ${new Date().getFullYear()} Rivet Gaming, LLC. Built with Docusaurus.`
			},
			languageTabs: [
				// Refer to https://github.com/PaloAltoNetworks/docusaurus-openapi-docs/blob/ffaf42bd4c0665096d4ca2a0fa39a4530f7b008f/packages/docusaurus-theme-openapi-docs/src/theme/ApiDemoPanel/Curl/index.tsx#L31
				// and https://github.com/PaloAltoNetworks/docusaurus-openapi-docs/blob/ffaf42bd4c0665096d4ca2a0fa39a4530f7b008f/packages/docusaurus-theme-openapi-docs/src/theme/ApiDemoPanel/Curl/index.tsx#L131-L160
				{
					tabName: 'cURL',
					highlight: 'bash',
					language: 'curl',
					codeLanguage: 'bash',
					variant: 'curl',
					options: {
						longFormat: false,
						followRedirect: true,
						trimRequestBody: true
					}
				}
			],
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
