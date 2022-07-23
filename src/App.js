import React, {Component} from "react";
import "./App.css";
export default class App extends Component { //클래스형 컴포넌트 선언

  state = { //데이터가 변할 때 화면에 재 렌더링 해주는 state
    todoData : [ //map메소드로 새로운 배열 생성
  ],
      value: ""
  };

  btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };

  getStyle = (completed) => { //할일 목록에 줄 긋는 함수 => 동적으로 처리해야 하기 때문에 함수로 작성함
    return {
      padding : "10px",
      borderBottom : "1px #ccc dotted",
      textDecoration : completed ? "line-through" : "none",
    };
  }

  
  handleClick = (id) => {
 //filter메소드로 데이터 지우기 : 함수의 조건에 따라 부합되는 요소를 모아 새로운 배열로 반환함
  let newTodoData = this.state.todoData.filter(data => data.id !== id)
  console.log('newTodoData', newTodoData)
  this.setState({ todoData: newTodoData})
  };

  handleChange = (e) => {
    console.log('e', e.target.value);
    this.setState({ value: e.target.value });
  }

  handleSubmit = (e) => {
    // form 안에 input을 전송할 때 페이지가 리로드 되는걸 막아줌
    e.preventDefault();

    //새로운 할 일 데이터
    let newTodo = {
      id: Date.now(),
      title: this.state.value,
      completed: false,
    };
    //원래 있던 할 일에 새로운 할 일 더하기
    this.setState({ todoData: [...this.state.todoData, newTodo], value: "" });
  }

  handleCompleteChange =  (id) => {
    let newTodoData = this.state.todoData.map(data => {
      if(data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    })

    this.setState({todoData: newTodoData})
  };

  render() { //함수형 컴포넌트는 render메소드를 작성하지 않고 return하면 된다.
    return( //JSX에서 html 클래스태그를 작성할때는 className이라 작성한다
      <div className="container"> 
        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>
          </div>

        {this.state.todoData.map((data) => ( //react에서는 리스트 여러개를 나열할때는 key를 넣어줘야 한다
        //key 속성에는 객체의 구별할 수 있는 유니크한 값을 넣어주면 된다  
          <div style={this.getStyle(data.compeleted)} >
          <input type="checkbox" defalutChecked={false} onChange={() => this.handleCompleteChange(data.id)}/>
        {data.title}
          <button style={this.btnStyle} onClick={() => this.handleClick(data.id)}/*클릭하면 삭제되는 함수 */>x</button>
        </div>
        ))}

          <form style={{ display : 'flex'}} onSubmit={this.handleSubmit}>
          <input type="text" name="value" style={{ flex :'10', padding:'5px'}}
          placeholder="해야 할 일을 입력하세요" value={this.state.value}
          onChange={this.handleChange}
          />
          <input
           type="submit"
           value="입력"
           className="btn"
           style={{flex: '1'}}
          />
          </form>
        </div>
      </div>
    )
  }
}