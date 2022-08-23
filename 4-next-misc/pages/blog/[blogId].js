import Head from "next/head";

const Blog = ({ title, description }) => {
  return (
    <div className="content">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>env google url - {process.env.NEXT_PUBLIC_GOOGLE_URL}</p>
      </div>
    </div>
  );
};

export default Blog;

export const getServerSideProps = async () => {
  const user = process.env.DB_USER;
  const password = process.env.DB_PASSWORD;
  const url = process.env.NEXT_PUBLIC_GOOGLE_URL;

  console.log({ user, password, url });

  return {
    props: {
      title: "Article Title",
      description: "Article Description",
    },
  };
};
