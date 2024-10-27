// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import starlightHeadingBadges from 'starlight-heading-badges'

// comments implementation
// https://vitaneri.com/posts/how-to-integrate-utterances-with-astro
// https://github.com/giscus/giscus

// code examples
// https://www.npmjs.com/package/vue-live
// https://tutorialkit.dev/reference/react-components/#_top

// check cookbook ideas:
// https://cookbook.openai.com/
// https://codecookbook.io/
// https://michaelcurrin.github.io/code-cookbook/

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [starlightHeadingBadges()],
      title: 'srbarba/docs',
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'English',
          lang: 'es-GB',
        },
        es: {
          label: 'Español',
          lang: 'es-ES',
        },
      },
      social: {
        github: 'https://github.com/srbarba/playbook',
        linkedin: 'https://www.linkedin.com/in/juanpbarba/',
      },
      editLink: {
        baseUrl: 'https://github.com/srbarba/docs/edit/main',
      },
      sidebar: [
        {
          label: '🔷 Introduction',
          collapsed: true,
          autogenerate: { directory: '0-introduction' },
        },
        {
          label: '🃏 Playbook',
          collapsed: true,
          autogenerate: { directory: '100-playbook' },
        },
        {
          label: '🧑‍🍳 Cookbook',
          collapsed: true,
          autogenerate: { directory: '200-cookbook' },
        },
        {
          label: '👣 Tutorials',
          collapsed: true,
          autogenerate: { directory: '300-tutorials' },
        },
        {
          label: '🧪 Labs',
          collapsed: true,
          autogenerate: { directory: '400-labs' },
        },
        {
          label: '🔗 Resources',
          collapsed: true,
          autogenerate: { directory: '500-resources' },
        },
      ],
    }),
  ],
})
