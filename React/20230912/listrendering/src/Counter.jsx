import React, { useState } from 'react';;

export default function Counter() {

  const [count, setCount] = useState(0);

  function increment() {
    setCount((prev)=>{
      return prev + 1
    });
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    // state 함수가 실행되면 state가 변경됨. state가 변경되면 컴포넌트가 다시 렌데렁 됩니다.
    // 이 때 state 함수는 바로 실행되지 않고 기다렸다가 가장 마지막에 호출된 state 함수만 실행됩니다.
    // state 함수는 비동기적으로 실행 => 언제 상태가 바뀔지 몰라서
    // 마지막 state 값이 변경될 때까지 기다렸다가 한번에 마지막 statㄷ 함수만 실행함
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <h2>Count의 값은: {count}</h2>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  )
}
