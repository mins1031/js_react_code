import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import Even from './components/Even';

import { useState, useEffect, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState();

  const isMount = useRef(false);
  
  // console.log("rerandering");

  //1. 마운트 : 탄생 -> 마운트를 useEffect로 제어하는 방법
  useEffect(() => {
    console.log("mount");
  }, []);
  // 마운트는 탄생이기에 useEffect의 함수는 처음 컴포넌트가 만들어질때만 실행되고 그 이후는 실행 x

  //2. 업데이트 : 변경, 리렌더링
  useEffect(() => {
    if(!isMount.current) {
      // 처음 마운트 될때 실행되게 처리. 즉 해당 조건문 없는 경우처럼 마운트시 같이 업데이트 출력 x
      isMount.current = true;
      return
    }

    console.log("update");
  });
  // 업데이트 사이클에서 활용시 useEffect 선언에 두번째 인자인 배열을 빼고 선언하면 된다.
  // 아마 따로 변경감지 대상없이 컴포넌트의 리렌더링 감지로 실행하라는 의미로 받아들이면 될듯
  // 마운트 실행과 함깨 업데이트도 하나 출력되고 그 이후 리렌더링시 update 지속 출력.

  //3. 언마운트 : 죽음
  

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
      {count % 2 == 0 ? <Even /> : null}
    </section>
    <section>
      <Controller onClickButton={onClickUpdate}/>
    </section>

    </div>
  )
}

export default App
