import "./css/DiaryItem.css"

import { getEmotionImage } from "../util/get-emotion-image.js"
import { useNavigate } from "react-router-dom";

import Button from "./Button";

const DiaryItem = ({id, emotionId, createdDate, content}) => {
    // ``(백틱) 템플릿리터럴을 사용하기 위한 문법
    const nav = useNavigate();
    // useState 사용법과 동일함
    // params는 query param으로 전달받은 값을 사용할 수 있고
    // setParams는 params 를 set 할 수 있음.

    const onCreate = () => {
       // 새로운 일기 추가 기능
        nav("/new");
    }

    return (
        <div className="DiaryItem">
            <div
                onClick={()=>nav(`/diary/${id}`)} 
                className={`img_section img_section_${emotionId}`}
            >
                {/* 위처럼 백틱과 템플릿리터럴을 사용해 css를 동적으로 처리하게 해줄수 있음. */}
                <img src={getEmotionImage(emotionId)}/>
                {/* 위 또한 특정처리를 동적으로 하기 위한 처리인데 이건 내부 함수 or 위처럼 특정 파일을 static 하게 사용가능 */}
            </div>
            <div 
                onClick={()=>nav(`/diary/${id}`)} 
                className="info_section"
            >
                <div className="created_date">
                    {new Date(createdDate).toLocaleDateString()}
                </div>
                <div className="content">
                    {content}
                </div>
            </div>
            <div 
                onClick={()=>nav(`/edit/${id}`)} 
                className="button_section"
            >
                <Button text={"수정하기"}/>
            </div>
        </div>
    );
};

export default DiaryItem;