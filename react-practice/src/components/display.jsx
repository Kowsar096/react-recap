import { use } from 'react'
import './card.css'
import NestedDisplay from './NestedDisplay'
import { CounterContext } from '../providers/counter.context'
export default function Display(){
    const {count} = use(CounterContext)
    return(
        <div className="card-blue">
            <h1>{count}</h1>
             <NestedDisplay />
        </div>
    )
}