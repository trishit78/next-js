import React from 'react'
import {prisma} from '@/lib/prisma'

async function fetchData(){
   const user = await prisma.user.findFirst();
   return {
        email:user?.email
   }
}
export default async function User ()  {
    const data = await fetchData();
  return (
    <div>
        {data.email}
    </div>
  )
}
