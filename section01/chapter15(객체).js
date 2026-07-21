// 1. 객체 생성

let obj1 = new Object(); // 객체 생성자로 생성하는 방식
let obj2 = {}; // 객체 리터럴 방식 (대부분 이렇게 사용)

// 2. 객체 프로퍼티(=객체 속성)
// 형식은 key : value
// key 는 숫자 or 문자열만
let person = {
    name : "이정환",
    age : 27,
    hobby : "테니스",
    boolParam : true,
    func : () => console.log("이렇게 함수도 가능"),
    obj3 : {},
    10 : 20,
    "띄어쓰기는 따옴표필요" : true,
};

// 3. 객체 프로퍼티 다루는 방법
// 3-1 특정 프로퍼티 접근 (점표기법, 괄호 표기법)
// 점 표기법
let name = person.name;
console.log(name);

let name2 = person.name2;
console.log(name2); // undefind 반환

// 괄호 표기법
let age = person["age"];
 // 주의점은 key를 꼭 쌍따옴표와 함께 사용해야함.
 // 쌍따옴표 없이 사용하면 변수로 인식해서 age 라는 변수가 위에 존재해야 정상동작함.
let age2 = person["age2"]; // undefind 반환

let property = "hobby";
let hobby = person[property];
console.log(hobby);

// 결론적으로 
// 점표기는 단순 접근시
// 괄호 표기는 동적으로 외부에서 뭔가 작업해야 할때 사용하면 편하다

// 3.2 새로운 프로퍼티 추가 방법
// 점 추가
person.job = "be developer";
// 괄호 추가
person["favoritefFood"] = "연어초밥";

console.log(person);


// 3.3 프로퍼티 수정 방법
person.job = "be developer2";
person["favoritefFood"] = "연어초밥2";

console.log(person);

//3.4 프로퍼티 삭제 방법.
delete person.job;
delete person["favoritefFood"];

console.log(person);


// 3.5 프로퍼티 존재유무 확인 방법 (in 연산)
let result1 = "name" in person; // name 프로퍼티가 person에 있는지 확인 bool 타입
let result2 = "cat" in person; // name 프로퍼티가 person에 있는지 확인 bool 타입

console.log(result1); // true
console.log(result2); // false

