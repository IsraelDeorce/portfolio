import Markdown from 'markdown-to-jsx'

function Article({ md }) {
  return (
    <Markdown style={{ padding: '1em' }} >
      {md}
    </Markdown>
  )
}

export default Article