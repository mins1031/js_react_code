// 1. 배열의 구조 분해 할당
let arr = [1,2,3];

// 아래처럼 배열의 요소를 하나하나 변수로 할당하려면 번거로움
// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

// 아래처럼 하면 자동으로 변수에 할당됨.
let [one, two, three, four = 4] = arr; // 초기화도 가능.
console.log(one, two, three, four);

// 2. 객체의 구조 분해 할당
let person = {
    name : "정민영",
    age : 27,
    hobby : "축구시청",
};

let {
    name : myAge,
    age,
    hobby,
    extra = "hello"
} = person;
// shift + option + 위아래 화살표는 같은 라인 추가
console.log(name, myAge, hobby, extra);


// 3. 객체 구조분해할당을 이용해 함수의 매개변수를 받는방법
const func = ({name, age, hobby, extra = "hello"}) => {
    console.log(name, age, hobby, extra);
}
func(person); // 객체를 넘겼을때 사용가능
func(10); // 객체가 아닌값은 사용불가
