// 간단한 계산기능
// math 모듈

export function add(a, b) {
    return a + b;
}

export function sub(a, b) {
    return a - b;
}


// default는 모듈을 대표하는 export 함수를 '하나' 지정하는거임.
// 외부에서 == import multifly(default함수) from "./match.js(모듈경로)" == 이렇게 지정하면 사용가능
// default 함수를 모듈에 2개 지정하면 npm이 run 실패함. (errMsg : Duplicate export of 'default')
export default function multifly(a, b) {
    return a * b;
}



// common.js 모듈을 사용하는 방식 index.js 확인 필요
// module.exports = {
//     add,
//     sub
// };

// ES 모듈 시스템 (=최신, 리엑트에서도 사용중)
// ES 모듈을 쓰려면 package.js 의 type을 'module'로 바꿔야함(기존엔 commonjs)
// export {add, sub};
