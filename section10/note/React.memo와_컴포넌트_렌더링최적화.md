# React.memo

- 리엑트에서 제공되는 함수로 컴포넌트를 인수로 받아, 최적화된 컴포넌트로 만들어서 반환해주는 함수.

```
const MemoizedCOmponent = memo(Component);
```

- MemoizedCOmponent
  - 반환값임. 최적화된 컴포넌트.
  - Props를 기분으로 메모이제이션됨 = Props가 변경되면 해당 컴포넌트 리렌더링.
- memo(Component)
  - memo는 리엑트 제공 함수
  - 인자인 컴포넌트는 최적화 대상 컴포넌트

## 중요한건 최적화된 컴포넌트느 부모가 리렌더링 되더라도 자신의 Props값의 변화가 있을 시에만 리렌더링되고 나머지 상황에선 리렌더링 되지 않음. = 컴포넌트가 메모이제이션 됨

## isDone 클릭시 리렌더링 최적화

1. isDone 체크박스를 클리하면 APP 의 리렌더링으로 모든 자식 컴포넌트들이 리렌더링됨.
2. 이때 통계값과 클릭한 TodoItem정도만 리렌더링 대상이고 나머지는 굳이 이렌더링 안되도 되기에 다른 TodoItem, Header 컴포넌트를 memo 처리해줄수 있을것 같다.

```
import "./Header.css"
import {memo} from 'react';

const Header = () => {
    console.log("Header");
    return (
    <div className="Header">
        <h3>오늘은 📆</h3>
        <h1>{new Date().toDateString()}</h1>
    </div>
    );
}

const memoizedComponent = memo(Header);

export default memoizedComponent;
// export default memo(Header); 이렇게도 됌.

// 이게 React.memo 사용방식임.
// export로 최적화된 컴포넌트를 설정해주면됨.
```

- 마지막 export가 중요함.
- TodoItem도 똑같이 처리해주면된다. Props가 바뀌지 않는한 리렌더링 되지 않는다고함

3. 다만 해줘도 다른 TodoItem도 모두 리렌더링됌

- Props로 넘어오는 함수는 객체로 적용됨. 고로 함수의 내용이 변하지 않아도 부모의 리렌더링시 재정의 및 전달의 형식이라 Props가 변경됐다고 판단하는거임
- java 처럼 객체비교는 메모리값 비교로 하기에 함수모양이 같아도 얕은비교(===)로는 무조건 변경됐다고 판단됨.
- 고로 Props로 함수를 받는 컴포넌트 같은 경우는 memo(컴포넌트) 만으로는 대응 불가.
- 방법은 두가지가 있음
  1. Props로 넘기는 함수 자체를 메모이제이션해서 보관 및 전달 -> useCallback을 사용해야함
  2. memo함수의 두번째 인자에 콜백함수를 전달해 리렌더링시 Props가 자동으로 과거,현재를 비교하는게 아닌 콜백함수의 내용대로 판단하게됨
