import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();
export default async function handle(req, res) {
    const results = await prisma.post.findMany({
        
        take: 10,
        
      })
      res.json(results)
  }

