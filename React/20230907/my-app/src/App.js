import './App.css';

function App() {
  const name = '라이캣';

  function 함수() {
    return '함수';
  }

  const someStyle = { backgroundColor: 'gold', color:'white'};

  const time = new Date();
  const year = time.getFullYear();
  const month = time.getMonth();
  const date = time.getDate();
  const hour = time.getHours();
  const min = time.getMinutes();
  const sec = time.getSeconds();

  return ( // 소괄호부터 jsx 문법 사용
    <div tabIndex=""> {/* jsx 속성 이름은 카멜케이스 사용 */}
      {/* 주석은 중괄호 사용*/}
      <h1 className='h1' style={someStyle}>안녕 {name}!</h1>
      <h1 className='newClass'>안녕 {함수() ? '함수' : 'JSX'}!</h1>
      <input type="text" maxLength={10} disabled style={{backgroundColor:"red"}}/>
      {/* 닫는 태그 필수, 문자를 제외한 속성값은 중괄호({ })를 사용 */}
      {/* true 값을 가질 때는 true 생략 가능, false는 중괄호 사용 */}
      {/* 인라인스타일 적용 => 객체로 표현. 하이픈 사용 불가. 중괄호 하나만 있으면 JS 문법이라 JSX에서 쓰려면 한번 더 감싸주기 */}


      <h1 style={{ color: 'red' }}>년 : {year}</h1>
      <h2>월/일 : {month + 1}/{date}</h2>
      <h3>시간 : {hour}시 {min}분 {sec}초</h3> 
      
    </div>
  );
}

export default App;
