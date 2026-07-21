console.log("안녕 node.js");


// 터미널에 node 설치.
// 그럼 패키지에 package.json이라는 설정파일 생성됨
// 이후 js 파일 만들고 터미널에 node index.js 실행하면 잘실행되는것 볼수 있음
// 웹 브라우저 말고도 js를 실행할 수 있는 환경구성이 node.js 라는걸 확인.

// 이제 스프링 처럼 이걸 한번에 실행해주는 어떤 프레임워크들이 있을듯.
// => 패키지 스크림트라는게 있다고함.
// package.json 에 script에 작성. 
// package.json 파일내 script의 test 제외 모두 추가한 항목임


// commonjs 모듈 방식 require 로 사용가능
// const moduleData = require("./math");
// console.log(moduleData.add(1,2));
// console.log(moduleData.sub(1,2));


// // 아래처럼 객체의 '구조분해할당'을 통해서도 받을수 있음
// // js에선 모듈을 일종의 객체로 인식하는듯. (아니면 객체 기반일듯?)
// const {add, sub} = require("./math");
// console.log(add(1,2));
// console.log(sub(1,2));

// import multifly from "./match.js"
// import {add, sub} from "./math.js";
import mul, {add, sub} from "./math.js"; // 이렇게 한번에 사용도 가능.

console.log(add(1,2));
console.log(sub(1,2));
console.log(mul(1,2));
console.log("===============");

// 라이브러리를 임포트할땐 from에서 경로설정 따로 필요 x
import randomColor from "randomcolor";

const color = randomColor();
console.log(color);





