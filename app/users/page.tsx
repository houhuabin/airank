import React, { Suspense } from 'react'
import UserTable from './UserTable'
import Link from 'next/link'
interface Props {

  searchParams: { sortOrder: string }
}

const UserPage = async ({ searchParams: { sortOrder } }: Props) => {

  return (
    <div>
      <h1>User</h1>
      <Link href="/users/new" className='btn'>New User</Link>

      <UserTable sortOrder={sortOrder} />

    </div>
  )
}

export default UserPage