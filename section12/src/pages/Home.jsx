import { useSearchParams, useNavigate } from "react-router-dom";
// query param을 처리할 수 있는 리액트 훅

import HeaderBar from '../components/HeaderBar'

import Button from '../components/Button'
import Header from '../components/Header'

function getYearAndMonthly(operator) {
    const date = new Date();

    if(operator === '+') {
        date.setMonth(date.getMonth() + 1 + 1);

        return date.getFullYear() + "년" + " " + date.getMonth() + "월";
    }
    
    if(operator === '-') {
        date.setMonth(date.getMonth() + 1 - 1);

        return date.getFullYear() + "년" + " " + date.getMonth() + "월";
    }

    return date.getFullYear() + "년" + " " + (date.getMonth() + 1) + "월";
}


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

    const onPlusMonth = () => {
        const date = new Date();
        date.setMonth(date.getMonth() + 2);

        return date.getFullYear() + "년" + " " + date.getMonth() + "월";
    }

    const date = getYearAndMonthly("");
    console.log(date);


    return (<>
        <Header 
            title="" 
            leftChild={<Button text={"<"}/>}
        />
        <HeaderBar onCreate={onCreate}/>

        <button onClick={onCreate}> 새 일기 쓰기 </button>

        <div>Home</div>
    
    </>    
    );
}

export default Home;