import { useSearchParams, useNavigate } from "react-router-dom";
import { useState, useContext } from 'react';
import { DiaryStateContext } from "../App";
// query param을 처리할 수 있는 리액트 훅

import HeaderBar from '../components/HeaderBar'
import Button from '../components/Button'
import Header from '../components/Header'
import DiaryList from "../components/DiaryList";

const getMonthlyData = (pivotDate, data) => {
    const beginTime = new Date(
        pivotDate.getFullYear(), 
        pivotDate.getMonth(), 
        1, 0, 0, 0
    ).getTime();
    
    const endTime = new Date(
        pivotDate.getFullYear(),
        pivotDate.getMonth() + 1, 
        0, // 일 정보를 0으로 주게되면 전달의 마지막 날짜로 처리됨.
        23,59,59
    ).getTime();

    return data.filter((item) => 
        beginTime <= item.createdDate && item.createdDate <= endTime
    );
}


const Home = () => {
    const data = useContext(DiaryStateContext);
    const [pivotDate, setPivotDate] = useState(new Date());

    const monthlyData = getMonthlyData(pivotDate, data);
    
    const [params, setParams] = useSearchParams();


    const onIncreaseMonth = () => {
        setPivotDate(
            new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1)
        );
    }

    const onDecreaseMonth = () => {
        setPivotDate(
            new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1)
        );
        // 연도도 잘 바뀌어서 적용됨.
    }


    return (<>
        <Header 
            title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth()+1}월`} 
            leftChild={<Button text={"<"} onClick={onDecreaseMonth}/>}
            rightChild={<Button text={">"} onClick={onIncreaseMonth}/>}
        />
        

        <DiaryList data={monthlyData}/>
    </>    
    );
}

export default Home;

// 왜 Home 컴포넌트에서 날짜값을 state로 관리하면서 Header에 전달할까?
// - Header를 다양한 용도로 재사용하기 위해 설계 되었기 때문. 다른 UI는 연-월 정보가 아님.
// - 고로 Home 컴포 전용 데이터이고 동적인 데이터기에 state 처리이고 state 처리는 리렌더링해서 UI에 가시해야 하기 때문임.
// - 즉 이벤트가 발생해 UI에 변경사항이 적용되야 하는것들은 state or reducer로 적용 필요
// - 그리고 각 버튼의 이벤트 헨들러도 Home 컴포에 있어야 하는것은 Home 컴포만의 기능을 Header에 적용하는것이기에 그러함.