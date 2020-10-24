import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req, res) => {

    const newProduct = await prisma.product.create({
        data: {
            name: "New product",
            category: 'pizza',
            priceCents: 1230
        }
    })
    res.json({ product: newProduct })
}
