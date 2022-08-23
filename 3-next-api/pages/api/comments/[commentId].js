import { comments } from "../../../data/comments";

/** @type {import("next").NextApiHandler} */
const handler = async (req, res) => {
  if (req.method === "GET") {
    const { commentId } = req.query;
    const comment = comments.find((cmnt, idx) => cmnt.id === +commentId);

    return res.status(200).json(comment);
  } else if (req.method === "DELETE") {
    const { commentId } = req.query;
    const idx = comments.findIndex((cmnt) => cmnt.id === +commentId);
    const deleted = comments.splice(idx, 1)[0];

    return res.status(200).json(deleted);
  }
};

export default handler;
