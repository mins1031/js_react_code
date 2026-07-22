# Context란?

- 컴포넌트간의 데이터를 전달하는 또 다른 방법
- 기존 Props가 가지고 있던 단점을 해결할 수 있음.

## Props의 단점

- Props는 부모 -> 자식 관계간에만 데이터를 전달 할 수 있음
  - Parent -> ChildA -> ChildB
  - isDone 체크박스 클릭 이벤트 : App -> List -> TodoItem
- Props를 이용하게 되면 어쩔수 없이 중간 다리 역할의 컴포넌트들이 있어야 데이터 전달이 가능(Ex.List)
- 만약 컴포넌트 구조가 엄청 많아지게 된다면..? A -> B -> C -> ... Z 이게 Props Drilling 이라고함

- 그리고 현재의 예제에선 App -> List -> Todoitem 으로의 Props drilling 이 발생하고 있음.

## Context 사용하기

### Context 선언

```
import {
  useState,
  ...
  createContext // 추가
} from 'react'

...

const TodoContext = createContext();
console.log(TodoContext);

function App() {...}
```

- 보통은 컴포넌트 외부에 선언
  - 리렌더링 마다 다시 생성될 필요x. Context는 특별한 경우 아니면 컴포넌트 외부에 선언한다
- 콘솔찍어서 보이는 Props 중 Provider 만 잘 알면됨
- 컨텍스트가 공급할 데이터 설정, 혹은 공급받을 컴포넌트 설정하기 위해 사용하는 프로퍼티.

### Context 사용

```
 return (
  <div className = "App">
    <Header />

    <TodoContext.Provider value={
      {todos, onCreate, onUpdate, onDelete}
    }>
      <Editor onCreate={onCreate}/>
      <List
        todos={todos}
        onUpdate={onUpdate}
        onDelete={onDelete}
      />
    </TodoContext.Provider>
  </div>
  );
}
```

- <TodoContext.Provider> 태그 내의 컴포넌트들은 Context의 데이터를 공급받을수 있는 상태가 됨.
  - 하위에 value={} 를 통해 해당 Context에서 공유할 데이터를 설정할수 있고 하위의 컴포넌트들은 해당 데이터를 바로, 직접사용할 수 있음.
- 기존 App -> List -> Todoitem 에서 App -> TodoContext.Provider -> {List , Todoitem , Editor} 의 구도로 생각하면 조금더 이해가 편하다(강의에서 구조도로 보는게 더 눈에 확들어오는데..)
- 고로 이제 Editor에선 onCreate를, List에선 todos를, Todoitem 에선 onUpdate, onDelete를 바로 사용할 수 있다고함.

```
import { useState, useRef, useContext } from "react"
import { TodoContext } from "../App";

const Editor = () => {
    // 일단 에디터 컴포에서 필요한건 app 컴포에 선언된 TodoContext임.
    // 해서 app 컴포에 선언된 TodoContext에 export 선언을 함께 해주면 하위에서 import 할 수 있게됨
        // -> 그럼 굳이 컴포넌트 감싸줄 필요 있음? 감싼 컨텍스트인지 판별을.. Provider에서 하나?
    // export된 타겟 컨텍스트를 import후 useContext(import Context)로 선언.
    const {onCreate} = useContext(TodoContext);
    // 내부에 onCreate 있으니 그냥 구조분해할당으로 바로 받아서 사용하면됨 ㄷㄷ..
    ...
}
```

- 일단 에디터 컴포에서 필요한건 app 컴포에 선언된 TodoContext임.
- app 컴포에 선언된 TodoContext에 export 선언을 함께 해주면 하위에서 import 할 수 있게됨
  - -> 그럼 굳이 컴포넌트 감싸줄 필요 있음? 감싼 컨텍스트인지 판별을.. Provider에서 하나?
- export된 타겟 컨텍스트를 import후 useContext(import Context)로 선언.
- 내부에 onCreate 있으니 그냥 구조분해할당으로 바로 받아서 사용하면됨 ㄷㄷ..

```
// List 컴포넌트

const {todos} = useContext(TodoContext);

...

return
<TodoItem
  key={todo.id}
  {...todo}
/>;
```

- List 컴포도 마찬가지로 inport후 내부에서 필요한건 todos 밖에 없음으로 위 처럼 선언
- 그리고 onUpdate, onDelete는 TodoItem 컴포에서 직접 사용하고 List는 전달만 했음으로 이젠 Props에서 제거
- 이때 todo Props도 같이 지워야 하나.. 하긴했음. 크게 상관 없는듯?

- TodoItem은 선언후 구조분해할당으로 변수명 알맞게 적용하면 끝임

- 근데 이후 웹 화면을 보면 기존에 최적화 해놨던 부분이 모두 풀려서 리렌더링되는 이슈가 발생함.
