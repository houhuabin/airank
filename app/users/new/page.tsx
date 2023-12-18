'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

const NewUser = () => {
  const router = useRouter();
  return (
    <button className='btn' onClick={()=>{router.push("/users")}}> Create</button>
  )
}

export default NewUser