# 기능목록

## 새로운 Todo 추가

Editor 컴포넌트에서 추가한 내용이 List 컴포넌트에 추가돼야 한다

- Editor에서 Todo 추가하기

1. Editor 컴포넌트의 추가 버튼을 클릭
2. onSubmit 이벤트 핸들러 동작하고
3. 이 함수는 props로 받은 onCreate를 호출하며 인수로는 Editor 의 state인 content를 전달(List로 전달해야 하는데 자식간엔 상호작용 불가)
4. App 컴포넌트의 onCreate함수가 동작하며 content값으로 newTodo 를 만들어 주고 setTodos에 새로운 todo로 추가.

```
const Editor = ({onCreate}) => {
    const [content, setContent] = useState("");

    const onChangeContent = (e)=>{
        setContent(e.target.value);
    }

    const onSubmit = (e)=>{
        onCreate(content)
    }

    return (
    <div className="Editor">
        <input placeholder="새로운 Todo..."/>
        <button onClick={onSubmit}>추가</button>
    </div>
    );
}



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

  const onCreate = (content) => {
    const newTodo = {
      id: 0,
      isDone: false,
      content: content,
      date: new Date().getTime()
    }

    // todos.pust(newTodo); 이렇게 해선 리액트가 변경감지를 못해서 리랜더링이 안됨. 즉, 추가는 눌러서 입력됐지만 화면에 적용은 x

    setTodos([newTodo, ...todos]);
    // 신규 값을 상단에 넣어야 하기에 신규값을 먼저 넣은후 기존 todo 리스트를 넣어 새로운 배열을 생성하고 그걸 state로 재설정.
  }

  return (
  <div className = "App">
    <Header />

    <Editor onCreate={onCreate}/>

    <List />

  </div>
  );
}

export default App
```

## Todo 당 고유 Id 할당

1. 리랜더링이 되지 않으면서 컴포넌트 내에서 여러 리랜더링이 일어나도 특정 값을 가지고 있어야 함으로 useRef를 활용해 id 값을 사용
2. const idRef = useRef(3); 으로 기존 데이터가 3개가 있고 0~2의 id값을 가지고 있음으로 3부터 시작.
3.

```
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

  return (
  <div className = "App">
    <Header />

    <Editor onCreate={onCreate}/>

    <List />

  </div>
  );
}

export default App
```

## 입력폼에 아무 값도 없는 경우 Todo 추가 제한

1. 만약 input의 content가 비어있는 상태로 추가를 누르는 경우 input 태그 포커스.
2. const contentRef = useRef(); 로 DOM 조작을 위한 ref변수 선언
3. <input ref={contentRef} ... > input 태그의 ref함수로 contentRef 설정. 이로인해 contentRef는 해당 input의 DOM 요소 조작 가능
4. onSubmit() 이벤트 핸들러에 content가 없는 경우 포커스 및 todo 추가 블락킹하게 코딩

```
const Editor = ({onCreate}) => {
    const [content, setContent] = useState("");
    const contentRef = useRef(); // 2

    const onChangeContent = (e)=>{
        setContent(e.target.value);
    }

    const onSubmit = ()=>{
        if(content === "") {
            contentRef.current.focus();
            return;
        } // 4

        onCreate(content);
    }

    return (
    <div className="Editor">
        <input
            ref={contentRef} // 3
            value={content}
            onChange={onChangeContent}
            placeholder="새로운 Todo..."
        />
        <button onClick={onSubmit}>추가</button>
    </div>
    );
}

export default Editor;
```

## 새로운 Todo 추가시 인풋폼내용 제거

1. 간단함 onSubmit의 onCreate(content); 수행뒤에 setContent(""); 로 content 를 초기화 해주기만 하면됨.

## 인풋폼에서 엔터키만 눌러도 Todo 추가되게 처리

1. 선행지식으로 onKeydown 이 존재.
 - onKeydown 은 이벤트 헨들링의 종류중 하나이다
 - 사용자가 키보드의 키를 눌렀을때 발생하는 이벤트 핸들링.
 - 어떤 키를 눌렀는지는 onKeydown의 (e), 즉 이벤트 객체의 keyCode 프로퍼티로 확인 가능하다

2. input 태그에 onKeyDown={onKeydown} 해당 설정 추가
3. onKeydown 이벤트 핸들러 생성 및 엔터를 누를시 onSubmit을 수행하게 처리.

~~~
const Editor = ({onCreate}) => {
    const [content, setContent] = useState("");
    const contentRef = useRef();

    const onChangeContent = (e)=>{
        setContent(e.target.value);
    }

    const onSubmit = ()=>{
        if(content === "") {
            contentRef.current.focus();
            return;
        }

        onCreate(content);
        setContent("");
    }

    const onKeydown = (e) => {
        if(e.keyCode === 13) {
            onSubmit()
        }
    }

    return (
    <div className="Editor">
        <input 
            ref={contentRef}
            value={content}
            onKeyDown={onKeydown}
            onChange={onChangeContent}
            placeholder="새로운 Todo..."
        />
        <button onClick={onSubmit}>추가</button>
    </div>
    );
}

export default Editor;
~~~