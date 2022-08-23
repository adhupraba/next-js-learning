/** @type {import("next").NextApiHandler} */
const handler = async (req, res) => {
  res.setPreviewData({ user: "Adharsh" });
  res.redirect(req.query.redirect);
};

export default handler;
