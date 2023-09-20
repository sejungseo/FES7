import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { count } from './store';

function App() {
  const [state, setState] = useRecoilState(count);
  return (
    <div>
      {state}
      <App2 />
    </div>
  );
}

function App2() {
  return <App3 />;
}

function App3() {
  return <App4 />;
}

function App4() {
  const [state, setState] = useRecoilState(count);
  return (
  <>
    <button onClick={()=> setState(state + 1)}>증가</button>
  </>
  );
}

export default App;