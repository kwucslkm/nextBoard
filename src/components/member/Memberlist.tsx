"use client";
import { User } from "@/types";

export default function MemberList({ members }: { members: User[] }) {
  const th = "px-4 py-2 text-left text-sm font-medium text-gray-900 border border-blue-200";
  const td = "px-4 py-2 text-sm text-gray-900 border border-blue-200";

  return (
    <div>
      <h1 className="text-center mb-6 pt-[50px] font-bold text-[30px]">회원목록</h1>

      <table className="mx-auto w-[80%] border border-blue-800 border-collapse text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th scope="col" className={th}>이름</th>
            <th scope="col" className={th}>이메일</th>
            <th scope="col" className={th}>권한</th>
            <th scope="col" className={th}>생성일</th>
            <th scope="col" className={th}>수정일</th>
          </tr>
        </thead>
        <tbody>
          {members.map((m) => (
            <tr key={m.id} className="">
              <td className={td}>{m.name}</td>
              <td className={td}>{m.email}</td>
              <td className={td}>{m.role}</td>
              <td className={td}>{new Date(m.createdAt).toLocaleDateString("ko-KR")}</td>
              <td className={td}>{new Date(m.updatedAt).toLocaleDateString("ko-KR")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
