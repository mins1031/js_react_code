// Promise 는 
// 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 js 내장객체
// 해당 강의에선 모든 기능을 설명 x. 아래 3가지만 학습
// 1. 비동기 작업실행
// 2. 비동기 작업상태 관리
// 3. 비동기 작업 결과 저장

// Promise는 3가지 상태가 존재.
// 대기(Pending) : 작업이 완료되지 않은 상태
// 성공(Fullfilled) : 비동기 작업이 성공적으로 마무리된 상태
// 실패(Rejected) : 비동기 작업이 실패한 상태
// 대기 -> 성공 : 해결(resolve)
// 대기 -> 실패 : 거부(reject)
// ex 유튜브 
// 영상 클릭후 버퍼링상태 : 대기
// 영상로딩완료 : 해결(resolve)
// 영상시청 가능상태 : 성공

const promise = new Promise((resolve, reject)=> {
    // 비동기작업을 진행할 콜백함수 = executor
    // executor는 2개의 파라미터를 받음.
    //  executor 성공시 호출할 resolve
    //  executor 실패시 호출할 reject

    // setTimeout(() => {
    //     // console.log("안녕");
    //     // resolve("Hi!!!!");// executor가 성공 상태로 처리하려면 resolve 호출
    //     reject("왜 실패했을까,..?");
    // }, 2000)
});

setTimeout(() => {
    // console.log(promise)
}, 3000);

// console.log(promise);

function add10(num) {
    // Promise 객체 활용
    const promise2 = new Promise((resolve, reject)=> {
        setTimeout(() => {
            if(typeof num === 'number') {
                resolve(num + 10);
            } else {
                reject("num이 숫자가 아닙니다");
            }
        }, 2000)
    });

    return promise2;
}


// const p = add10(0);
// p.then((promiseResult) => {
//     console.log(promiseResult);

//     const newP = add10(promiseResult);
//     // 비동기의 결과를 또다른 비동기의 파라미터로 전달 가능. -> 콜백지옥 유도 가능
//     // newP.then((reuslt) => {
//     //     console.log(result);
//     // })

//     return newP;
// })
// .then((reuslt) => {
//         console.log(result);
// })
// .catch((error)=>{
//     // 예외처리. promise가 reject시 사용가능.
//     console.log(error);
// });

// then 메서드 = 그 후에, promise가 resolve시 실행가능
// 내부에 콜백함수를 받고 executor의 결과값도 매개변수로 받을수 있음
// promise2.then((promiseResult) => {
//     console.log(promiseResult);
// }).catch((error)=>{
//     // 예외처리. promise가 reject시 사용가능.
//     console.log(error);
// })

// 결국 then과 catch 둘다 작성해줘야 하겠네
// 위처럼 둘다 사용해주는걸 promise 체이닝 이라고함


add10(0)
.then((firstResult) => { // 10
    console.log(firstResult);
    return add10(firstResult);
})
.then((secondResult) => { // 20
    console.log(secondResult);
    return add10(undefined);
})
.then((thirdResult) => { // 30
    console.log(thirdResult);
})
.catch((error) => {
    console.log(error);
})


// js 개념에서 여기가 제일어렵네;; 