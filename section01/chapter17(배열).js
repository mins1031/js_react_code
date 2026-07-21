// 1. 배열 생성
let arrA = new Array(); // 배열 생성자
let arrB = [] // 배열 리터럴 (대부분 사용)

let arrC = [1,2,3];
console.log(arrC);
// 배열은 내부에 값 선언이 자유로움, 길이 한계도 x(int가..?)

let arrD = [
    1, true, "HI!", null, undefined,
    () => {}, // 함수 = 메서드
    {}, // 객체
    [] // 배열
];
console.log(arrD);

//2. 배열 원소 접근
let item1 = arrD[0];
let item2 = arrD[1];

console.log(item1);
console.log(item2);

arrD[0] = "Hello@"; // 원소 변경.

console.log(arrD[0]);