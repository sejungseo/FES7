import { useEffect, useState } from "react";

// hook도 함수로 시작
function useMouseLocation(initVal) {
  const [mouseLocation, setMouseLocation] = useState( initVal || {x: null, y: null} ); 
  // 초기값(initVal)이 없으면 undefined가 될 수 있기 때문에 훅을 만든 사람이 초기화 시키기

  // DOM을 이용해서 화면상의 마우스 좌표를 얻어내고 mouseLocation에 업데이트 해보세요.
  // mousemove
  useEffect(()=> {
    window.addEventListener("mousemove", (event)=>{
      setMouseLocation({ x: event.x, y: event.y })
    });
  }, []);

  return mouseLocation;
}

export default useMouseLocation;