// 1. 상수 객체
const animal = {
    type : "고양이",
    name : "나비",
    color : "black",
};


animal.age = 2; //추가
animal.name = "까망이" // 수정
delete animal.color // 삭제

console.log(animal);

// 상수로 객체를 만들었는데 위 처럼 내부 프로퍼티 수정은 가능

// 2. 메서드
// -> 객체 프로퍼티중 값이 함수인 것을 이야기함.

const person = {
    name : "",
    sayHi : () => console.log("Hi"),
}

person.sayHi();
person["sayHi"]();
