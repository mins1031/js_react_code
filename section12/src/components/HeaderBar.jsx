

const HeaderBar = ({onCreate}) => {
    let year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;

    // console.log(year);
    // console.log(month);

    return (<>
        <h2> {year}년 {month}월 </h2>
        
    </>);
};

export default HeaderBar;