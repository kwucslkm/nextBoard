import { prisma } from "@/lib/db";
import MemberList from "@/components/member/Memberlist";
import { User } from "@/types";

export default async function MembersPage() {
  const members: User[] = await prisma.user.findMany({ orderBy: { createdAt: "desc" } });
  return <MemberList members={members} />;
}
