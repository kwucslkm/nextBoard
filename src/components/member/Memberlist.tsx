"use client";
import { User } from "@/types";

export default function MemberList({ members }: { members: User[] }) {
  return (
    <ul>
      {members.map(m => (
        <li key={m.id}>{m.name} <span className="text-gray-500">({m.email})</span></li>
      ))}
    </ul>
  );
}