import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();
export default async function handle(req, res) {
    const results = await prisma.post.findMany({
        
        orderBy: {
            id: 'desc',
          },
        
      })
      console.log(results)
      res.json({results})
  }

