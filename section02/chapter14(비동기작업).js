// async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환해주는 키워드

// Promise 객체 출력됨.
async function getData() {
    return {
        name: "민",
        id : "dratini"
    }; //Promise 객체에 감싸져서 출력됨.
};

console.log(getData());

async function getData2() {
    // 애초에 Promise를 반환하면 그냥 해당 Promise 리턴하게 둠
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name:"mis",
                id:"dratini"
            });
        }, 1500);
    });
}

console.log(getData2());

// 결론적으로 Promise를 리턴하지 않는 함수에 씌워주는 역할이라고 생각하자.

// await
// async 키워드가 붙은함수 내부에서만 사용 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

// then이 복잡하긴함
function printData(){
    getData2()
        .then((result)=> {
            console.log(result);
        });
}

printData();

// async와 await 사용시 then 사용 안해도됨
async function printData2() {
    const result = await getData2();
    console.log(result);
}
// 살짝 사용에 의문이긴함.