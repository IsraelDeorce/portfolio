import Markdown from 'markdown-to-jsx'
import './Article.scss'

function Article({ md }) {
  return (
    <Markdown className='markdown' >
      {md}
    </Markdown>
  )
}

export default Article