// 함수선언

let area1 = getArea(10, 20);
console.log("1 : " + area1);


function getArea(width, height) {

    // 중첩함수. 함수안에 함수선언
    function another() {
        console.log("another");
    }
    another();
    let area = width * height;

    return area;
}

// cpp, java 는 메인 보다 아래선언된 함수는 사용불가. but js는 가능
// 이유는? 호이스팅 덕분. 하단의 코드들을 컴파일시 상단으로 끌어올려져서 실행되는듯함.
// 좋게 말하면 유연, 나쁘게 말하면 자유도가 높아 컨벤션 정의를 세세하게 해야할듯?