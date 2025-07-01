export interface IUsers{
    name: string,
    username: string, 
    email: string,
    address : {
        city: string,
        street: string
    },
    phone: string
}