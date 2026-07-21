# useMemo

'메모이제이션' 기법을 기반으로 불필요한 연산을 최적화 하는 리액트 훅

예를들어 B라는 동작을 여러번 진행하는 A러눈 기능이 있닥고 할때
첫번째로 B가 동작된후 해당 동작의 결과를 보관해 이후 B가 동작될때 보관했던 결과를 전달해주는 방식이라고함.

## 1. 간단하게 현재 투두 갯수, 완료 갯수, 미완료 갯수를 가시하는 함수와 ui코드다

```
const getAnalyzedData = () => {
        console.log("Hi~");
        const totalCount = todos.length;
        const doneCount = todos.filter(
            (todo) => todo.isDone
        ).length;

        const notDoneCount = totalCount - doneCount;

        return {
            totalCount,
            doneCount,
            notDoneCount
        }
    };

    const {totalCount, doneCount, notDoneCount} = getAnalyzedData();

    return (
    <div className="List">
        <h4>Todo List 🌱</h4>
        <div>
            <div>total : {totalCount}</div>
            <div>done : {doneCount}</div>
            <div>notDone : {notDoneCount}</div>
        </div>
```

- 현재 화면중 List 컴포넌트내의 검색기능을 이용하면 List 가 리랜더링이 일어나게됨.
- 또한 코드중 doneCount의 filter 함수는 todos가 많아질수록 성능이 저하되는 코드.
- 다만 이런 서치바의 내용이 변한다고해서 getAnalyzedData() 함수의 결과가 변하는게 아니기 때문에 재실행될 필요가 없음
- 고로 이러한 불필요한 렌더링을 제한하기 위한 기능들에 useMemo 기능을 활용할 수 있음
- getAnalyzedData()의 콘솔메세지는 검색바에 글자를 입력할때마다 콘솔에 출력

## 2.useMemo를 활용해 통계정보 리렌더링 방지

```
const {totalCount, doneCount, notDoneCount} = useMemo(() => {
        console.log("Hi~");
        const totalCount = todos.length;
        const doneCount = todos.filter(
            (todo) => todo.isDone
        ).length;

        const notDoneCount = totalCount - doneCount;

        return {
            totalCount,
            doneCount,
            notDoneCount
        }
    }, []);
    // 두번째 인자는 의존성 배열 . useEffect랑 동일함.
    // useMemo는 첫번째 인자인 콜백함수가 반환하는 내용을 그대로 반환함
    //


    // const {totalCount, doneCount, notDoneCount} = getAnalyzedData();
```

- useMemo()는 두개의 인자를 필요로하고 동작자체는 useEffect와 유사
- 첫번째는 콜백함수로 두번째 인자의 변경감지시 동작하는 내용
- 두번째는 의존성 배열. 해당 배열의 값이 변경되면 변경감지후 첫번째 인자인 콜백함수가 동작.
- 검색바에 글자를 입력할때마다 콘솔에 출력되던 메세지 처음랜더링 한번만 출력.
- 위 처럼 의존성배열을 빈배열로 넣게되면 당연히 첫 렌더링시에만 동작하고 그 이후엔 동작 x
- 그래서 done이나 새로운 todo를 추가해도 통계값은 그대로임

## 3. 두번째 배열, 의존성 배열에 값 추가

```
const {totalCount, doneCount, notDoneCount} = useMemo(() => {
        console.log("Hi~");
        const totalCount = todos.length;
        const doneCount = todos.filter(
            (todo) => todo.isDone
        ).length;

        const notDoneCount = totalCount - doneCount;

        return {
            totalCount,
            doneCount,
            notDoneCount
        }
    }, [todos]);
```

- 빈 배열로 두면 에러메세지가 발생함
- todos 추가후 변경감지 잘됨
