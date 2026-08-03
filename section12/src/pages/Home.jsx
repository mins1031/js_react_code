import { useSearchParams } from "react-router-dom";
// query param을 처리할 수 있는 리액트 훅


const Home = () => {
    const [params, setParams] = useSearchParams();
    // useState 사용법과 동일함
    // params는 query param으로 전달받은 값을 사용할 수 있고
    // setParams는 params 를 set 할 수 있음.
    
    console.log(params.get("value"));

    return (
        <div>Home</div>
    );
}

export default Home;