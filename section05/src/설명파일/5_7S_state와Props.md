- 예시 코드

```
import './App.css'
import { useState } from 'react'; // state를 사용하려면 해당 import필요 이게 유즈스테이트구나

const Bulb = ({light}) => {
    console.log(light); ---> 중요~~!!!
  return (
    <div>
    {light === "ON" ? (
      <h1 style={{backgroundColor: "orange" }}>ON</h1>
    ) : (
      <h1 style={{backgroundColor: "gray" }}>OFF</h1>
    )}
    </div>
  );
};

function App() {
  const [count, setCount]= useState(0);
  const [light, setLight]= useState("OFF");

  return (
    <>
    <div>
      <Bulb light={light} ></Bulb> // Bulb 컴포넌트를 통해 light 값에 맞는 h1태크를 반환받고 랜더링.

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

- Bulb에 콘솔로그 찍어보면 OFF -> ON -> OFF 가 찍히며 색이 계속 변하는것을 볼수 있다.
  - 이건 "리액트의 컴포넌트는 state가 바뀌지 않아도 전달받는 Props 의 값이 달라지면 리랜더링된다"는것을 알수 있다.

- 위 코드상태로 + 버튼을 누르게 되면 Bild 컴포넌트가 실행되어 콘솔로그가 찍히는 현상을 확인할 수 있다.
  - !!! 이것은 리액트 컴포넌트가 리랜더링 되는 상황 3가지 염두하면 좋다
    1. 컴포넌트 내부 state가 변경되는경우
    2. 부모로부터 컴포넌트의 Props가 변경되는 경우
    3. 부모 컴포넌트가 리랜더링 되는 경우
  - 위 상황은 + 를 클릭 -> count state의 상태변경으로 App 컴포넌트 리랜더링 -> 부모인 APP 컴포넌트의 리랜더링으로 자식인 Bulb 컴포넌트도 리랜더링 되어서 콘솔로그 출력
  - !!! 그렇지만 이렇게 컴포넌트 기능과 무관하게 리랜더링 되면 성능저하가 발생
    - (독백) 리엑트는 랜더링 관련 성능이슈가 존재하는구나..
    - 그래서 state는 컴포넌트 형태로 분리?

- 개선 코드

```
import './App.css'
import { useState } from 'react'; // state를 사용하려면 해당 import필요 이게 유즈스테이트구나


const Bulb = () => {

  const [light, setLight]= useState("OFF");

  console.log(light);

  return (
    <div>
    {light === "ON" ? (
      <h1 style={{backgroundColor: "orange" }}>ON</h1>
    ) : (
      <h1 style={{backgroundColor: "gray" }}>OFF</h1>
    )}

    <button onClick={()=>{
        setLight(light === "ON" ? "OFF" : "ON");
    }}>
        {light === "ON" ? "끄기" : "켜기"}
    </button>

    </div>
  );
};

const Counter= ()=>{
  const [count, setCount]= useState(0);

  return (
    <div>
     <h1>{count}</h1>
     <button onClick={()=>{
        setCount(count + 1)
     }}>
      +
     </button>
    </div>
  );
}

function App() {

  return (
    <>
      <Bulb />
      <Counter />
    </>
  );
}

export default App;

이후 Bulb, Counter 따로 jsx 파일로 분리.
```

- 최종 app.jsz

```
import './App.css'

import Bulb from './components/Bulb';
import Counter from './components/Counter';

function App() {

  return (
    <>
      <Bulb />
      <Counter />
    </>
  );
}

export default App;
```
