/** @type {import("next").NextApiHandler} */
const handler = async (req, res) => {
  return res.status(200).json({ name: "recent blog Api route" });
};

export default handler;
