export default async function ProductDetails({params}:{params:Promise<{itemId:string}>;}) {
    const itemId = (await params).itemId;
    return <h1>Details about product {itemId} </h1>
}