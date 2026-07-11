import type { NextApiRequest, NextApiResponse } from "next";

export async function handleRoute(
  _req: NextApiRequest,
  res: NextApiResponse,
) {
  return res
    .status(404)
    .json({ error: "Questions are not enabled in this deployment." });
}
