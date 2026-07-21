import './App.css'

import { useState,useRef, useReducer, useCallback } from 'react'

import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'

const mockData= [
    {
      id: 0,
      isDone: false,
      content: "React 공부하기",
      date: new Date().getTime(),
    },
    {
      id: 1,
      isDone: false,
      content: "빨래하기",
      date: new Date().getTime(),
    },
    {
      id: 2,
      isDone: false,
      content: "노래 연습하기",
      date: new Date().getTime(),
    },
];

function reducer(state, action) {
  switch(action.type) {
    case 'CREATE' : return [action.data, ...state];
    case 'UPDATE' : return state.map((todo) => 
      todo.id === action.targetId ? 
      {...todo, 
        isDone: !todo.isDone
      } // 객체로 변환하는데 기존객체(...todo)에 isDone만 반전시킴.
      : todo
    );

    case 'DELETE' : return state.filter((todo) => todo.id !== action.targetId);

    default: return state;
  }
}

function App() {
  // const [todos, setTodos] = useState(mockData);
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime()    
      }
    });
  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId
    });
  }, [])

  // const onDelete = (targetId) => {
  //   dispatch({
  //     type: "DELETE",
  //     targetId: targetId
  //   });
  // }

  // 첫 인자는 불필요한 재생성 방지 할 함수
  // 두번쨰 인자는 뎁스
  // 그래서 두번째 인자를 빈배열로 설정하면 첫 마운트될때 를 제외하곤 해당 함수가 리렌더링 되지 않는다.
  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId
    });
  }, []);
  

  return (
  <div className = "App">
    <Header />

    <Editor onCreate={onCreate}/>

    <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>

  </div>
  );
}

export default App


// 1. 