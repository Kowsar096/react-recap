import { useEffect, useState } from "react"
import Card from './Card.jsx'

export default function DisplayUsers(){
const [data, setData]=useState([]);
const[isLoading, setIsLoading]=useState(true);

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) =>res.json())
        .then((data) => setData(data))
        .finally(()=>{
            setIsLoading(false)
        })
    }, []);
    
    if(isLoading){
        return <p>Loading...</p>
    }
    return(
        <div>
            {
                data.map(user => <Card name={user.name} email={user.email}></Card>)
            }
        </div>
    )
}