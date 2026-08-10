import { useSearchParams, useNavigate } from "react-router-dom";
// query param을 처리할 수 있는 리액트 훅

import HeaderBar from './HeaderBar'

import Button from '../components/Button'
import Header from '../components/Header'


const Home = () => {
    const [params, setParams] = useSearchParams();
    const nav = useNavigate();
    // useState 사용법과 동일함
    // params는 query param으로 전달받은 값을 사용할 수 있고
    // setParams는 params 를 set 할 수 있음.

    const onCreate = () => {
       // 새로운 일기 추가 기능
        nav("/new");
    }
    
    console.log(params.get("value"));

    return (<>
        <HeaderBar onCreate={onCreate}/>
        <div>Home</div>
    
    </>    
    );
}

export default Home;