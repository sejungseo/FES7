import { useState, useMemo } from 'react'

function 부하(){
  // console.time(); // 함수 시작할 때
  let s = 0
  for (let i = 0; i < 1000000000; i++) {
    s += i
  }
  // console.timeEnd(); // 함수 끝날 때
  return s
}

function App() {
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  let result = useMemo(()=> {
    return 부하(); // 실행이 오래 걸리는 함수를 안에 넣어줌
  }, [countTwo]); // 만약 의존배열이 없다면 콜백함수를 무조건 실행

  const handleCountUp = (e) => {
    setCount(count + 1)
    console.log(count)
  }

  const handleCountUpTwo = (e) => {
    setCountTwo(countTwo + 1)
    console.log(countTwo);
  }
  
  return (
    <div>
      <h1>계산 결과 : {result}</h1>
      <div>{count}</div>
      <div>{countTwo}</div>
      <button onClick={handleCountUp}>UP!</button>
      <button onClick={handleCountUpTwo}>UP2!</button>
    </div>
  );
}
export default App;