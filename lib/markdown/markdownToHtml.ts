// https://github.com/vercel/next.js/tree/canary/examples/blog-starter-typescript
import shiki from '@stefanprobst/remark-shiki'
import remark from 'remark'
import links from 'remark-external-links'
import gfm from 'remark-gfm'
import html from 'remark-html'
import card from 'remark-link-card'

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(card, { shortenUrl: true })
    .use(links)
    .use(gfm)
    .use(shiki, { theme: 'dark-plus' })
    .use(html, { sanitize: false })
    .process(markdown)
  return result.toString()
}
