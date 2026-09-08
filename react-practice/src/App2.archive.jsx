//Counter 


import './App.css'

import Counter from './components/counter';
import Display from './components/display';
import CounterProvider from './providers/counter.provider';


 
      


function App() {
  


  //* counter state
  // const [count, setCount] = useState(0); // state liftUp

  // we can share value between components using props its (unidirectional)

  return (
    <CounterProvider>
      <Counter/>
      <Display/>

     

    </CounterProvider>
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
