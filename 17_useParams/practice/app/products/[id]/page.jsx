"use client"

import { useParams } from "next/navigation";

export default function ProductId() {
  const params = useParams();  
  return (
    <div>
        <h1>Product page details</h1><br />
        Product page number : {params.id}
    </div>
  )
}