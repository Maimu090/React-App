// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         {/* <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p> */
//     </>
//   )
// }

import React, { useState } from "react";
import Hello from "./components/Hello";

const History = (props) => {
  if (props.allClicks.length === 0) {
    return <div>the app is used by pressing the buttons</div>;
  }
  return <div>button press history: {props.allClicks.join(" ")}</div>;
};

const Button = (props) => {
  console.log(props)
  const { handleClick, text } = props
    return (
<button onClick={handleClick}>
  {text}
</button>
    )
  
}

const App = () => {
  console.log("Hello from component");
 const [age, setAge] = useState(0)
 const [name, setName] = useState('Juha Tauriainen')

 if ( age > 10 ) {
  const [foobar, setFoobar] = useState(null)
 }

for ( let i = 0; i < age; i++ ) {
  const [rightWay, setRightWay] = useState(false)
}

const notGood = () => {
  const [X, setX] = useState(-1000)
}



  return (
    <div>
      {left}
      <Button onClick={handleLeftClick}>left</button>
      <Button onClick={handleRightClick}>right</button>
      {right}
      <History allClicks={allClicks} />
    </div>
  );
};
export default App;
