import './card.css'
import NestedDisplay from './NestedDisplay'
export default function Display({count}){
    return(
        <div className="card-blue">
            <h1>{count}</h1>
             <NestedDisplay count ={count}/>
        </div>
    )
}