import './Article.scss'

function Article({ file }) {
  return <div className='article' dangerouslySetInnerHTML={{ __html: file }} />
}

export default Article