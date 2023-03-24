import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "@/helpers/sanity";

const query = groq`
    *[_type == "social"]
`

type Data = {
    socials: Social[];
}

export default async function GET(req: NextApiRequest, res: NextApiResponse<Data>) {
    const socials: Social[] = await sanityClient.fetch(query);
    return res.status(200).json({ socials })
}