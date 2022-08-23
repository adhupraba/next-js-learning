// ! STATIC SITE GENERATION (SSG)

import { useRouter } from "next/router";

const Post = ({ post }) => {
  const router = useRouter();

  // if (router.isFallback) {
  //   return <h1>Loading.....</h1>;
  // }

  return (
    <div>
      <h1>id - {post.id}</h1>
      <h1>title - {post.title}</h1>
      <h3>body - {post.body}</h3>
    </div>
  );
};

export default Post;

/** @type {import('next').GetStaticPaths} */
export const getStaticPaths = async () => {
  // const posts = await (await fetch("https://jsonplaceholder.typicode.com/posts")).json();
  // const paths = posts.map((post) => ({ params: { postId: `${post.id}` } }));

  // const paths = [{ params: { postId: "1" } }, { params: { postId: "2" } }, { params: { postId: "3" } }];
  const paths = ["1", "2", "3"].map((num) => ({ params: { postId: num } }));

  return {
    paths,
    fallback: "blocking",
  };
};

/** @type {import('next').GetStaticProps} */
export const getStaticProps = async (context) => {
  const { params } = context;
  const post = await (await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)).json();

  if (!post.id) {
    return { notFound: true };
  }

  console.log(`generating page for /posts/${params.postId}`);

  return { props: { post } };
};
