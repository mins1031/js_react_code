// function add(a,b, callback) {
//     setTimeout(() => {
//         const sum = a + b;
//         callback(sum);
//     }, 3000);
// }

// add(1,2, (value) => {console.log(value);});

// 음식주문 상황
function orderFood(callback) {
    setTimeout(()=> {
        const food = "떡볶이"; // 비동기의 결과값
        let completeTime = new Date();
        callback(food, completeTime); // 외부에서 사용하기 위한 콜백함수
    }, 3000) // 3초뒤 음식 도착
}

let order = {
    foodName: "",
    createTime: new Date(),
    updateTiem: null,
    state : "주문완료"
}

orderFood(
    //1 주문 조리
    (food, time) => {
        order.foodName = food;
        order.updateTiem = time;
        order.state = "조리완료";
        console.log(order);        

        cooldownFood(order, (food) => console.log(food))
    }
)

console.log(order);


function cooldownFood(order, callback) {
    setTimeout(()=> {
        const cooldownedFood = `식은 ${order.foodName}`; // 비동기의 결과값
        let completeTime = new Date();
        order.foodName = cooldownedFood;
        order.updateTiem = new Date();
        order.state = "식힘완료"

        callback(order); // 외부에서 사용하기 위한 콜백함수
    }, 3000) // 3초뒤 음식 도착
}