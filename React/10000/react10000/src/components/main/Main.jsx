import React, { useState } from 'react';
import './Main.css';

export default function Main({setModalShow }) {

  const [field, setField] = useState(''); 
  const [time, setTime] = useState(0);
  const [day, setDay] = useState('');
  // console.log(field, time)
  // console.log(typeof time) // input의 값은 기본으로 string으로 전달받음

  // 이벤트 핸들러 객체는 event를 인자로 받는다
  const handleSubmit = (event) => {
    event.preventDefault();
    setDay(Math.ceil(10000 / parseInt(time))); // 왜 Math.ceil()? => 소수점이 나오면 그 시간만큼 더해줘야 함=> 구하고자 하는 단위가 '일'이라 하루가 더 필요함 
    // 결과 값이 day로 감
  }



  return (
    <main>
        <form className="cont-input" onSubmit={handleSubmit}>
          <p className="txt-wannabe">나는 <input type="text" placeholder="프로그래밍" value={field} onChange={(event)=> setField(event.target.value)}/> 전문가가 될 것이다.</p>
          <p className="txt-time">그래서 앞으로 매일 하루에 <input type="number" placeholder="5" value={time} onChange={(event)=>setTime(event.target.value)}/> 시간씩 훈련할 것이다.</p>
          <button className="btn-exc">나는 며칠 동안 훈련을 해야 1만 시간이 될까?</button>
        </form>
        {day && <section className="cont-result">  
        {/* day가 true라면 && 뒤 부분이 실행. false라면 false실행 */}
          <h2 className="a11y">결과 확인</h2>
          <p className="txt-wannabe">당신은 <strong>{field}</strong> 전문가가 되기 위해서<br /> 대략 <strong>{day}</strong>일 이상 훈련하셔야 합니다.</p>
          <button type="button" className="btn-go" onClick={()=>setModalShow(true)}>훈련하러가기 GO!GO!</button>
          <button type="button" className="btn-share">공유하기</button>
        </section>}
      </main>
  )
}
