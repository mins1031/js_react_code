import { useParams } from "react-router-dom";
// url paramter를 가져올수 있는 리액트 훅

const Diary = () => {
    const params = useParams();

    console.log(params);

    return (
        <div>{params.id}번 일기 입니다</div>
    );
}

export default Diary;