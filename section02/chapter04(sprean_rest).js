// 1. Spread 연산자
// -> Spread : 흩뿌리다, 펼치다 라는 의미
// -> 객체나 배열에 저장된 여러 값을 개별로 흩뿌려주는 연할

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
console.log(arr2);
// arr1의 값들을 arr2 4와 5사이에 뿌리고 싶다면? => [4,1,2,3,5,6] 
// 이때 spread 연산자를 사용하면된다
let temp_arr2 = [4, ...arr1, 5, 6];
console.log(temp_arr2); // spread 잘 동작하는것 확인.

let obj1 = {
    a: 1,
    b: 2
}
let obj2 = {
    c: 3,
    d: 4
}
console.log(obj2);
// obj1의 프로퍼티들을 obj2에 뿌리고싶다 (=객체필드를 합성하고 싶다)
let obj3 = {
    ...obj1,
    ...obj2,
    e: 5
}
console.log(obj3);

// 함수의 파라미터를 spread로 줄수도 있음. 근데 이건.. 길이가 3개인 것만 받을수 있을텐딩 뭔가 spread의 컨셉이랑 그닥 어울리진 않음
function funcA(p1,p2,p3) {
    console.log(p1,p2,p3);
}
funcA(...arr1);

//2. Rest 매개변수
// -> Rest는 나머지, 나머지 매개변수. 위의 spread를 함수 파라미터로 활용하는 예시에서 확장된 내용
let restArr = [10,11,12];
function funcB(one, two, ...rest) { 
    // one, two 는 rest의 첫번째 두번쨰 값을 이야기함. 다만 rest 매개변수를 마지막에 선언해야함.
    console.log(one);
    console.log(two);
    console.log(rest);
}
funcB(...restArr);


