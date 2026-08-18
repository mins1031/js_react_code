import "./css/Editor.css"

import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { DiaryStateContext } from '../App';

import Button from "./Button";
import EmotionItem from "./EmotionItem";


const emotionList = [
    {
        emotionId: 1,
        emotionName: "완전좋음"
    },
    
    {
        emotionId: 2,
        emotionName: "좋음"
    },
    {
        emotionId: 3,
        emotionName: "그럭저럭"
    },
    {
        emotionId: 4,
        emotionName: "나쁨"
    },
    {
        emotionId: 5,
        emotionName: "끔찍함"
    }
];

const Editor = () => {
    const nav = useNavigate();
    const data = useContext(DiaryStateContext);

    const emotionId = 4;


    const onClickCancel = () => {
        nav("/")
    };

    const onClickRegist = (e) => {
        
        nav("/")
    };

    return (<div className="Editor">
        {/* section 태그는 div와 동일한 태그, 보기 쉽게 처리하기 위해 사용 */}
        <section className="date_section">
            <h4>오늘의 날짜</h4>
            <input type="date"></input>
        </section>

        <section className="emotion_section">
            <h4>오늘의 감정</h4>
            <div className="emotion_list_wrapper">
                {/* 5개 쌩으로 코딩하는거 보다 아래처럼 static으로 처리하는게 좋음 ㅇㅇ 알지? */}
                {emotionList.map((item) => 
                    <EmotionItem 
                        key={item.emotionId}
                        {...item} 
                        isSelected={item.emotionId === emotionId}
                    />
                )}
            </div>
        </section>

        <section className="content_section">
            <h4>오늘의 일기</h4>
            <textarea placeholder="오늘은 어땠나요?"/>
        </section>
        
        <section className="button_section">
            <Button text={"취소하기"} onClick={onClickCancel}/>
            <Button text={"작성완료"} type={"POSITIVE"} onClick={onClickRegist}/>
        </section>
    </div>);
};

export default Editor;