import { useState } from 'react';

function useInput(initState) { // input 요소에 사용할 수 있는 훅이겠구나~ => customHook : 이름에 의미를 담아서 사용 가능
    const [value, setValue] = useState(initState);

    function onChange(e) { // 이벤트 리스너의 핸들러 함수
        setValue(e.target.value); 
    }
    return [value, onChange];
}

export default useInput;