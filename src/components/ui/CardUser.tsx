//recibo a los usuarios, entonces por eso este es un fc

import { IUsers } from "../../types/IUsers"

interface Props{
    user : IUsers
}


export const CardUser : React.FC <Props> = ({user}) => {

    
    return (
    <div className="bg-amber-500 h-[340px] w-[300px] flex flex-col items-center justify-center gap-2.5">
        <h4>Name: {user.name}</h4>
        <p>User: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Addrees: <br /> City: {user.address.city} <br /> Street: {user.address.street}</p>

    </div>
    )
}
