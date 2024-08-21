import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("pink")


  // onclick expect function, so we can add only the name of function like these two or we can pass the function like we did below on majority of buttons. 
  const addWhite = ()=>{
    setColor("white")
  }
  const addBlack = ()=>{
    setColor("black")
  }


  return (
    // when we click on any button the setColor function will set that color in variable (color), and here we set that variable in backgroundColor.
    <div className='w-full h-screen' style={{backgroundColor: color}}>
      <div className='bg-orange-300 flex justify-center fixed flex-wrap bottom-12 inset-x-0 px-2 py-5'>
        <div className='bg-white flex justify-center items-center gap-3 rounded-3xl px-3 py-5 '>
          <button
          onClick={ () => setColor("red")}
           className='outline-none px-4 py-2 rounded-full text-white shadow-lg ' style={{backgroundColor: "red"}}>
           Red
          </button>

          <button
          onClick={ () => setColor("green")}
           className='outline-none px-4 py-2 rounded-full text-white shadow-lg ' style={{backgroundColor: "green"}}>
           Green
          </button>
          <button
          onClick={ () => setColor("blue")}
           className='outline-none px-4 py-2 rounded-full text-white shadow-lg ' style={{backgroundColor: "blue"}}>
           Blue
          </button>
          <button
          onClick={ () => setColor("olive")}
           className='outline-none px-4 py-2 rounded-full text-white shadow-lg ' style={{backgroundColor: "olive"}}>
           Olive
          </button>
          <button
          onClick={ () => setColor("gray")}
           className='outline-none px-4 py-2 rounded-full text-white shadow-lg ' style={{backgroundColor: "gray"}}>
           Gray
          </button>
          <button
          onClick={ () => setColor("yellow")}
           className='outline-none px-4 py-2 rounded-full text-gray shadow-lg ' style={{backgroundColor: "yellow"}}>
           Yellow
          </button>
          <button
          onClick={ () => setColor("pink")}
           className='outline-none px-4 py-2 rounded-full text-white shadow-lg ' style={{backgroundColor: "pink"}}>
           Pink
          </button>
          <button
          onClick={addWhite}
           className='outline-none px-4 py-2 rounded-full text-black shadow-lg ' style={{backgroundColor: "white"}}>
           White
          </button>
          <button
          onClick={addBlack}
           className='outline-none px-4 py-2 rounded-full text-white shadow-lg ' style={{backgroundColor: "black"}}>
           Black
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
