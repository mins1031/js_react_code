import "./TodoItem.css";
import { memo } from "react";


const TodoItem= ({
    id,
    isDone, 
    content, 
    date, 
    onUpdate,
    onDelete
}) => {
    const onChangeCheckBox = () => {
        onUpdate(id);
    }
    
    const onDeleteButton = () => {
        onDelete(id);
    }


    return (
        <div className="TodoItem">
            <input 
                onChange={onChangeCheckBox}
                readOnly 
                checked={isDone}
                type="checkbox" 
                
            />
            <div className="content">{content}</div>
            <div className="date">{new Date(date).toLocaleDateString()}</div>
            <button 
                onClick={onDeleteButton}
            >
                삭제
            </button>
        </div>
    )
}

// 이런걸 보통 고차 컴포넌트(HOC) 라고함.
export default memo(TodoItem);
// export default memo(TodoItem, (prevProps, nextProps) => {
//     // 반환값에 따라, Props가 바뀌었는지 안바뀌었는지 판단
//     // true -> Props 바뀌지 않음 => 리렌더링 x
//     // false -> Props 가 바뀜 => 리렌더링 o

//     if(prevProps.id !== nextProps.id) return false;
//     if(prevProps.isDone !== nextProps.isDone) return false;
//     if(prevProps.content !== nextProps.content) return false;
//     if(prevProps.date !== nextProps.date) return false;

//     return true;
// });