import './App.css'

import { useState,useRef } from 'react'

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

function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime()
    }

    // todos.pust(newTodo); 이렇게 해선 리액트가 변경감지를 못해서 리랜더링이 안됨. 즉, 추가는 눌러서 입력됐지만 화면에 적용은 x
    setTodos([newTodo, ...todos]); // 신규 값을 상단에 넣어야 하기에 신규값을 먼저 넣은후 기존 todo 리스트를 넣어 새로운 배열을 생성하고 그걸 state로 재설정.
  }

  const onUpdate = (targetId) => {
    // 인슈 : todos 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 딱 바꾼 배열을 넘겨줘야함
    setTodos(todos.map((todo)=> {
      if(todo.id === targetId) {
        return {
          ...todo,
          isDone: !todo.isDone
        }
      }

      return todo;
    }))

    // setTodos(todos.map((todo)=> 
    //   todo.id == targetId ? 
    //   {...todo, isDone: !todo.isDone} : todo
    // ));
  }

  const onDelete = (targetId) => {
    // 인슈 : todos 배열에서 targetId와 일치하는 id를 삭제한 배열을 넘겨줘야함
    setTodos(
      todos.filter((todo)=> {
        return todo.id != targetId;
      }))
  }

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