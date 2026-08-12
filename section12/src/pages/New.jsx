import { useNavigate } from 'react-router-dom';

import Button from '../components/Button'
import Header from '../components/Header'

const New = () => {
    const nav = useNavigate();


    const onClickCance = () => {
        nav("/")
    };

    const onClickRegist = () => {
        // props로.. diary 추가하는 값이 필요하겠네
        // 또 날짜, 감정, 일기, id 이렇게 넘겨야 하는데.. 어떻게 하지?
        nav("/")
    };

    

    return (<>
        <Header 
            title="새 일기 쓰기" 
            leftChild={<Button text={"< 뒤로 가기"}/>}
        />

        <div>
            <h2>오늘의 날짜</h2>
        </div>

        <div>
            <h2>오늘의 감정</h2>
        </div>

        <div>
            <h2>오늘의 일기</h2>
        </div>

        <div>
            <button>취소하기</button>
            <button>작성완료</button>
        </div>

        

        <div>
            <h2>NEW</h2>
        </div>
    </>);
}

export default New;