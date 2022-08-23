import { useState } from "react";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [userComment, setUserComment] = useState("");

  const fetchComments = async () => {
    const data = await (await fetch("/api/comments")).json();
    setComments((prevState) => [...prevState, ...data]);
  };

  const postComment = async () => {
    const data = await (
      await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ comment: userComment }),
      })
    ).json();

    setUserComment("");
    setComments((prevState) => [...prevState, data]);
  };

  const deleteComment = async (id) => {
    const data = await (await fetch(`/api/comments/${id}`, { method: "DELETE" })).json();

    setComments((prevState) => prevState.filter((cmnt) => cmnt.id !== id));
  };

  return (
    <div>
      <input type="text" value={userComment} onChange={(e) => setUserComment(e.target.value)} />
      <button onClick={postComment}>Submit Comment</button>
      <h1>Comments</h1>
      <button onClick={fetchComments}>Load Comments</button>
      {comments.map((cmnt, idx) => (
        <div key={idx}>
          <h3>
            {cmnt.id} - {cmnt.text} ----- <button onClick={() => deleteComment(cmnt.id)}>delete</button>
          </h3>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Comments;
