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
      title: 'Playbook',
      social: {
        github: 'https://github.com/srbarba/playbook',
      },
      sidebar: [
        {
          label: 'Guides',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Example Guide', slug: 'guides/example' },
          ],
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
  ],
})
