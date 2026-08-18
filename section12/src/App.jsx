import './App.css'
import { Routes, Route } from 'react-router-dom' 
import { useReducer, useRef, createContext } from 'react' // 일기 관리를 위한 state생성을 위한 reducer.

import Home from './pages/Home'
import Diary from './pages/Diary'
import New from './pages/New'
import Edit from './pages/Edit'
import NotFound from './pages/NotFound'


// 일기 초기 데이터고 여러개가 필요해 배열로, 일기는 객체 형태로 구성.
const mockData = [
  {
    id : 1,
    createdDate : new Date("2026-08-14").getTime(),
    emotionId : 1,
    content : "1번 일기 내용"
  },
  {
    id : 2,
    createdDate : new Date("2026-08-10").getTime(),
    emotionId : 2,
    content : "2번 일기 내용"
  },
  {
    id : 3,
    createdDate : new Date("2026-07-10").getTime(),
    emotionId : 3,
    content : "3번 일기 내용"
  },
  {
    id : 4,
    createdDate : new Date("2025-12-10").getTime(),
    emotionId : 4,
    content : "4번 일기 내용"
  },
  
];


function reducer(state, action) {
  switch(action.type) {
    case "CREATE": 
      return [action.data, ...state];
    
    case "UPDATE": 
      return state.map((item) => 
        String(item.id) === String(action.data.id) 
          ? action.data 
          : item
      );

    case "DELETE": 
      return state.filter((item) => 
          String(item.id) !== String(action.id)
      );
    default : 
      return state;
  }
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, mockData); // 일기 데이터. static 한 성격의 데이터기에 useReducer로 state 생성
  const idRef = useRef(3);

  // 새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type:"CREATE",
      data : {
        id : idRef.current++, // useRef는 내부 current 변수로 사용해야하고 이걸 늘려줘야 id로 사용가능 -> js는 이렇게 증감연산의 결과를 사용할수 있나보네?
        createdDate,
        emotionId,
        content
      }
    });
  };
  
  
  // 기존 일기 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type : "UPDATE",
      data : {
        id,
        createdDate,
        emotionId,
        content
      }
    });
  };

  // 기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type : "DELETE",
      id
    });
  };

  return (
    <>
      {/* <button onClick={()=>{
        onCreate(new Date().getTime(), 1, "hello");
      }}
      >일기추가 테스트</button>

      
      <button onClick={()=>{
        onUpdate(1, new Date().getTime(), 3, "수정된 일기 입니다.");
      }}
      >일기변경 테스트</button>

      <button onClick={()=>{
        onDelete(3);
      }}
      >일기삭제 테스트</button> */}
      
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={
          {onCreate, onUpdate, onDelete}
        }>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/new" element={<New />}/>
            <Route path="/diary/:id" element={<Diary />}/>
            <Route path="/edit/:id" element={<Edit />}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  )
}

export default App

// 최종 프로젝트의 화면구조
// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 new 페이지
// 3. "/diary" : 일기를 상세히 조회하는 diary 페이지
// 그리고 리액트에선 모든 요소가 컴포넌트로 이루어진다고 했기에 
// 페이지도 컴포넌트로 만들어줌.
// 페이지용 디렉토리를 src-pages로 생성

// 라우팅 동작원리는 <Routes> 내의 <Route> 항목중 현재 브라우저와 동일한 path를 가진 <Route> 의 컴포넌트를 렌더링 대상으로 선택하는듯?
// 만약 존재하지 않는 path로 사용자가 요청한다면 따로 설정하지 않으면 빈 index.html이 응답되므로 따로 notfound 페이지 생성 및 path엔 와일드카드로 처리 해주면 처리가능.


// 주의사항
// 1. <Routes> 내에는 <Route> 컴포넌트만 사용 가능하다.
// 2. <Routes> 바깥의 요소는 모든 페이지에 동일하게 적용됨


// Link 적용
// 이때 알수 있는것이 각 버튼을 누르면 새로운 페이지로 이동(=html교체)하는게 아닌 index.html내에서 필요한 컴포넌트를 교체하는 CSR 방식으로 동작
//  새로고침 x, 화면전환 쾌적하게 진행.
//  다만 a 태그를 이용하게 되면 CSR로 동작하진 않음
//  결론적으로 a 태그 대신 Link 컴포넌트를 이용하는것이 좋다.

// 특정 이벤트 발생시 페이지 이동방법
// useNavigate 임포트 및 변수선언. -> 특정 이벤트헨들러 함수 작성 및 특정 조건 부합한다면 nav("/new")함수 실행.


// 동적경로 설정
// 동적경로 설정하려면 해당 페이지의 <Route>에 동적경로 페이지라고 명시해야함
 // <Route path="/diary/:id" element={<Diary />}/>
 // 브라우저의 경로가 /diary고 뒤에 오는 값 /:id은 무조건 동적경로인 url param 을 의미함 
 // 이렇게 설정후 url parma 설정안하고 그냥 /diary 만 적용하면 Notfound 화면 노출 = 라우팅 불가


 
  // <Header 
  //   title={"Header"}
  //   leftChild={<Button text={"Left"}/>}
  //   rightChild={<Button text={"Right"}/>}
  // />
  // <Button text={"123"} onClick={()=>{console.log("123 버튼 클릭")}}/>