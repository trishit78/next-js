'use client'
import { useEffect, useState } from "react"

type UserType = {
    id:number,
    name:string,
    email:string,
    username:string,
    phone:string
}


const UserClient = () => {
    const [users,setUsers] = useState<UserType[]>([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState("");

    useEffect(()=>{
        async function fetchUsers() {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/users");
                if(!res.ok){
                    throw new Error("Data fetching is unsuccessful");
                }
                const data = await res.json();
                setUsers(data);
            } catch (error) {
                if(error instanceof Error)
                setError(error.message);
                else{
                    setError("unknown error occured");
                }
            }finally{
                setLoading(false);
            }
        }

        fetchUsers();
    },[])


    if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <ul className="space-y-4 p-4">
      {users.map((user) => (
        <li
          key={user.id}
          className="p-4 bg-white shadow-md rounded-lg text-gray-700"
        >
          <div className="font-bold">{user.name}</div>
          <div className="text-sm">
            <div>Username: {user.username}</div>
            <div>Email: {user.email}</div>
            <div>Phone: {user.phone}</div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default UserClient