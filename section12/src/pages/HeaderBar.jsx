

const HeaderBar = ({onCreate}) => {
    return (<>

        <button className="new" onClick={onCreate}>새 일기 쓰기</button>
        
    </>);
};

export default HeaderBar;