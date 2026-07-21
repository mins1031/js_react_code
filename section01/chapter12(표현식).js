// 1. 함수 표현식
function funcA() {
    console.log("funcA");
}

let varA = funcA;
console.log(varA);

// 출력값. -> 오... 신기하다 함수 자체를 변수에 담을수 있음 ㅇㅇ
// ƒ funcA() {
//    console.log("funcA");
// }

// 아래처럼 변수에 함수를 선언할수도 있음.
// 이렇게 만든 표현식은 호이스팅에 해당되지 않음
// 콜백함수 같은 개념에서 유용하게 활용하기 때문에 알아두자
let varB = function funcB() { // 익명함수
    console.log("funcB");
}

varB();
// fundB(); // 콘솔에서 에러남.

console.log("== Part2 == ");

// 2. 화살표 함수 = 
let varC = () => { 
    return 1;
}
// let varC = () => 1; 더 간단한 버전

console.log("함수를 초기화 : " + varC);
console.log("함수의 결과를 초기화 : " + varC());

let up1 = (value) => value + 1;
console.log(up1);
console.log(up1(2));