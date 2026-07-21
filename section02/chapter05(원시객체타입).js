// 원시타입 vs 객체타입에 대한 내용
// 자바랑 거의 유사함. 특히 객체는 뭐.. 저장 매커니즘이 동일해 새로운 내용은 없지만 복사관점에서 약간 다른듯

let obj1 = {name: "민영"};
let obj2 = obj1;
console.log(obj1);
console.log(obj2);

obj2.name = "정민영";
console.log(obj1);
console.log(obj2); // 바뀌어 버림.
//  객체의 참조값을 그대로 복사하는것임.. => 얕은 복사. 원복객체 수정 위험존재

let obj3 = {...obj1}; // 새로운 객체를 생성하며 변수만 새로 만드는걸 깊은 복사 라고함
console.log(obj3);
obj3.name = "정민영22";
console.log(obj3);
console.log(obj1); //변하지 않음 3만 변함

console.log("============ 1 끝 ==============");

// 객체 주의사항 2. 객체간 비교는 기본적으로 참조값을 기준으로 이뤄짐
// obj1 = 원본, obj2 = 얕은 복사로 obj1의 참조값을 복사, obj3 = 깊은복사로 새로운 객체

console.log(obj1 === obj2); // 단순 참조값 비교를 함으로 true
console.log(obj1 === obj3); // 참조값이 다르기에 false
console.log("======");
// JSON.stringify(o1) 를 통해 객체를 문자열화해서 비교함. = 자바의 equals 용도라고 보면되려나?
console.log(
    JSON.stringify(obj1) === JSON.stringify(obj2)
);
console.log(
    JSON.stringify(obj1) === JSON.stringify(obj3) // 위에 name 변경한것 떄문에 false. 해당 부분 주석처리하면 true
);

// o1===o2 로 객체비교는 얕은 비교
// JSON.stringify(o1) === JSON.stringify(o3) 로 객체비교는 깊은 비교


// 객체 주의사항 3. 배열과 함수도 사실 객체이다.
// 가장 추상적인 객체의 프로퍼티와 함수를 배열과 함수도 가지고 있다고함 ㅇㅇ..