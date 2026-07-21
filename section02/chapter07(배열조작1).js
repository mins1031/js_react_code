// 6가지의 요소 조작메서드

// 1. push
// 배열의 맨뒤에 새로운 요소 추가
let arr1 = [1,2,3];
arr1.push(4);
const newLenght = arr1.push(5,6); // 여러개 추가

console.log(arr1);
console.log(newLenght);

console.log("===== 1 end =====");

// 2. pop
// 배열의 맨 뒤에 있는 요소 제거 및 반환
let a2 = [1,2,3];
const poppedItem = a2.pop();

console.log(a2);
console.log(poppedItem);

console.log("===== 2 end =====");

// 3. shift 메서드
// 배열의 맨앞 제거, 반환
let a3 = [1,2,3];
const shiftedItem = a3.shift();
console.log(a3);
console.log(shiftedItem);

console.log("===== 3 end =====");

// 4. unshift 메서드
// 배열의 맨앞 새로운 요소 추가
let a4 = [1,2,3];
const newLenght2 = a4.unshift(0);
console.log(a4);
console.log(newLenght2);

console.log("===== 4 end =====");
// 주의점은 3,4는 1,2보다 느리게 동작함. 인덱스를 한칸씩 밀거나 당겨야하기 때문임.

// 5. slice
// 마치 가위처럼 배열의 특정범위를 잘라서 새로운 배열로 반환
let arr5 = [1,2,3,4,5];
let sliced = arr5.slice(2, 5); // 보통 끝 인덱스까지 자르는 경우는 2번째 인자 안줘도 됨.
console.log(sliced);
console.log(arr5); // 원본배열에 영향은 없음.

let reverseSliced = arr5.slice(-2); // 뒤에서 2개 잘라냄
console.log(reverseSliced);
console.log("===== 5 end =====");

// 6. concat
// 두개의 서로다른 배열을 이어 붙혀 새 배열 반환.
let arr6 = [1,2];
let arr7 = [3,4];
let concated = arr6.concat(arr7);

console.log(concated);

console.log("===== 5 end =====");

