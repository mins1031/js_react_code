import "./css/EmotionItem.css"
import { getEmotionImage } from "../util/get-emotion-image";

const EmotionItem = ({ emotionId, emotionName, isSelected }) => {
    return (
    <div className={
        `EmotionItem ${isSelected ? `EmotionItem_on_${emotionId}` : ""}`
    }>
    {/* 동적인 css 처리를 위해서 이런 리터럴 처리가 자주 사용되는듯 하다 */}
        <img src={getEmotionImage(emotionId)} className="emotion_img"/>
        <div className="emotion_name"> {emotionName} </div>
    </div>
    );
}

export default EmotionItem;