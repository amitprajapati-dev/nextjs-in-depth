export default async function ({ params }) {
    const { productID } = await params;
  return (
    <div>Product id is : {productID}</div>
  )
}
