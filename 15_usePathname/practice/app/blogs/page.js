import Link from 'next/link'
import React from 'react'

export default function Blogs() {
  return (
    <div className='flex flex-col gap-5 h-screen text-3xl justify-center items-center'>
      <Link href="/blogs/1">Blog 1</Link>
      <Link href="/blogs/2">Blog 2</Link>
      <Link href="/blogs/3">Blog 3</Link>
      <Link href="/blogs/4">Blog 4</Link>
    </div>
  )
}
