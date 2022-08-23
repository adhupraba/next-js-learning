/** @type {import("next").NextApiHandler} */
const handler = async (req, res) => {
  return res.status(200).json({ name: "Dashboard Api route" });
};

export default handler;
