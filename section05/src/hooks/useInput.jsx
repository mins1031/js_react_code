import { useState } from "react";

function useInput() {
    
    const [input, setInput] = useState();

    const onChange = (e) => {
        setInput(e.target.value);
    }

    return [input, onChange];
}

export default useInput;

// 커스텀 훅 들은 컴포넌트와 따로 디렉토링해서 관리하는게 관례임.