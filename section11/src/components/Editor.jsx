import "./Editor.css"
import { useState, useRef, useContext } from "react"
import { TodoContext } from "../App";

const Editor = () => {
    // 일단 에디터 컴포에서 필요한건 app 컴포에 선언된 TodoContext임. 
    // 해서 app 컴포에 선언된 TodoContext에 export 선언을 함께 해주면 하위에서 import 할 수 있게됨
        // -> 그럼 굳이 컴포넌트 감싸줄 필요 있음? 감싼 컨텍스트인지 판별을.. Provider에서 하나?
    // export된 타겟 컨텍스트를 import후 useContext(import Context)로 선언.
    const {onCreate} = useContext(TodoContext);
    // 내부에 onCreate 있으니 그냥 구조분해할당으로 바로 받아서 사용하면됨 ㄷㄷ..
    
    const [content, setContent] = useState("");
    const contentRef = useRef();

    const onChangeContent = (e)=>{
        setContent(e.target.value);
    }

    const onSubmit = ()=>{
        if(content === "") {
            contentRef.current.focus();
            return;
        }

        onCreate(content);
        setContent("");
    }

    const onKeydown = (e) => {
        if(e.keyCode === 13) {
            onSubmit()
        }
    }

    return (
    <div className="Editor">
        <input 
            ref={contentRef}
            value={content}
            onKeyDown={onKeydown}
            onChange={onChangeContent}
            placeholder="새로운 Todo..."
        />
        <button onClick={onSubmit}>추가</button>
    </div>
    );
}

export default Editor;