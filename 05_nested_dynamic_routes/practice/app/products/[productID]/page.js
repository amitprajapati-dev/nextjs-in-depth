import React from 'react'

export default async function ProductId({ params }) {
    const { productID } = await params;
  return (
    <div>
        <h1>Product ID : {productID} </h1>
    </div>
  )
}
