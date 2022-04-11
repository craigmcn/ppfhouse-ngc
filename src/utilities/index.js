import remark from 'remark'
import remarkHTML from 'remark-html'

export const md2Html = (content) => remark()
    .use(remarkHTML)
    .processSync(content)
    .toString()

export const getFontSize = () => parseFloat(
    getComputedStyle(document.documentElement).fontSize
)