
import { useEffect, useState } from 'react';
import './App.css'

function App() {
const [second, setSecond]= useState(0)

  useEffect(() => {
  const timerId= setInterval(()=> {
    setSecond((prev)=> prev+1)

   },1000) //1000 means 1000ms means 1 second

   return ()=>clearInterval(timerId); // call back function return using CleanUp function

  }, []);

  return (
    <>
    <h1>{second}</h1>
    </>
  )

}

export default App;
