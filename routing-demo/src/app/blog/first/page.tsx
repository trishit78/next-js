function getRandomInt(count:number){
    return Math.floor(Math.random() * count);
}


export default function FirstPage(){
    const random = getRandomInt(2);
    if(random === 1) {
        throw new Error("Error loading blog");
    }

    return (
        <h1>First page of the blog</h1>
    )
}