import { useState, useEffect } from 'react';
import { User} from '../../types'
import Memberlist from '@/components/member/Memberlist';

export default async function members(){
  const members: User[] = await prisma?.user.findMany();
  return <Memberlist members={members} />;
}