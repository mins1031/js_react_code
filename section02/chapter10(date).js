// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 현재시간.
console.log(date1);

let date2 = new Date("1996-10-14/10:00:00");
// "1996-10-14" or "1996/10/14" 둘다 가능
// 
console.log(date2);

// 2. 타임 스탬프
// 특정시간이 "1970.01.01 00시 00분00초"부터 몇 ms가 지났는지를 의미하는 숫자값
// 위 기준 시간은 세계협정시 라고해서 UTC 라고함.
let ts1 = date1.getTime();
console.log(ts1); // 1777538479761

let date4 = new Date(ts1);
console.log(date4);

// 3. date로 부터 시간요소 추출
let year = date1.getFullYear();
let month = date1.getMonth();
let hour = date1.getHours();
let minutes = date1.getMinutes();
let second = date1.getSeconds();

console.log(
    year,
    month + 1, // 달은 배열 인덱스처럼 0부터 시작(0=1월) 그래서 +1 해서 사용해야 정확
    hour,
    minutes,
    second
);


// 4. 시간수정
date1.setFullYear(2023);
// ....

// 5. t시간을 여러 포맷으로 출력
console.log(
    date1.toDateString() // 영어포맷
);

console.log(
    date1.toLocaleString()
);

