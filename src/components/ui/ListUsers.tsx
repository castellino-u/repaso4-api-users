import { useEffect, useState } from "react"
import { getAllUsers } from "../../crud/crudUser"
import { IUsers } from "../../types/IUsers"
import { CardUser } from "./CardUser"



export const ListUsers = () => {

    const [users, setUsers] = useState<IUsers[]>()

    useEffect(()=>{
        (async()=>{
            const response = await getAllUsers()
            setUsers(response)
        })()
    })



    return (

    <div className="flex flex-wrap gap-7 p-3 justify-center">
        {users?.map((users)=>(
        <CardUser user={users}></CardUser>
    ))}</div>
    )
}
