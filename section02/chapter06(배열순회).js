// 1. 배열순회
let arr = [1,2,3];

// 1.1 배열 인덱스
for(let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
}

// 1.2 for of 반복문
for (let item of arr) {
    // console.log(item)
}

// 2. 객체 순회
let p1 = {
    name: "정민영",
    age : 31,
    hobby : "tennis",
}


// 2.1 Object.keys 사용
// -> 객체에서 key 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(p1);
// console.log(keys)
for (let item of keys) {
    const key = item;
    const value = p1[item]
    // console.log(key, value);
}

// 2.2 Object.values 사용
let values = Object.values(p1);
for (let item of Object.values(p1)) {
    const value = item;
    // console.log(value);
}

// 2.3 for in
for (let key in p1) {
    console.log(key, p1[key]);
}

// for in 은 객체만, for of 는 배열만.