import { useState } from "react";
import Input from "./Input";
import Item from "./Item";


function App() {
  let [todos, setTodos] = useState(['Breakfast', 'lunch', 'dinner'])
  let [editData, setData] = useState({
    index: '',
    data: ''
  })

  // let[]
  const addTodo = (value) => {
    // todos.push(value)
    // setTodos([...todos])v
    setTodos([...todos, value])

  }
  const deleteTodo = (value) => {
    // todos.splice(index, 1)
    // setTodos([...todos])
    let filterTodos = todos.filter((todo) => todo !== value)
    setTodos(filterTodos)

  }
  const editTodo = (data, index) => {

    setData({
      index,
      data

    })
  }
  const updateTodo=(index,data)=>{
 todos.splice(index,1,data)
 setTodos([...todos])
 setData({
  index: '',
  data: ''
})
  }
  


  return (
    <div className="container mt-5">
      <Input addTodo={addTodo} editData={editData} updateTodo={updateTodo} />
      <Item todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
    </div>
  );
}

export default App;
