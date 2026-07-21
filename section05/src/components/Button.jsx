

const Button = ({text, color = "black", children, url}) => {
    // 이벤트객체라는 것도 존재.
    const onClickButton = (e) => {
        console.log(e);
        console.log(text);
    }

    return (
        <button 
            onClick={onClickButton} 
            // onMouseEnter={onClickButton}
            // 위같은들을 이벤트 핸들러라고 함. 제공되는 여러 이벤트핸들러가 있나봄
        style={{color: color}} url={url}>
        {text} - {color.toUpperCase()}
        {children}
        </button>
    )
}

export default Button;

// 객체 형태로 props를 받게 구현.


// 리액트 18버전 까지는 아래처럼 props 객체의 유효성 검사 및 기본값 설정이 가능했음
// Button.defaultProps = {
//     color: "black",
// };

// 리액트 19버전은 좀다름. 객체의 구조분해 할당을 사용해야함.
// const Button = ({text, color = "black"}) => {
//     return (
//         <button style={{color: color}}>
//         {text} - {color.toUpperCase()}
//         </button>
//     )
// }

