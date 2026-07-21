// 1. NumberType

let num1 = 27;
let num2 = 1.5;
let num3 = -20;

let inf = Infinity; // 양의 무한대
let mInf = -Infinity; // 음의 무한대

let nan = NaN; // Not a Number. 이 값은 수치연산이 실패했을때의 결과로 활용
console.log(1 * "hello") // 결과 Nan. 프로그램이 꺼지진않네.. 안전성은 자바보다 있는듯?


// 2. String type
let myName = "정민영"; // 문자열을 '' or "" 필수
let myLocation = "광주";
let introduce = myName + myLocation; // 덧셈 연산도 지원

let introduceText = `${myName}`; // 변수명 동적할당 가능 : `` 과 ${} 의 혼합
// 템플릿 리터럴 문법 이라고함.

// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type
let empty = null;
console.log("empty is : " + empty);

// 5. Undefinded Type
let none; // 따로 초기화를 안했을때의 기초상태
console.log(none);

//Null 과 Undefinded Type 은 서로 비슷한 상태라고함.