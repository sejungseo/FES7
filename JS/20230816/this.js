// let person = {
//   fullname: 'dettoli',
//   age: 20,
//   printThis: function () {
//     console.log(this);
//     console.log('this === person: ', this === person); // this는 호출하는 방법에 의해 결정됨
//     console.log('this === window: ', this === window); // window: 브라우저에서 제공하는 전역객체
//   },
// };
// // person.printThis() //person에 의해 호출된 this
// let printThis = person.printThis;
// printThis();

// function printThis() {
//   console.log(this); // default this => window
// }
// printThis();

// let person1 = {
//   name: '홍길동1',
//   printThis: printThis,
// };
// person1.printThis(); // person1에 의해 printThis()가 호출 되었기 때문에 this => person1
// let person2 = {
//   name: '홍길동2',
//   printThis: printThis,
// };
// person2.printThis();
// let person3 = {
//   name: '홍길동3',
//   printThis: printThis,
// };
// person3.printThis();

// window 객체는 모든 객체를 가지고 있는 브라우저에서 제공하는 전역객체
let btn = document.querySelector('button');
btn.addEventListener('click', function () {
  console.log(this);
  console.log(this === btn);
});

// ESS bind - this 설정
// function printThis() {
//   console.log(this); // default this => window
// }
// let person1 = {
//   name: '홍길동',
// };
// let person2 = {
//   name: '김길동',
// };
// let printThis1 = printThis.bind(person1); // this에 person1이 binding된 함수를 반환
// let printThis2 = printThis1.bind(person2); // 홍길동. bind는 한 번만 사용 가능
// printThis1();
// // printThis2();

let person = {
  name: 'dettoli',
  age: 20,
  hello: function(){
    console.log(this); // this => person
    setTimeout((function () {
      console.log(this); 
      console.log(this.name);
      console.log(this.age);
    }).bind(this), 1000);
  },
};
person.hello()

