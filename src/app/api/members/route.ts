import { prisma } from '@/lib/db'
export async function get() {
  const members = await prisma.user.findMany();
  
}