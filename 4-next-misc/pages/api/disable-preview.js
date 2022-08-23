/** @type {import("next").NextApiHandler} */
const handler = async (req, res) => {
  res.clearPreviewData();
  res.end("Preview mode disabled");
};

export default handler;
