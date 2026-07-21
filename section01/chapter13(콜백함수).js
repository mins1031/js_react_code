// 콜백함수
// 자신이 아닌 다른 함수에 인수로서 전달된 함수를 의미

// 이렇게 함수를 전달할수 있고 그걸 콜백함수 라고 하는구나.
// 오 이거 편하네코드 담아서 원하는 시점에 실행시킬수 있겠다.
function main(value) {
    console.log(value); // 이건 함수 형태를 단순 문자열로 치환했다고 생각하는게 편할듯
    value();
}

function sub() {
    console.log("i am sub");
}

main(sub); // 이걸 '콜백함수' 라고함
main(
    function aa() {
        console.log("i am sub");
    }
);
main(() => console.log("i am sub"));

// 2. 콜백함수의 활용
function repeat(count) {
    for (let idx = 1; idx <= count; idx++) {
        console.log(idx);
    }
}
repeat(5);

function repeatDouble(count) {
    for (let idx = 1; idx <= count; idx++) {
        console.log(idx * 2);
    }
}
repeatDouble(5);
// 위 repeat 함수들은 용도가 거의동일. 

// 결국 바뀌는 부분만 콜백함수로 추상화할수 있음
function real_repeat(count, callback) {
    for (let idx = 1; idx <= count; idx++) {
        callback(idx);
    }
}

// 이렇게 콜백함수 사용하면 더블, 트리플 이런 추가 함수가 필요 x
real_repeat(
    5, 
    (input) => console.log(input * 2)
);