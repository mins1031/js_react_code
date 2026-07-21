// 01. Truthy 와 Falsy
// js 내의 모든 값은 Truthy 하거나 Falsy 하다고함. 
//  -> 이를 이용해 조건문 활용을 잘 할수 있기에 중요한 개념

// 1. Falsy 한 값의 종류. 아래 값들은 모두 Falsy하게 처리됨.
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

if(!f1) {
    console.log("falsy");
}


// 2. Trusy 한 값의 종류. 
// -> 위에서 봤던 7가지의 Falsy한 값을 제외한 모든 것들은 Trutsy함.
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};


// 3. 활용 사례
function printName(person) { // 이렇게 함수의 인자로 객체를 전달할수 있는데 형태가 좀 특이하넹
    // if(person === undefined || person === null) // 이렇게 이슈있는 케이스를 모두 체크해야함.
    if(!person) { // 이렇게 falsy 로 체크해주면 간단하게 개선 가능
        console.log("person 없음.");
        return;
    }

    console.log(person.name);
}

let person = { name : "정민영"};
printName(person);