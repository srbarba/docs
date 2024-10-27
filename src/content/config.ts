import { defineCollection } from 'astro:content'
import { docsSchema } from '@astrojs/starlight/schema'

export const collections = {
  docs: defineCollection({ schema: docsSchema() }),
  playbook: defineCollection({ schema: docsSchema() }),
  cookbook: defineCollection({ schema: docsSchema() }),
}
