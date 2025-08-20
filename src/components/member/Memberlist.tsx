"use client";
import { User } from "@/types";

export default function MemberList({ members }: { members: User[] }) {
  return (
    <div>
      <h1 className="flex justify-center p-[50px] font-bold text-[30px]">회원목록</h1>
      <ul>
        <table className="divide-y divide-blue-200 border border-blue-500 mx-[20px]">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">이름</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">이메일</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">권한</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">생성일</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">수정일</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-blue-200">
            {members.map((m) => (
              <tr key={m.id}>
                <td className="px-4 py-2 text-sm text-gray-900">{m.name}</td>
                <td className="px-4 py-2 text-sm text-gray-900">{m.email}</td>
                <td className="px-4 py-2 text-sm text-gray-900">{m.role}</td>
                <td className="px-4 py-2 text-sm text-gray-900">
                  {new Date(m.createdAt).toLocaleDateString()}
                </td>
                <td className="px-4 py-2 text-sm text-gray-900">
                  {new Date(m.updatedAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </ul>
    </div>
  );
}
