// ! SERVER SIDE RENDERING (SSR)

import { useRouter } from "next/router";

const ArticleListByCategory = ({ categoryArticles }) => {
  const router = useRouter();

  return (
    <div>
      <h1>List of {router.query.category} News Articles</h1>
      {categoryArticles.map((article, idx) => (
        <div key={idx}>
          <h2>
            {article.id} - {article.title} - {article.category}
          </h2>
          <p>{article.description}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ArticleListByCategory;

/** @type {import('next').GetServerSideProps} */
export const getServerSideProps = async (context) => {
  const { params } = context;
  const categoryArticles = await (await fetch(`http://localhost:4000/news?category=${params.category}`)).json();
  console.log(`generating ${params.category} news server side rendering`);

  return { props: { categoryArticles } };
};
