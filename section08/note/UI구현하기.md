# UI 구현하기

해당 강의는 UI 구성에 조금더 집중하는 강의라고함.

## 각 내용

1. 각 컴포넌트의 간격을 설정해야하기 때문에 최상위 태그를 div 로 설정한다고함
   - 왜?, 왜 간격 설정을 위해선 상위 태그가 필요하고 왜 div로 설정하는거지?

```
return (
  <div className = "App">
    <Header />

    <Editor />

    <List />

  </div>
  );
```

2. App.css 설정

- 아래 설정은 App이라는 className을 갖는 요소의 자식요소들의 배치를 좀더 유연하게 할 수 있도록 도와주는 설정이라고함.

```
.App{
    width: 500px;
    margin: 0 auto; /* 위 width와 margin 설정으로 요소들을 화면변환이 일어나도 가운데로 정렬할 수 있음. */

    display: flex; /* 요소간 간격을 좀더 유연하게 하는 설정 */
    flex-direction: column; /* flex의 정렬 방향 설정. column으로 하면 세로배치 */
    gap: 10px; /* 요소간의 간격 설정. gap 속성은 display가 flex인 요소만 적용 가능 */
}
```
