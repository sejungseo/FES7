const arr = [1, 2, 3] // const는 arr -> [1, 2, 3]이 화살표가 바뀌지 못한다는 것입니다.
arr[0] = 1000
arr

// arr = 10 // error

///////////////////////////

const arr = [1, 2, 3]
arr.push(4)  // 맨 뒤에 추가
arr

///////////////////////////

const arr = [1, 2, 3]
arr.pop()  // 맨 뒤 제거
arr
