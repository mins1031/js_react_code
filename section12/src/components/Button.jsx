import "./Button.css"
// Button 컴포에서 Button css 파일을 임포트 받음으로서 
// Button.css내의 .Button{}은 아래 return의 button태그에 적용됨
// className = Button 으로 섧정했기에.

// 완성본을 보게되면 우선 공통으로 사용할만한 
// 컴포넌트는 Button, Header정도라 공통으로 만들고 Props에 따라 원하는 css 설정으로 가시되도록 설정

const Button = ({ text, type, onClick }) => {
    return (
    <>
        <button 
            onClick={onClick} 
            className={`Button Button_${type}`}
            // 위 className처럼 `` 및 위 같은 처리를 하게 되면 className이 type따라 달라지게 동적으로 처리할 수 있다.
        >
            {text}
        </button>
    </>
    );
}

export default Button;