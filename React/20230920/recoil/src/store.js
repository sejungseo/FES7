import {atom} from "recoil";

// recoil의 저장소 상태의 기본 형태
// key는 상태에 대한 식별자 같은 건데 key 이름을 중복선언하면 에러 발생
// 통상적으로 key 이름은 변수 이름과 동일하게

// default는 초기값
// count = 0
export const count = atom({key:"count", default: 100})
