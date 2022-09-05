// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getAllProductsPages } from "@/lib/get_products";

type Data = {
    page: number;
    products: {
        name: string;
        id: number;
        image: string;
        description: string;
        price: number;
    }[];
}[];

const productsData: Data = getAllProductsPages();

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    res.status(200).json(productsData);
}
