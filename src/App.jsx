import { useState } from 'react'
import bg from "./assets/background.avif";
import up from "./assets/up.png";
import down from "./assets/down.png";
function App() {
  let [shift,setShift]=useState(0)
      // setInterval(function(){
      //   shift=shift+10
      //   setShift(shift)
      // },50)
    
  
  return (
    <>
      <div className='w-full h-screen bg-repeat-x bg-cover bg-center relative'
      style={{backgroundImage:`url(${bg})`,
               transform: `translateX(-${shift}px)`
      }}
      >
        <div className='w-[200px] h-[300px] bg-no-repeat bg-contain absolute left-[800px] '
        style={{backgroundImage:`url(${up})`}}></div>
        <div className='w-[200px] h-[300px] bg-no-repeat bg-contain absolute left-[800px] bottom-[0px]'
        style={{backgroundImage:`url(${down})`}}></div>
      </div>
      
    </>
  )
}
export default App
