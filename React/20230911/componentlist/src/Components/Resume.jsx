import React, { useState } from 'react';
// export default React;
// export useState;

function Resume(props) {

    // let like = 0;

    // console.log("useState :", useState());
    let [like, setLike] = useState(""); // 0은 like의 초기값

    function clickLike() {
        // like += 1;
        // console.log(like);

        // like 클릭 수 표시하기 => useState(0)으로 설정
        // setLike(like + 1);
        // console.log(like);

        if(like === "") {
            setLike("like");
        } else {
            setLike("");
        }
        
        console.log(like);
    }

    return (
        <>
            <div style={{ border: "1px solid black" }}>
                <h1>{props.name} 자기소개서</h1>
                <h2>{props.hello}</h2>
                <h3>취미 : {props.hobby}</h3>
                <h4>좋아하는 음식 : {props.food}</h4>
                <h5>좋아하는 색 : <span style={{ color: props.color }}>{props.color}</span></h5>
                <button onClick={clickLike}>like</button><span>{like}</span>
            </div>
        </>
    )
}

export default Resume