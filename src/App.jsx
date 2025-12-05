import { useState, useEffect, useRef } from 'react'
import bg from "./assets/background.avif";
import up from "./assets/up.png";
import down from "./assets/down.png";
import face from "./assets/face.png";
import mkb from "./assets/mkb_aag.mp3"
function App() {
  let [shift, setShift] = useState(0);
  let [height, setHeight] = useState(70);
  const a = useRef(true);
 
  useEffect(function () {
    var scrollInterval = setInterval(function () {
      setShift(function (prev) {
        
        return prev + 10;
      });
    }, 40);
    document.addEventListener('keydown', function (e) {

      if (a.current === false) return;

      if (e.key === 'w') {
        setHeight(function (prev)
         {
          return prev - 10;
        });
        a.current = false;
        setTimeout(function () {
          a.current = true;
        }, 50);
      }

      if (e.key === 's') {
        setHeight(function (prev) {
          if(height>=70){
           const audio = new Audio(mkb);
          audio.play();
        }
          return prev + 10;
        });
        a.current = false;
        setTimeout(function () {
          a.current = true;
        }, 50);
      }

    });

    return function () {
      clearInterval(scrollInterval);
    };

  }, []);

  return (
    <>
      <div className='w-full h-screen bg-repeat-x bg-cover bg-center'
        style={{ backgroundImage: `url(${bg})`, backgroundPositionX: `-${shift}px` }}
      >

        <div className='w-full h-[300px] bg-no-repeat bg-repeat-x bg-contain'
          style={{ backgroundImage: `url(${up})`, backgroundPositionX: `-${shift}px`, backgroundSize: "240px auto" }}>
        </div>

        <div className='w-full h-[280px] bg-no-repeat bg-repeat-x bg-contain absolute  bottom-0'
          style={{ backgroundImage: `url(${down})`, backgroundPositionX: `-${shift}px` }}>
        </div>

        <div className='w-[210px] h-screen bg-no-repeat absolute left-[300px]'
          style={{ backgroundImage: `url(${face})`, backgroundPositionY: `${height}px` }}>
        </div>

      </div>
    </>
  )
}

export default App;
