import axios from "axios"

type User = {
    id:number,
    name:string,
    email:string,
    username:string,
    phone:string
}

const UserServer = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    const users:User[] = await res.data;
    console.log(users)

    return (
        <h1>{'hello'}</h1>
    )

}

export default UserServer