import React from 'react'

export default function List( {todoData,setTodoData}) { /* props 가져오기 */


    const btnStyle = {
        color: "#fff",
        border: "none",
        padding: "5px 9px",
        borderRadius: "50%",
        cursor: "pointer",
        float: "right",
      };

      const handleCompleteChange =  (id) => {
        let newTodoData = todoData.map(data => {
          if(data.id === id) {
            data.completed = !data.completed;
          }
          return data;
        })
        setTodoData(newTodoData);
        // this.setState({todoData: newTodoData})
      };

      const handleClick = (id) => {
        //filter메소드로 데이터 지우기 : 함수의 조건에 따라 부합되는 요소를 모아 새로운 배열로 반환함
         let newTodoData = todoData.filter(data => data.id !== id)
         console.log('newTodoData', newTodoData)
         setTodoData(newTodoData)
         };

      const getStyle = (completed) => { //할일 목록에 줄 긋는 함수 => 동적으로 처리해야 하기 때문에 함수로 작성함
        return {
          padding : "10px",
          borderBottom : "1px #ccc dotted",
          textDecoration : completed ? "line-through" : "none",
        };
      }
    
  return (
    <div>
        {todoData.map((data) => ( //react에서는 리스트 여러개를 나열할때는 key를 넣어줘야 한다
        //key 속성에는 객체의 구별할 수 있는 유니크한 값을 넣어주면 된다  
          <div style={getStyle(data.compeleted)} key={data.id}>
          <p>
          <input type="checkbox" defalutChecked={data.compeleted} onChange={() => handleCompleteChange(data.id)}
          /> {" "}

        {data.title}
          <button style={btnStyle} onClick={() => handleClick(data.id)}/*클릭하면 삭제되는 함수 */>x</button>
       </p>
    </div>
  ))}
  </div>
  )
}
