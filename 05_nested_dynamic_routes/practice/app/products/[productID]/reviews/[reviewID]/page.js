
export default async function ReviewID({ params }) {
    const { reviewID , productID } = await params;

  return (
    <div>
        <h1>Review ID : {reviewID}</h1>
        <h1>Product ID : {productID} </h1>
    </div>
  )
}
