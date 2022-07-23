import React from 'react'

export default function List( {todoData,setTodoData}) { /* props 가져오기 */

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
    
  return (
    <div>
        {todoData.map((data) => ( //react에서는 리스트 여러개를 나열할때는 key를 넣어줘야 한다
        //key 속성에는 객체의 구별할 수 있는 유니크한 값을 넣어주면 된다  
          <div key={data.id}>
          <div className="flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded ">
          <div className="item-center">
          <input type="checkbox" 
          defalutChecked={data.compeleted} 
          onChange={() => handleCompleteChange(data.id)}
          /> {" "}
          <span className={data.completed ? "line-through" : undefined}>{data.title}</span>

          </div>
          <button className="px-4 py-2 float-right" onClick={() => handleClick(data.id)}
/*클릭하면 삭제되는 함수 */>x</button>
       </div>
    </div>
  ))}
  </div>
  )
}
