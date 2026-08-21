import Link from "next/link"

export default function Products() {
  return (
    <div className="p-10 flex flex-col gap-5">
      <Link href="/products/1">Page 1</Link>
      <Link href="/products/2">Page 2</Link>
      <Link href="/products/3">Page 3</Link>
      <Link href="/products/4">Page 4</Link>
    </div>
  )
}
