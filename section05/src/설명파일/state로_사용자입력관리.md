## 5_8 State로 사용자 입력관리 1

간단한 회원가입 폼 생성.

폼에는 아래와 같은 정보 입력 받을 예정.

1. 사용자이름
2. 생년월일
3. 국적
4. 자기소개

- placeholder란 input이 빈칸일때 회색으로 노출되는 설명값

* 1차 useState 사용 코드

```
import { useState } from "react";

const Register = ()=>{
    const [name, setName] = useState("");


    const onChangeName = (e)=> {
        console.log(e);
       setName(e.target.value);
    }

    return(
        <div>
            <input
 value={name}         onChange= {onChangeName}
                placeholder={"이름"}
            />
        </div>
    );
};

export default Register;
```

- onChangeName 이벤트 핸들러 함수내에 console.log(e)로 이벤트 객체를 출력하면 콘솔에서 target: input 아래에 value:"입력값"이 노출됨.
- 그래서 setName(e.target.value); 해당 코드로 input 태그 입력값에 접근해 state 상태로 적용해줄수 있음
- input 태그의 value={name} 는 초기값임.
  - 보통 state를 이용해 사용자의 입력을 저장,처리할때 초기값을 설정하는 경우도 많기에 value 속성도 함께 적용해주는게 정석에 가까운듯?

- 2차 app.jsx (birth 관련 입력값 추가)

```
import { useState } from "react";

const Register = ()=>{
    const [name, setName] = useState("이름");
    const [birth, setBirth] = useState("");


    // Event Handler
    const onChangeName = (e)=> {
        console.log(e);
        setName(e.target.value);
    }

    const onChangeBirth = (e) => {
        setBirth(e.target.value);
    }


    return(
        <div>
            <div>
                <input
                    value={name}
                    onChange= {onChangeName}
                    placeholder={"이름"}
                />
            </div>
            <div>
                <input
                    type="date"
                    onChange={onChangeBirth}
                />
                {birth}
            </div>
        </div>
    );
};

export default Register;
```

- 5-8 강의 마지막 app.jsx (국적, 자기소개)

```
import { useState } from "react";

const Register = ()=>{
    const [name, setName] = useState("이름");
    const [birth, setBirth] = useState("");
    const [country, setCountry] = useState("");
    const [bio, setBio] = useState("");

    // Event Handler
    const onChangeName = (e)=> {
        console.log(e);
        setName(e.target.value);
    }

    const onChangeBirth = (e) => {
        setBirth(e.target.value);
    }

    const onChangeCountry = (e) => {
        setCountry(e.target.value);
    }

    const onChangeBio = (e) => {
        setBio(e.target.value);
    }




    return(
        <div>
            <div>
                <input
                    value={name}
                    onChange= {onChangeName}
                    placeholder={"이름"}
                />
            </div>
            <div>
                <input
                    type="date"
                    onChange={onChangeBirth}
                />
                {birth}
            </div>

            <div>
                <select value={country} onChange={onChangeCountry}>
                    <option></option>
                    <option value="kr">한국</option>
                    <option value="us">미국</option>
                    <option value="uk">영국</option>
                </select>
                {country}
            </div>

            <div>
                <textarea value={bio} onChange={onChangeBio}/>
                {bio}
            </div>

        </div>
    );
};

export default Register;
```

- 위에서 사용한 리액트내용은 실무에서도 주구장창 쓴다고함.
- select 태그 사용법 유의할것

## 5_9 State로 사용자 입력관리 2

- 마지막 코드는 너무 지저분함. 비슷한일을 하는 비슷한 코드도 많음

- 1차 app.jsx

```
import { useState } from "react";

const Register = ()=>{
    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: ""
    });

    console.log(input);

    // Event Handler
    const onChangeName = (e)=> {
        setInput({
            ...input,
            name: e.target.value,
        });
    }

    const onChangeBirth = (e) => {
        setInput({
            ...input,
            birth: e.target.value,
        });
    }

    const onChangeCountry = (e) => {
        setInput({
            ...input,
            country: e.target.value,
        });
    }

    const onChangeBio = (e) => {
        setInput({
            ...input,
            bio: e.target.value,
        });
    }


    return(
        <div>
            <div>
                <input
                    value={input.name}
                    onChange= {onChangeName}
                    placeholder={"이름"}
                />
            </div>
            <div>
                <input
                    type="date"
                    onChange={onChangeBirth}
                />
            </div>

            <div>
                <select value={input.country} onChange={onChangeCountry}>
                    <option></option>
                    <option value="kr">한국</option>
                    <option value="us">미국</option>
                    <option value="uk">영국</option>
                </select>
            </div>

            <div>
                <textarea value={input.bio} onChange={onChangeBio}/>
            </div>

        </div>
    );
};

export default Register;
```

- 위처럼 useState를 하나의 객체로 관리할수 있는듯
  - 참고로 onChange.. 이벤트핸들러에 setInput의 Props에 객체를 넘김. -> 당연
  - 이때 첫 값으로 ...input 과 해당 핸들러에 맞는 값을 적용하는걸 볼수 있는데 ...input는 설정값을 제외하고 나머지 값은 기존 input의 값을 사용한다는 의미.
- 콘솔에 input값을 출력해 리랜더링이 잘 되는지도 확인해봄

- 2차 app.jsx

```
import { useState } from "react";

const Register = ()=>{
    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: ""
    });

    console.log(input);

    // Event Handler
    const onChange = (e)=> {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    }

    return(
        <div>
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

- 이벤트핸들러 코드도 깔끔해짐
- 별 다른 작업은 없음.
  - e.target.name 과 각 이벤트태그에 name 값을 적절히 매핑해주면 처리 가능.
