import { useEffect, useState } from "react"
import Card from './Card.jsx'

export default function DisplayUsers() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then((res) => {
    //             if (!res.ok) {

    //                 throw new Error(res.message || 'Something went wrong');
    //             }
    //             console.log(res)
    //             return res.json()
    //         })
    //         .then((data) => setData(data))
    //         .catch((err) => setError(err.message))
    //         .finally(() => {
    //             setIsLoading(false)
    //         })
    // }, []);

    useEffect(()=>{

        const fetchUsers = async ()=>{
            try{
                const res = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!res.ok) {

                    throw new Error(res.message || 'Something went wrong');
                }
                const data = await res.json();
                setData(data);
                

            }catch(err){
              setError(err.message)

            }finally{
                setIsLoading(false)

            }
        };
        fetchUsers();
    }, [])

    if (isLoading) {
        return <p>Loading...</p>
    }
    if (error) {
        return <p>{error}</p>
    }

    return (
        <div>
            {
                data.map(user => <Card name={user.name} email={user.email}></Card>)
            }
        </div>
    )
}