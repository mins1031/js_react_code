import './App.css'

import { 
  useState,
  useRef,
  useReducer,
  useCallback,
  createContext,
  useMemo,
  memo
} from 'react'

import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'
import TodoItem from './components/TodoItem'

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

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();


function App() {
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

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId
    });
  }, []);
  
  // 이 객체가 처음 마운트 될떄만 생성, 그 이후론 재생성 안되게 메모처리.
  const memoizedDispatch = useMemo(() => {
    return {onCreate, onUpdate, onDelete};
  }, []);

  return (
  <div className = "App">
    <Header />
    <TodoStateContext.Provider value={todos}>  
      <TodoDispatchContext.Provider value={memoizedDispatch}>
        <Editor/>
        <List />
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  </div>
  );
}

export default App


// 1. 