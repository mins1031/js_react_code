## State로 상태 관리하기

State는 현재 가지고 있는 형태, 모양, 상태를 정의하고 변화할수 있는 동적인 값이라고함

리액트의 컴포넌트들은 자신들의 State를 가지고 있음.
즉 State는 컴포넌트의 현재 상태를 가지고 있는 객체?임.

전구를 랜더링하는 컴포넌트가 있다고 한다면
해당 컴포넌트의 state들은

- isLigheOn(state) : 현재 전구의 점등상태
- isBroken(state) : 현재 전구의 고장유무
- isDirty(state) : 현재 전구의 더러움 유무

- APP.jsx useState 예시 코드

```
import './App.css'
import { useState } from 'react'; // state를 사용하려면 해당 import필요.

function App() {
  const state = useState(0);
  console.log(state);

  return <></>;
}

export default App;

// 우선 useState() 내용으로 로깅된 state는 아래와 같음
[undefined, ƒ]
- 0 : undefined
- 1 : ƒ ()
- length : 2

// 그렇다면 useState(0)으로 파라미터가 존재한다면?
[0, ƒ]
- 0 : 0
- 1 : ƒ ()
- length : 2

0 번쨰 값에 0, 즉 파라미터가 인입됨
```

즉 새로운 state 생성하는 useState는 인수로는 state의 초기값을 받아 위 배열처럼 두개의 요소를 담은 배열을 리턴함.
첫 요소는 state의 현재값,
두번째 요소는 state를 변경시키는 상태변화 함수이다. 그냥 자바의 setter 라고 생각하면 될듯?
그래서 보통 useState의 응답은 배열의 구조분해할당 을 활용하는게 일반적이라고함.

- useState 구조분해 할당 예시코드

```
import './App.css'
import { useState } from 'react';

function App() {
  const [state, setState]= useState("안녕");
  console.log(state);

  return (
    <>
     <h1>{state}</h1>
    </>
  );
}

export default App;

```

[state, setState] 에서

- state는 현재 state 값
- setState는 state setter함수이다.

그리고 state가 변경되게 되면 리액트에선 app 컴포넌트의 상태가 변경됨을 감지해 자동으로 '리랜더링' 해준다고함.
근데이거 디비같은 곳에 저장되는게 아니라 새로고침하면 초기값으로 초기화됨.
결국 그냥 특정 컴포넌트(=객체)의 휘발성 전역변수? 같은 느낌으로 이해하고 있어야겠다.

- 새로운 state 추가 예시코드

```
import './App.css'
import { useState } from 'react';

function App() {
  const [count, setCount]= useState(0);
  const [light, setLight]= useState("OFF");

  return (
    <>
    <div>
      <h1>{light}</h1>
      <button onClick={()=>{
        setLight(light === "ON" ? "OFF" : "ON");
      }}>
        {light === "ON" ? "끄기" : "켜기"}
      </button>
    </div>
    <div>
     <h1>{count}</h1>
     <button onClick={()=>{
        setCount(count + 1)
     }}>
      +
     </button>
    </div>
    </>
  );
}

export default App;
```

- 딱히 새로운내용은 x
- 다만 왜 그럼 함수의 변수로 상태를 관리하는게 아니라 state를 사용해야 하는가?
  => 리액트가 리랜더링 해야하기 때문에, 일반 변수면 변경즉시 랜더링도 불가하고 사용자가 새로고침을 해주고, 해당 컴포넌트 밖에 상태를 가지고 있어야하는데 이러면 문제가 많아짐.
  암튼 즉각적인 랜더링을 위함이라고 이해.
