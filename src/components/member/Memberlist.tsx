"use client"

import {User} from "@/types";

export default function Memberlist({members}:{members:User[]}){
  return(
    <div>
      <h1 >회원 리스트</h1>
      <ul>
        {members.map((m)=>(
          <li key={m.id}>
            {m.name} <span className="text-gray-500">({m.email})</span>
          </li>
        ))}
      </ul>
    </div>
  );
}