'use client'
import { useState, useEffect } from 'react';
import { User} from '../../types'

export default function  members(){
  const [members, setMembers] = useState<User[]>([]);
  useEffect(()=>{
    const getMembers = async () => {

    }
  },[])
  return (
    <div>member test</div>
  )
}