export default async function ItemReview({params,}:{params:Promise<{itemId:string;reviewId:string}>;}) {
    const itemId = (await params).itemId;
    const reviewId = (await params).reviewId
    console.log(itemId)
    return <h1>Review {reviewId} for item {itemId}</h1>
}