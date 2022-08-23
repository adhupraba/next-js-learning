/** @type {import("next").NextApiHandler} */
const handler = async (req, res) => {
  const { params } = req.query;
  return res.status(200).json(params);
};

export default handler;
