import Markdown from 'markdown-to-jsx'

function Article({ md }) {
  return (
    <Markdown>
      {md}
    </Markdown>
  )
}

export default Article