import React from 'react'

export default async function Slug({ params }) {
    const { slug } = await params;

  return (
    <div className=''>
        <h1>Docs : </h1>
        {slug.map((item) => (
            <p>{item}</p>
        ))}
      <h1>You are catched by Slug</h1>
    </div>
  )
}
