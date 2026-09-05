// export default function Card(props){

//     return <div>
//        { props.children}
//        <p> First Name: {props.firstName}</p>
//        <p> Last Name: {props.lastName}</p>
//        <p> Age: {props.age}</p>
//     </div>
// }


// export default function Card({ children,firstName,lastName,age}){

//     return <div>
//        {children}
//        <p> First Name: {firstName}</p>
//        <p> Last Name: {lastName}</p>
//        <p> Age: {age}</p>
//     </div>
// }

// Conditional Rendering
// import "./card.css"
// export default function Card({ name,age}){
// if(age < 18){
//     return(
//         <div className="card">
//             <p>You are too young!</p>
//             </div>
//     )
// }

//     return( <div className="card"> 
//        <p> Name: {name}</p>
//        <p> Age: {age}</p>
//     </div>)
// }

// import "./card.css"
// export default function Card({ name, age }) {
//     return (
//         <>
//             {age > 18 && (
//                 <div className="card">
//                     <p> Name: {name}</p>
//                     <p> Age: {age}</p>
//                 </div>
//             )

//             }
//         </>
//     )
// }


// ternary operator
// import "./card.css"
// export default function Card({ name, age }) {
//     return (
//         <>
//             {age > 18 ? (
//                 <div className="card">
//                     <p> Name: {name}</p>
//                     <p> Age: {age}</p>
//                 </div>
//             ) : (<div className="card">
//                 <p>{name} you are too young! </p>
//             </div>)

//             }
//         </>
//     )
// }



import { useState } from "react";
import "./card.css"

// React hook
//* 1. must use in component top level
//* 2. must use inside react component

export default function Card({ name, age }) {

    const [member, setMember] = useState('');

    const clickHandler = () => {
        // console.log('Greetings', name);
        setMember(name);
    }
    console.log(member)

    // const anotherClickHandler = () => {
    //     console.log("Another greetings");
    // }
    // const greetings = () => {
    //     clickHandler();
    //     anotherClickHandler();
    // }    
    return (

        <div
            onClick={clickHandler}
            //   onMouseDown={}
            //   onMouseEnter={}
            //   onMouseLeave={}
            //   onScroll={}
            className="card">
            <p> Name: {name}</p>
            <p> Age: {age}</p>
            {member && <p>Gretings {member}</p>}
        </div>

    )
}