// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'BibLaTeX.org',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/citedrive' },
			],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Introduction', slug: 'getting-started' },
					],
				},
				{
					label: 'Citation Styles',
					autogenerate: { directory: 'citation-styles' },
				},
				{
					label: 'Entry Types',
					autogenerate: { directory: 'entry-types' },
				},
				{
					label: 'Fields',
					autogenerate: { directory: 'fields' },
				},
				{
					label: 'Advanced Topics',
					autogenerate: { directory: 'advanced' },
				},
				{
					label: 'FAQ',
					items: [
						{ label: 'Frequently Asked Questions', slug: 'faq' },
					],
				},
				{
					label: 'Glossary',
					items: [
						{ label: 'Glossary of Terms', slug: 'glossary' },
					],
				},
			],
		}),
	],
});
