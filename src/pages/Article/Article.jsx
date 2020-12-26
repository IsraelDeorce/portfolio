import { useParams } from 'react-router-dom';
import { Error } from '../';
import articleContent from '../../utils/aticle-content';

function Article() {
  const { name } = useParams();
  const article = articleContent.find(article => article.name === name)

  if (!article )
    return <Error />

  return (
    <>
      <h1>{article.title}</h1>
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
    </>
  )
}

export default Article;