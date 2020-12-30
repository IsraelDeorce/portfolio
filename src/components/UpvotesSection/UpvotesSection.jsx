import axiosConfig from '../../model/service/axiosConfig';

function UpvotesSection({ articleName, upvotes, setArticleInfo }) {
  const upvoteArticle = async () => {
    const response = await axiosConfig.post(`/api/articles/${articleName}/upvote`);
    setArticleInfo(response.data);
  }

  return (
    <>
      <button onClick={upvoteArticle}>Add Upvote</button>
      <p>This post has been upvoted {upvotes} times!</p>
    </>
  )
};

export default UpvotesSection