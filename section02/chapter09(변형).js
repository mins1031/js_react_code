// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소만 필터링해 새로운 배열로 반환
// java의 stream.filter(...).toList() 와 같은 동작인듯?

let arr1 = [
    {name:"정민영", hobby:"테니스"},
    {name:"남정연", hobby:"테니스"},
    {name:"홍길동", hobby:"독서"}
];

const tennisPeople = arr1.filter((item) => item.hobby === "테니스");

console.log(tennisPeople);

// 2. map
// 배열의 모든 요소를 순회하며 각 콜백함수를 실행하고 그 결과값을 모아서 새로운 배열로 반환
let arr2 = [1,2,3];
const mapResult1 = arr2.map((item, idx, arr) => {
    return item * 2;
})
console.log(mapResult1); [2,4,6] //이라는 새로운 배열 생성

const nameArr = arr1.map((item)=> item.name);
console.log(nameArr); //arr1에서 name만 모아서 새로운 배열로 생성한 결과

// 3. sort 
// 배열을 사전순으로 정렬하는 메서드
let arr3 = ["b", "a", "c"];
arr3.sort();

console.log(arr3);

// 그러나.. 숫자로 이루어진 배열은 sort가 정상동작 x
let arrNum = [5,3,2];
arrNum.sort();
console.log(arrNum);

arrNum.sort((a,b) => {
    // 오름차순 정렬
    // b가 a 앞에 와라
    if(a > b) {
        return 1; // b, a 배치
    } else if(b > a) {
    // a가 b 앞에 와라
        return -1;
    } else {
        // 두 값의 자리를 바꾸지 마라
        return 0;
    }
});

arrNum.sort((a,b) => {
    // 내림차순 정렬
    // b가 a 앞에 와라
    if(a > b) {
        return -1; //a, b 배치
    } else if(b > a) {
    // a가 b 앞에 와라
        return 1;
    } else {
        // 두 값의 자리를 바꾸지 마라
        return 0;
    }
});

// 4. toSorted (가장 최근 추가된 함수)
// 정렬된 새로운 배열을 반환하는 메서드
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

//5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr6 = ["hi", "im", "miins"];
console.log(arr6.join(" "));
