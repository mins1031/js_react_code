import { useState, useRef } from "react";

const Register = ()=>{
    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: ""
    });

    const refObj = useRef();
    const inputRef = useRef(); // ref={inputRef}한 태그의 DOM 요소가 저장됨.

    // console.log(input);

    // Event Handler
    const onChange = (e)=> {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    }

    const onSubmit = () => {
        if(input.name === "") {
            // 이름을 입력하는 DOM 요소 포커스하게 처리
            // console.log(inputRef.current);
            inputRef.current.focus();
        }
    };

    return(
        <div>
            <button
                onClick={() => {
                    refObj.current++;
                    console.log(refObj.current);
                }}
            >
                ref + 1 버튼
            </button>
            <div>
                <input 
                    ref={inputRef}
                    name="name"
                    value={input.name}
                    onChange= {onChange} 
                    placeholder={"이름"} 
                />
            </div>
            <div>
                <input 
                    name="birth"
                    type="date"
                    onChange={onChange}
                />
            </div>

            <div>
                <select name="country" value={input.country} onChange={onChange}>
                    <option></option>
                    <option value="kr">한국</option>
                    <option value="us">미국</option>
                    <option value="uk">영국</option>
                </select>
            </div>

            <div>
                <textarea name="bio" value={input.bio} onChange={onChange}/>
            </div>

        <button onClick={onSubmit}>
            제출
        </button>    
        </div>
    );
};

export default Register;