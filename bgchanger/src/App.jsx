import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [color, setColor] = useState("olive")

  return (
    
      <div className=" w-full h-screen duration-200" style = {{backgroundColor: color}} >
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-0'> 
          <div className='flex flex-wrap justify-center gap-3 px-3 py-2 rounded-2xl border-0.3'> 
            <button className='px-4 py-2 bg-blue-500 rounded-lg text-white hover:bg-blue-700 duration-200 ' onClick={() => setColor("blue")}> Blue </button>
            <button className='px-4 py-2 bg-red-500 rounded-lg text-white hover:bg-red-700 duration-200 ' onClick={() => setColor("red")} > Red </button>
            <button className='px-4 py-2 bg-green-500 rounded-lg text-white hover:bg-green-700 duration-200 ' onClick={() => setColor("green")} > Green </button>
            <button className='px-4 py-2 bg-yellow-500 rounded-lg text-white hover:bg-yellow-700 duration-200 ' onClick={() => setColor("yellow")} > Yellow </button>
            <button className='px-4 py-2 bg-purple-500 rounded-lg text-white hover:bg-purple-700 duration-200 ' onClick={() => setColor("purple")} > Purple </button>
            <button className='px-4 py-2 bg-pink-500 rounded-lg text-white hover:bg-pink-700 duration-200 ' onClick={() => setColor("pink")} > Pink </button>
            <button className='px-4 py-2 bg-gray-500 rounded-lg text-white hover:bg-gray-700 duration-200 ' onClick={() => setColor("gray")} > Gray </button>
            
          </div>
        </div>
        </div>
      
    
  )
}

export default App
