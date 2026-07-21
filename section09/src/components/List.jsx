import "./List.css";
import TodoItem from "./TodoItem";
import { useState } from "react";

const List = ({todos, onUpdate, onDelete}) => {
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

    return (
    <div className="List">
        <h4>Todo List 🌱</h4>
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
                    onUpdate={onUpdate}
                    onDelete={onDelete}
                />;
            
            })}
        </div>
    </div>
    );
}

export default List;