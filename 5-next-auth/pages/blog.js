import { getSession } from "next-auth/react";

const Blog = ({ data }) => {
  return (
    <div>
      <h1>Blog Page</h1>
      <p>data - {data}</p>
    </div>
  );
};

export default Blog;

/** @type {import("next").GetServerSideProps} */
export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin?callbackUrl=http://localhost:3000/blog",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
      data: session ? "List of 100 personalized posts" : "list of free posts",
    },
  };
};
