// 2. 단락평가
let varA = false;
let varB = true;

// varA가 false니 뒤를 확인 할 필요가 없어 뒤 내용 확인 x
console.log(varA && varB);

// OR도 마찬가지로 varB가 이미 true이고 둘중하나만 true면 만족하는 식이기에 varA는 체크하지 않음.
console.log(varB || varA);

// 위 내용들이 단락평가.

function returnFalse() {
    console.log("False 함수");
    return false;
}

function returnTrue() {
    console.log("True 함수");
    return true;
}


console.log(returnFalse() && returnTrue()); // true 함수라는 문자열은 출력 x
// console.log(returnFalse() && returnTrue());

// 단락평가는 이전 강의의 Truthy Falsy 를 사용해도 똑같이 적용됨.

function printName(person) {
    const name = person && person.name; // 이게;; 자바랑 완전 다른 문법임
    // 자바는 이러면 name의 타입을 boolean으로 해야하지만.. js는 아닌듯. 타입은 거의 없다고 보면될것같다
    // person이 문제면 name에 undefind or null 이 초기화. person.name은 실행도 안됨.

    console.log(name || "person의 값이 없음");
    // name이 undefind or null 이면 || 뒤 내용도 자연스레 실행됨.
    // name이 정상이면 name이 출력되고 || 뒤 내용은 자연스레 실행x.
}

printName();
printName({ name : "정민영"});