// 5가지 요소 순회 및 탐색 가이드

// 1. forEach
// 모든 요소를 순회하며나서 각각의 요소에 특정동작을 수행시키는 메서드
let arr1 = [1,2,3];

arr1.forEach(function (item, idx, arr) {
    console.log(item, idx);
});


// 2. 탐색 includes
// 배열에 특정요소가 있는지 확인하는 메서드
let arr2 = [1,2,3];


console.log(arr2.includes(3));
console.log(arr2.includes(4));

//3. indexOf
// 특정요소의 인덱스를 찾아 반환하는 메서드
let arr3 = [1,2,3];
let index = arr3.indexOf(2);
console.log(index);

let arr3_except = [2,2,2];
console.log(arr3_except.indexOf(2)); // 제일 첫번째 값 출력

// 4.  findIndex
// 모든요소를 순회하며 콜백함수를 만족하는 인덱스를 반환하는 메서드
let arr4 = [1,2,3];
let findIdx = arr4.findIndex(
    (item)=> item % 2 !== 0
);

console.log(findIdx);

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데 요소를 그대로 반환
let arr5 = [
    {name:"정민영"},
    {name:"남정연"}
];

let find = arr5.find(
    (item) => item.name === "정민영"
);

console.log(find); // index가 아닌 객체 그자체가 출력