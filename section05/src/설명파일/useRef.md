## useRef

새로운 Reference 객체를 생성하는 기능

```
const refObj = useRef();
```

- 컴포넌트 내부에서 사용가능
- !! 다만 어떤 경우에도 리랜더링을 유발하지 않음

- 1차 app.jsx (사용자 입력 코드의 연장선)

```
import { useState, useRef } from "react";

const Register = ()=>{
    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: ""
    });

    const refObj = useRef(0);
    console.log(refObj);

    // console.log(input);

    // Event Handler
    const onChange = (e)=> {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    }

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

        </div>
    );
};

export default Register;
```

- refObj 생성은 코드보면 이해됨
- 콘솔에 찍어보면 {currnet: undifined} 가 출력되는걸 볼수 있고 이를 토대로 ref객체는 current 라는 변수하나를 저장하는 객체라는 걸 알수 있다
  - 그래서 useRef(초기값)을 설정하면 초기값이 current 변수에 할당된다.
- return 문에 추가된 button을 보면 버튼 클릭시 onClick 의 동작으로 current +1 하는걸 볼수 있음.
  - 그런데 리랜더링은 되지 않는것 또한 확인 가능

## 즉 리랜더링이 필요하지 않은 값을 처리할때 사용할수 있음.

- 2차 app.jsx

```
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
            console.log(inputRef.current);
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
```

- 리턴 최하단 '제출' 버튼을 하나 생성후 해당 내용을 백엔드로 요청하는 로직을 만드려고함.
- 그전에 1차적인 유효성 검사가 필요하고 이것을 구현하는 예시임.
  - 제출의 이벤트핸들러로 onSubmit()이라는 핸들러 구현.
  - 만약 name값이 ""이면 해당 input 태그 DOM요소를 포커스 처리해주며 메세지출력? 도 해야함.
    - 이 name값이 미입력시 "" 인걸 보장하려면 결국 useState 초기값도 중요할듯 하다.
  - 이때 DOM 요소에 접근하려면 Ref 객체를 활용해줘야함.
  - 일단 접근하려는 DOM 태그 요소에 ref={ref객체} 매핑 필수
  - 이상태에서 제출 눌러보면 해당 태그정보 확인가능.
