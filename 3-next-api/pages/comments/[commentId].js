import { comments } from "../../data/comments";

const Comment = ({ comment }) => {
  return (
    <div>
      <h1>Comment - {comment.id}</h1>
      <h3>Text - {comment.text}</h3>
    </div>
  );
};

export default Comment;

/** @type {import("next").GetStaticPaths} */
export const getStaticPaths = async () => {
  const paths = comments.map((cmnt) => ({ params: { commentId: `${cmnt.id}` } }));

  return {
    paths,
    fallback: "blocking",
  };
};

/** @type {import("next").GetStaticProps} */
export const getStaticProps = async (context) => {
  const { params } = context;
  const comment = comments.find((cmnt) => cmnt.id === +params.commentId);

  return { props: { comment } };
};
