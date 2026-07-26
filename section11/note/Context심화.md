```
// 1. Context (식별자 토큰) 생성 - 얜 컴포넌트가 아님
const UserContext = createContext();

// 2. 데이터를 선언하고 관리하는 컴포넌트
function App() {
  const [user, setUser] = useState({ name: "김사수" });

  const changeName = () => {
    setUser({ name: "김멘티" }); // ⬅️ 트리거 발동!
  }

  return (
    // 3. Provider 컴포넌트가 데이터를 머금고 하위에 뿌림
    <UserContext.Provider value={user}>
      <Header />    {/* useContext 안 씀 */}
      <Profile />   {/* useContext 씀! */}
    </UserContext.Provider>
  );
}
```

- 실제 위 코드는 결국 changeName() -> setUser() -> UserContext.Provider 리렌더링 및 객체 재 할당 -> 하위 컴포넌트 리렌더링
- 그런데 Header에 React.memo로 만약 최적화가 되어 있다면? -> 리렌더링 x
  - 이건 기대동작 그대로임. 최적화 하면 리렌더링 막는거니.
- 그렇지만 Profile은 React.memo가 되어있든 안되어있든 Context의 Provider가 리렌더링되어서 무조건 리렌더링 되야한다고함
- 근데 생각해보면 맞는게, 리렌더링이 안되주면 (이 context가 메모리에 존재하든 존재하지 않든) 처음 실행됐을때 생성된 context 주소를 가지고 있을거고 그렇게 되면 내부에서 사용하는 context값이 최신화가 안되거나 NPE 같은 에러가 발생하는 것이기에 애초에 기능자체가 문제가 발생하는거라 필연적인듯
