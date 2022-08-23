// ! SERVER SIDE RENDERING (SSR)

const NewsArticleList = ({ articles }) => {
  return (
    <div>
      <h1>List of News Articles</h1>
      {articles.map((article, idx) => (
        <div key={idx}>
          <h2>
            {article.id} - {article.title} - {article.category}
          </h2>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default NewsArticleList;

/** @type {import('next').GetServerSideProps} */
export const getServerSideProps = async () => {
  const articles = await (await fetch("http://localhost:4000/news")).json();
  console.log("generating news list server side rendering");
  return { props: { articles } };
};
