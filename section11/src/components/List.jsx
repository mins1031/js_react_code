import "./List.css";
import TodoItem from "./TodoItem";
import { useState, useMemo, useContext } from "react";
import { TodoContext } from "../App";

const List = () => {
    const {todos} = useContext(TodoContext);
    const [search, setSearch] = useState("");
    
    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    }

    const getFilteredData = ()=>{
        if(search === "") {
            return todos;
        }

        return todos.filter((todo) =>
             todo.content.toLowerCase().
                includes(search.toLowerCase())
        )// 문자열 include는 인자에 해당하는 문자가 있으면 true. 그래서 true 인것만 모아서 return.
    }

    const filteredDatas = getFilteredData();

    // const getAnalyzedData = () => {
    //     console.log("Hi~");
    //     const totalCount = todos.length;
    //     const doneCount = todos.filter(
    //         (todo) => todo.isDone
    //     ).length;

    //     const notDoneCount = totalCount - doneCount;

    //     return {
    //         totalCount,
    //         doneCount,
    //         notDoneCount
    //     }
    // };

    const {totalCount, doneCount, notDoneCount} = useMemo(() => {
        console.log("Hi~");
        const totalCount = todos.length;
        const doneCount = todos.filter(
            (todo) => todo.isDone
        ).length;

        const notDoneCount = totalCount - doneCount;

        return {
            totalCount,
            doneCount,
            notDoneCount
        }
    }, [todos]);
    // 두번째 인자는 의존성 배열 . useEffect랑 동일함.
    // useMemo는 첫번째 인자인 콜백함수가 반환하는 내용을 그대로 반환함
    // 


    // const {totalCount, doneCount, notDoneCount} = getAnalyzedData();

    return (
    <div className="List">
        <h4>Todo List 🌱</h4>
        <div>
            <div>total : {totalCount}</div>
            <div>done : {doneCount}</div>
            <div>notDone : {notDoneCount}</div>
        </div>
        <input 
            // onKeyDown={onKeydown}
            value={search}
            onChange={onChangeSearch}
            onplaceholder="검색어를 입력하세요"/>
        <div className="todos_wrapper">
            {filteredDatas.map((todo)=> {
                // return <div>{todo.content}</div>;
                
                return <TodoItem 
                    key={todo.id} 
                    {...todo} 
                />;
            
            })}
        </div>
    </div>
    );
}

export default List;