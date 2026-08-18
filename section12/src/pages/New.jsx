import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { DiaryStateContext } from '../App';

import Button from '../components/Button'
import Header from '../components/Header'
import Editor from '../components/Editor';


const New = () => {
    const nav = useNavigate();
    const data = useContext(DiaryStateContext);


    const onClickCancel = () => {
        nav("/")
    };

    const onClickRegist = (e) => {
        
        nav("/")
    };

    
    return (<div>
        <Header 
            title={"새 일기 쓰기"}
            leftChild={<Button text={"< 뒤로 가기"}/>}
        />

        <Editor />
    
    </div>);
}

export default New;