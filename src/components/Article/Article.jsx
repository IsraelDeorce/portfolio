import Markdown from 'markdown-to-jsx'

function Blog({ md }) {
  return (
    <Markdown>
      {md}
    </Markdown>
  )
}

export default Blog