import { getSession } from "next-auth/react";

/** @type {import("next").NextApiHandler} */
const handler = async (req, res) => {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ error: "Unauthenticated" });
  }

  return res.status(200).json({ message: "Success", session });
};

export default handler;
