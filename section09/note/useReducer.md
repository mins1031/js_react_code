# UseReducer

- 컴포넌트 내부에 새로운 state를 생성하는 리액트 훅
- 모든 useState는 useReducer로 대체가능
- 가장 중요한 차이는 useReducer는 상태관리코드를 외부로 분리, 즉 컴포넌트 바깥에서 관리할 수 있다는것(약간 static? 아니면 전역적인 개념? 을 사용해야 할때 사용하는듯?)

- 사용하는 이유
  - 컴포넌트내에 state나 상태관리 관련 코드가 많아지게 되면 가독성이 떨어지고 유지보수가 그만큼 어려워짐 -> 이럴때 컴포넌트 외부에 상태관리 코드를 관리하기 위함.

- 관련코드. 주석보면서 이해하면 쉬움

```
import { useReducer } from "react";

// reducer : 변환기
// -> 상태를 실제로 변화시키는 변환기 역할
// 매개변수 : 1) 현 state 값, 2) 요청의 내용이담긴 엑션객체 전달
function reducer(state, action) {
    console.log(state, action);
    // if(action.type === "INCREASE") {
    //     return state + action.data;
    // }

    // if(action.type === "DECREASE") {
    //     return state - action.data;
    // }

    switch(action.type) {
        case 'INCREASE' : return state + action.data;
        case 'DECREASE' : return state - action.data;

        default: return state;
    }

}
// 그럼 reducer 함수는 상태변화 함수도 없는데 어떻게 state의 상태를 변경? -> 변경된 결과를 리턴해주면됨.

const Exam = () => {
    // dispatch : 발송하다, 급송하다
    // -> 상태 변화가 있어야 한다는 사실을 알리는, 발송하는 함수.
    // 디스패치 함수로 상태변화 알림이 발생하면 이 변화에따른 동작을 하는 함수를 호출해야하는데 그게 useReducer의 첫번째 인자이고 이건 직접 커스텀해야함.
    // 두번째는 state의 초깃값 설정임.
    const [state, dispatch] = useReducer(reducer, 0);

    const onClickPlus = () => {
        // 인슈 : 상태가 어떻게 변화되길 원하는지 전달해줘야함. 정보전달 필요
        // 객체형태로 정보 전달.
        // type : 상태를 어떻게 변화시키고 싶은지를 작성
        // 보통 이 객체를 --> '액션 객체' 라고함.
        // 이 액션 객체로 디스패치가 호출되면 useREducer가 첫 인자인 함수를 호출해줌
        dispatch({
            type: "INCREASE", // state를 1 증가시키고 싶어서 increase
            data : 1 // 1만큼 증가.
        });

        // 즉 useReducer선언과 dispatch 선언 -> dispatch()호출 -> useReducer -> reducer -> reducer 두번쨰 인자로 엑션객체 전달.
    }

    const onClickMinus = () => {
        dispatch({
            type: "DECREASE",
            data : 1
        });
    }

    return (
        <div>
            <h1>{state}</h1>
            <button onClick={onClickPlus}>
                +
            </button>

            <button onClick={onClickMinus}>
                -
            </button>


        </div>
    );
}

export default Exam;
```
