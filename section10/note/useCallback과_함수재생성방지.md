# useCallback

## useCallback을 통한 최적화
- 이전내용으로 memo와 컴포넌트에서 default 로 설정시 memo(TOdo.. ) 에서 Props들을 비교하며 변경여부를 판단하는 로직을 만들어줌
- 이건 유지보수 관점에서 별로임.
- 그럴때 사용할 수 있는 훅이 useCallback임.
- 동작은 useEffect, useMemo와 동일하고 역할은 특정 함수를 최적화해 리렌더링이 되지 않게하는것임


~~~
--- APP 컴포
const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime()    
      }
    });
  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId
    });
  }, [])

  // const onDelete = (targetId) => {
  //   dispatch({
  //     type: "DELETE",
  //     targetId: targetId
  //   });
  // }

  // 첫 인자는 불필요한 재생성 방지 할 함수
  // 두번쨰 인자는 뎁스
  // 그래서 두번째 인자를 빈배열로 설정하면 첫 마운트될때 를 제외하곤 해당 함수가 리렌더링 되지 않는다.
  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId
    });
  }, []);


  --- TodoItem 컴포
  export default memo(TodoItem);
// export default memo(TodoItem, (prevProps, nextProps) => {
//     // 반환값에 따라, Props가 바뀌었는지 안바뀌었는지 판단
//     // true -> Props 바뀌지 않음 => 리렌더링 x
//     // false -> Props 가 바뀜 => 리렌더링 o

//     if(prevProps.id !== nextProps.id) return false;
//     if(prevProps.isDone !== nextProps.isDone) return false;
//     if(prevProps.content !== nextProps.content) return false;
//     if(prevProps.date !== nextProps.date) return false;

//     return true;
// });
~~~


## 그럼 이런 최적화는 언제해야하는가?
- 최적화는 아래순서가 일반적임
1. 기능구현
2. 최적화
- 처음부터 최적화를 하게 되면 기능추가, 변경시 최적화 내용을 건드릴떄 잘못될 가능성이 있다고함.

## 어떤 대상이 최적화 대상인가?
- 모든대상 x, 꼭 최적화가 돼야하는 대상에만 적용하는 것이 좋음
- 굳이 memo, useCallback같은 걸로 최적화 안시키고 그냥 리렌더링시켜도 성능상 문제없고 오히려 더 나은 상황일 수도 있음
- 최적화가 필요한 부분에만 적용하는게 좋다.