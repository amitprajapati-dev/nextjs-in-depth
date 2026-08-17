"use client"

import { useRouter } from 'next/navigation'
import React from 'react'

export default function Dashboard() {
  const router = useRouter()
  return (
    <div>
      <h1>Welcom to Dashboard</h1>
    <hr /><hr />
      <button onClick={() => router.back()}>
          Back
        </button>
    </div>
  )
}
