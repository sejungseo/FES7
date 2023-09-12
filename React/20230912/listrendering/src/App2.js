import React, {useState} from 'react';
import Counter from './Counter';

export default function App2() {
  const [data, setData] = useState([
      {
        title: "개발자 무릎 담요",
        price: 17500,
        id: 101,
      },
      {
        title: "Hack Your Life 개발자 노트북 파우치",
        price: 29000,
        id: 102,
      },
      {
        title: "우당탕탕 라이켓의 실험실 스티커북",
        price: 29000,
        id: 103,
      },
      {
        title: "버그를 Java라 버그잡는 개리씨 키링",
        price: 29000,
        id: 104,
      },
    ]);

    

    function deleteFunc (id){
      setData(
        data.filter((item) => {
        return item.id !== id
        //id가 다른 것들만 가지고 새로운 배열 생성 => 버튼을 누르지 않은 것들 => 밑에서 deleteFunc로 버튼을 누른 요소는 삭제할 거임
      }));
    }

    /*
    // 위 함수의 수정 버전
    // 이러한 방식을 함수형 업데이트라고 합니다.
    // 함수형 업데이트의 장점은 콜백함수의 인자에 이전의 상태가 들어가는 것을 리액트가 보장합니다.
    // function deleteFunc(id) {
    //     setData((prevData) => {
    //         return prevData.filter((item) => {
    //             return item.id !== id
    //         })
    //     });
    // }
    */

  return (
    <>
      <ul>
        {data.map((item) => { // index대신 id값 이용
          return (
            <li key={item.id}>
                <h2>{item.title}</h2>
                <strong>{item.price}</strong>
                <button onClick={() => deleteFunc(item.id)}>삭제</button>
  
                {/* 사용자가 돔에 직접 접근하여 제어하는 것은 컴포넌트 관리의 일관성에 위배된다. */}
                {/* <button onClick={(event) => event.target.closest('li').remove()}>삭제</button> */}
                {/* event가 일어난 대상과 가장 가까운 li를 삭제하겠다 */}
                {/* 하지만 이 방법은 권장되지 않음 => 돔에 직접 접근하기 떄문 => 리액트는 화면에 변화가 생길 때 이전&이후 버츄얼 돔을 비교하는데 직접 돔을 건드려서 삭제하면 리액트가 비교할 수 없게됨 => useState를 이용해야 virtual DOM 비교 가능 */}
            </li>
          )
        })}
      </ul>

      <Counter />
    </>
  )
}
