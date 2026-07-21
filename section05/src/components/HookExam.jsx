import { useState } from "react";

import useInput from "../hooks/useInput";

// 3가지 Hook 관련 tips
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능

// const state = useState(); // -> 에러 발생

// 2. 리액트 훅은 조건부로 호출될순 없다 = if,for 내에서 호출 x
// if(true) {
//     const state = useState();
// } --> 사용 불가.

// 3. 나만의 훅, 커스텀 훅 직접 만들수 있음

// function useInput() {
//     // const [input, setInput] = useState();
//     // 1번내용과 같이 getInput내에선 사용 불가, 컴포넌트 내부에서만 사용가능..
//     // 그래서 이 함수를 커스텀 훅으로 변경.
//     // 변경은 함수명앞에 use만 붙혀주면 끝임.
//     const [input, setInput] = useState();

//     const onChange = (e) => {
//         setInput(e.target.value);
//     }

//     return [input, onChange];
// }

const HookExam = () => {
    const [input, onChange] = useInput();
    
    return (
        <div>
            <input value={input} onChange={onChange}>
            </input>
        </div>
    );
};

export default HookExam;