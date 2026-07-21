import "./Header.css"
import {memo} from 'react';

const Header = () => {
    console.log("Header");
    return (
    <div className="Header">
        <h3>오늘은 📆</h3>    
        <h1>{new Date().toDateString()}</h1>
    </div>
    );
}

const memoizedComponent = memo(Header); 

// export default Header;
export default memoizedComponent;
// export default memo(Header); 이렇게도 됌.

// 이게 React.memo 사용방식임.
// export로 최적화된 컴포넌트를 설정해주면됨.