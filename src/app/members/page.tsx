'use client'
import { useState, useEffect } from 'react';
import { User} from '../../types'
import Memberlist from '@/components/member/Memberlist';

export default function  members(){
  const [members, setMembers] = useState<User[]>([]);
  useEffect(()=>{
    const getMembers = async () => {

    }
  },[])
  return <Memberlist />
}