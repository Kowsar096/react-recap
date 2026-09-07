
import { useState } from 'react';
import './App.css'
import Card from './components/Card';
// import Counter from './components/counter';
// import TestComponent from './TestComponent';

// const members = [
//   { name: 'Kowsar', age: 26 },
//   { name: 'Shakil', age: 9 },
//   { name: 'Taosif', age: 25 },
//   { name: 'Shawon', age: 24 },
//   { name: 'Irteja', age: 17 },
//   { name: 'Robin', age: 20 },
// ]

// function App() {
//   return (
//   <div>

//   <Card name='Kowsar'  age={2}/>
//   <Card name='Shakil'  age={25}/>
//   <Card name='Taosif'  age={2}/>
//   <Card name='Shawon'  age={25}/>
//   <Card name='Irteja'  age={2}/>
//   <Card name='Rimon'  age={25}/>
//   </div>
//   )

// }

      {/* <Card name={members[0].name}  age={members[0].age}/>
  <Card name={members[2].name} age={members[1].age}/>
  <Card name={members[3].name} age={members[2].age}/>
  <Card name={members[0].name} age={members[3].age}/>
  <Card name={members[4].name} age={members[4].age}/>
  <Card name={members[5].name} age={members[5].age}/> */}


      


function App() {

const [name, setName]= useState('');
const [age, setAge]= useState('');
const [members, setMembers]= useState([
   { name: 'Kowsar', age: 26 },
  { name: 'Shakil', age: 9 },
  { name: 'Taosif', age: 25 },
  { name: 'Shawon', age: 24 },
  { name: 'Irteja', age: 17 },
  { name: 'Robin', age: 20 },
])

  const handleSubmit = (e)=>{
    e.preventDefault();  //synthetic event
    // setMembers([...members, {name, age}]); // copy using JavaScript spread operator
    setMembers((prev) => [...prev,{name,age}]) // reactive way using callback (prev= previous)
    setName('');
    setAge('');
  }

  return (
    <div>
      <form className='inputDiv' onSubmit={handleSubmit}>
        <input className='input' type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
        <input className='input' type="number" onChange={(e)=>setAge(e.target.value)} value={age}/>
      
        
      <button className='button'>Submit</button>
      </form>
      {members
          .filter((members) => members.age > 18)
          .sort((a, b) => a.age - b.age)
          .map((members) => (
            <Card name={members.name} age={members.age} />
          ))}

    </div>
  )

}

export default App;

// counter 
// function App() {
//   return (
//     <div>

//      <Counter/>
    
//     </div>
//   )

// }

// export default App;
