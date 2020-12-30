import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Error } from '../';
import articleContent from '../../utils/aticle-content';
import axiosConfig from '../../model/service/axiosConfig';
import { CommentsList, ArticlesList, UpvotesSection } from '../../components';

function Article() {
  const { name } = useParams();
  const article = articleContent.find(article => article.name === name)

  const [articleInfo, setArticleInfo] = useState({});
  
  useEffect(() => {
    console.log("fetch")
    try {
      const fetchData = async () => {
        const response = await axiosConfig.get(`api/articles/${name}`);
        console.log(response.data)
        setArticleInfo(response.data)
      }
      fetchData();
    } catch(error) {
      console.log(error);
    }
  }, [name])

  if (!article )
    return <Error />

  const otherArticles = articleContent.filter(article => article.name !== name);

  return (
    <>
      <h1>{article.title}</h1>
      <UpvotesSection articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo}/>
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <CommentsList comments={articleInfo.comments}/>
      <h3>Other Articles:</h3>
      <ArticlesList articles={otherArticles}/>
    </>
  )
}

export default Article;