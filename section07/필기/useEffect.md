# UseEffect

- 리액트 컴포넌트의 사이드 이펙트를 제어하는 새로운 리엑트 훅.
- 강의에서 말하는 사이드 이펙트는 특정 동작/행위의 결과에 해당하는 동작 자체를 이야기하는듯?
- 이 사이드 이펙트를 useEffect로 제어할수 있다고함.
  - 특정동작때 특정 코드를 실행시키는 형태라고함.
  - 뭐 미리 만들어진것도 있을거고 내가 직접 커스텀하는것도 있을것 같넹

## useEffect 사용 실습

- useEffect를 사용하려면 useState 처럼 import로 참조할 훅으로 선언해줘야 한다

```
import { useState, useEffect } from "react";
```

- useEffect의 기본인자 정보는 아래와 같음 (함수, 배열)

```
useEffect(() => {}, []);
```

- useEffect는 두번째 인자인 배열의 값이 변경되면 첫번째 인자인 콜백함수가 실행되는 매커니즘이다.
  - 그래서 뭐.. 음.. 해당 컴포넌트에서 선언한 플래그 값, 서버에서 받아온 데이터값 등등을 감시 대상에 놓고 변경되면 특정 동작을 진행할듯.
  - 음.. 약간 라이프사이클 별로 구분해서 useEffect들을 모아서 사용하는 방식도 있을듯?

- 아래 useEffect를 보면 콜백함수는 두번째 배열의 값에 의존적이다.
  - 그래서 이 배열을 "의존성 배열", "dependency array = 줄여서 deps"

```
useEffect(() => {
    console.log(`count : ${count}`);
  }, [count]);
  //


- 개선버전
useEffect(() => {
    console.log(`count : ${count} / input : ${input}`);

  }, [count, input]);
```

- 근데 그럼 useEffect 대신 이벤트헨들러 쓰면 되는거아님?
- 그럼 리랜더링될때도 이헨트헨들러를 사용할 수 있나?
- 일단 예시에선 setState 에 해당하는 함수 즉 리액트 state의 함수는 비동기로 동작함. 고로 이벤트핸들러는 해당 함수를 호출만 했지 함수의 결과는 바로 받아볼수 없음.
- 그렇지만 useEffect는 결과의 변경시에 실행하는것이기에 둘의 차이는 명확하게 다름
- 즉 전처리+실행: 이벤트헨들러, 후처리 : useEffect 라고 정의할수 있을듯

- 2강 완성 코드

```
import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller'

import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState();

  // console.log("rerandering");

  useEffect(() => {
    console.log(`count : ${count} / input : ${input}`);

  }, [count, input]);


  const onClickUpdate = (value) => {
    setCount(count + value);
  }

  return (
    <div className="App">
    <h1>Simple Counter</h1>
    <section>
      <input value={input} onChange={(e) => {
        // console.log(e.target.value);
        setInput(e.target.value);
      }} />
    </section>
    <section>
      <Viewer count={count}/>
    </section>
    <section>
      <Controller onClickButton={onClickUpdate}/>
    </section>
    </div>
  )
}

export default App

```

## useEffect로 라이프사이클 제어하기.

- 1. 마운트 : 탄생 -> 마운트를 useEffect로 제어하는 방법

```
  useEffect(() => {
    console.log("mount");
  }, []);
```

- 마운트는 탄생이기에 useEffect의 함수는 처음 컴포넌트가 만들어질때만 실행되고 그 이후는 실행 x
- 실제로 해당 코드를 그대로 콘솔에서 보면 처음 랜더링시에만 mount가 출력되고 그 이후엔 출력x
- 참고로 새로고침이랑 랜더링은 다른거임. ㅇㅇ 새로고침은 아예 마운트부터 다시 시작시키는것.

- 2. 업데이트 : 변경, 리렌더링

```
  useEffect(() => {
    if(!isMount.current) {
      // 처음 마운트 될때 실행되게 처리. 즉 해당 조건문 없는 경우처럼 마운트시 같이 업데이트 출력 x
      isMount.current = true;
      return
    }

    console.log("update");
  });
```

- 업데이트 사이클에서 활용시 useEffect 선언에 두번째 인자인 배열을 빼고 선언하면 된다.
- 아마 따로 변경감지 대상없이 컴포넌트의 리렌더링 감지로 실행하라는 의미로 받아들이면 될듯
- 마운트 실행과 함깨 업데이트도 하나 출력되고 그 이후 리렌더링시 update 지속 출력.

- 3. 언마운트 : 죽음

```
import { useEffect } from "react";


const Even = () => {
    useEffect(()=>{
        // 클린업, 정리함수
        return () => {
            console.log("unmount")
        };
    }, [])
    return <div>짝수입니다.</div>
}

export default Even;
```

- 음.. 이게 좀 애매한데... 일단 첫함수 생김새는 마운트랑 언마운트랑 비슷하다, 다만 차이점은 마운트는 단순 동작이고 언마운트는 함수를 리턴한다는 점이다.
- 클린업, 정리함수라고 한다는데.. 솔직히 설명이 부실한 느낌.
