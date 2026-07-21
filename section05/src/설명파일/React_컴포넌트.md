## 5-2강. React\_컴포넌트

아래는 App.jsx 의 App 함수다

```
function App() {

  return (
    <>
      <h1>안녕 리액트!</h1>
    </>
  );
}

```

- 이렇듯 React에선 html 태그를 반환하게 할수 있으면 태그를 반환하는 JS 함수를 **"컴포넌트"** 라고 부른다
  - 이런 컴포넌트를 부를땐 함수 이름을 따서 부름으로 위는 App 컴포넌트 라고 할 수 있다.

```
const Header = () => {
  return (
    <header>
      <h1>header</h1>
    </header>
  );
}


// 위 Header와 동일하지만 선언 방식이 다름. 아래는 함수선언 위는 변수에 함수 할당.
function Header() {
  return (
    <header>
      <h1>header</h1>
    </header>
  );
}
```

- 그리고 컴포넌트의 이름은 항상 대문자로 시작해야한다.(클래스처럼) 소문자로 하게 되면 리액트는 이걸 컴포넌트로 인정하지 않는 다고 함.

### 컴포넌트 간의 계층관계와 root 컴포넌트

아래는 개선된 App.jsx

```
const Header = () => {
  return (
    <header>
      <h1>header</h1>
    </header>
  );
}

const Footer = () => {
  return (
    <header>
      <h1>footer</h1>
    </header>
  );
}


const Main = () => {
  return (
    <header>
      <h1>footer</h1>
    </header>
  );
}


function App() {
  return (
    <>
    {/* 헤더 컴포넌트 */}
      <Header />
      <h1>안녕 리액트!</h1>
    </>
  );
}

export default App


=== main.jsx
createRoot(document.getElementById('root')).render( // root 를 볼수 있음.
    <App />
);


```

- 위처럼 특정 컴포넌트를 포함하는 함수를 '부모'라고하고 포함된 함수를 '자식' 컴포넌트라고함.
- 모든 컴포넌트 들을 포함한 즉 모든 컴포넌트의 조상인 컴포넌트를 'Root 컴포넌트'라고 하고 이 'Root 컴포넌트' 는 main.jsx에 포함되어 root 로 랜더링됨.
- 그래서 위 main.jsx의 <App /> 부분은 우리가 커스텀한 새로운 컴포넌트로 root를 설정할 수도 있지만 리액트 관례상 APP 이라고 명명하는게 관례라 APP으로 사용하는게 좋다고함.

## 모듈화

보통 컴포넌트는 모듈화를 위해 하나의 jsx 파일로 나눠서 관리한다고함 = 객체나 다름없는듯?
