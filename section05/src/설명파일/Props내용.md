## Props란?

네이버 매인중 검색바 부분을 리액트로 구현해야 한다면?

- 검색바 : searchBar 컴포넌트
- 버튼 : Button 컴포넌트로 설정하고 메일, 카페, 스포츠 등등을 구성

<!-- function App() {
    return (
        <>
            <Button text={"메일"}> // 컴포넌트
            <Button text={"카페"}>
            <Button text={"메일"}>
        </>
    )
} -->

위 그럼 버튼 컴포넌트엔 함수처럼 파라미터 같은 값들이 전달되야한다
즉 그냥 컴포넌트를 동적으로 사용해야하기에 Props가 필요하다
Props = params?

- Props는 리액트의 핵심 기능중 하나.

- Props 강의 내용의 App.jsx

```
const buttonProps = {
    text : "매일",
    color : "red",
    a:1,
    b:2,
    c:3,
  }
<>
      {/* <Button text={"매일"} color={"red"} a={1}, b={2}, c={3}/>  */}
      <Button {...buttonProps}/>
      {/* 위처럼 객체로 만들어 한방에 넘길수도 있음.(이게 편할듯?) */}
      <Button text={"카페"}/>
      <Button text={"블로그"}>
         <div style={{color : "green"}}>자식요소</div>
         {/* 위처럼컴포넌트 태그 열고 닫으며 props로 html 태그도 전달 가능하다 */}
        </Button>

      <a href="https://www.naver.com" target="_blank">네이버로 이동</a>
    </>
```
