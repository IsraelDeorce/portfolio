import { Link } from 'react-router-dom';
import articleContent from '../../utils/aticle-content';
import './ArticlesList.css';

function ArticlesList() {
  return (
    <>
      <h1>My Articles</h1>
      {articleContent.map((article, key ) => (
        <Link className='article-list-item' key={key} to={`/article/${article.name}`}>
          <h3>{article.title}</h3>
          <p>{article.content[0].substring(0,50)}...</p>
        </Link>
      ))}
    </>
  )
}

export default ArticlesList;