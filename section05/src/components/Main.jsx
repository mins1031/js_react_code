import "./Main.css"


const Main = () => {
  const user = {
    name: "이정환",
    isLogin: true,
  };
// 조건에 따른 다른 태그 랜더링
  // return (
  //   <>
  //     {user.isLogin ? 
  //     (
  //       <div>로그아웃</div>
  //     ) : 
  //     (
  //       <div>로그인</div>
  //     )}
  //   </>
  // );
  if(user.isLogin) {
    return <div className="logout"> 로그아웃</div>
  } else {
    return <div>로그인</div>
  }
}

export default Main;