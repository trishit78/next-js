function getRandomInt(count:number){
    return Math.floor(Math.random() * count);
}

export default async function ItemReview({params,}:{params:Promise<{itemId:string;reviewId:string}>;}) {
    // const random = getRandomInt(2);
    // if(random === 1) {
    //     throw new Error("Error loading review");
    // }
    
    const itemId = (await params).itemId;
    const reviewId = (await params).reviewId
    console.log(itemId)
    return <h1>Review {reviewId} for item {itemId}</h1>
}