/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
	tutorial: [
		'intro',
		apiCategory('api-auth', 'Auth API', require('./docs/api-auth/sidebar.js')),
		apiCategory('api-chat', 'Chat API', require('./docs/api-chat/sidebar.js')),
		apiCategory('api-cloud', 'Cloud API', require('./docs/api-cloud/sidebar.js')),
		apiCategory('api-group', 'Group API', require('./docs/api-group/sidebar.js')),
		apiCategory('api-identity', 'Identity API', require('./docs/api-identity/sidebar.js')),
		apiCategory('api-kv', 'KV API', require('./docs/api-kv/sidebar.js')),
		apiCategory('api-party', 'Party API', require('./docs/api-party/sidebar.js')),
		apiCategory('api-portal', 'Portal API', require('./docs/api-portal/sidebar.js')),
		apiCategory('api-matchmaker', 'Matchmaker API', require('./docs/api-matchmaker/sidebar.js'))
	]
};

function apiCategory(name, label, items) {
	return {
		type: 'category',
		label: label,
		link: {
			type: 'generated-index',
			title: label,
			slug: `/category/${name}`
		},
		items: combineTags(items)
	};
}

// function apiCategory(name, label, items) {
// 	return {
// 		[name]: [
// 			{
// 				type: 'category',
// 				label: label,
// 				link: {
// 					type: 'generated-index',
// 					title: label,
// 					slug: `/category/${name}`
// 				},
// 				items: combineTags(items)
// 			}
// 		]
// 	};
// }

function combineTags(obj) {
	return filterUnique(
		Object.values(obj)
			.map(c => (c.type == 'category' ? c.items : c))
			.reduce((s, a) => s.concat(a), []),
		item => (item.type == 'category' ? item.label : item.id)
	);
}

function filterUnique(items, hashCb) {
	let unique = new Map();

	for (let item of items) {
		let hash = hashCb(item);

		if (!unique.has(hash)) unique.set(hash, item);
	}

	return Array.from(unique.values());
}

module.exports = sidebars;
