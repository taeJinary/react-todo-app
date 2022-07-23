import React, { useState } from "react";
import List from "./components/List";
import "./App.css";
import Form from "./components/Form";
export default function App() { //함수형 컴포넌트 선언
  /*함수형 컴포넌트 에서는 render 없이 return 할 수 있다 */
  //react Hooks를 사용해서 함수형 컴포넌트 작성하기
  const [todoData, setTodoData] = useState([]) //다른곳에서 자주 사용하는 데이터는 props로 내려 주는것이 좋다
  const [value, setValue] = useState("");

    const handleSubmit = (e) => { //setTodoData,setValue등 컴포넌트가 안에 있기 때문에 props로 넘겨주자
      e.preventDefault();
    
      //새로운 할 일 데이터
    let newTodo = {
      id: Date.now(),
      title:  value,
      completed: false,
    };
    
    //원래 있던 할 일에 새로운 할 일 더하기
    setTodoData((prev) => [...prev, newTodo]);
    setValue("");
  };

    return( //JSX에서 html 클래스태그를 작성할때는 className이라 작성한다
      <div className="flex items-center justify-center w-screen h-screen bg-blue-100"> 
        <div className="w-full p-5 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
          <div className="flex justify between mb-3">
            <h1>할 일 목록</h1>
          </div>
          <List todoData={todoData} setTodoData={setTodoData}/>
          <Form handleSubmit={handleSubmit} value={value} setValue={setValue} />
        </div>
        </div>
    )
};