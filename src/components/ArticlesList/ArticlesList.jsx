import { Link } from 'react-router-dom';

function ArticlesList({ articles }) {
  return (
    <>
      {articles.map((article, key ) => (
        <Link className='article-list-item' key={key} to={`/article/${article.name}`}>
          <h3>{article.title}</h3>
          <p>{article.content[0].substring(0,50)}...</p>
        </Link>
      ))}
    </>
  )
}

export default ArticlesList;