import { useState } from "react";
import "./App.css";

function App() {
  const [todos, settodos] = useState(["sample"]);
  const [newtodo, setnewTodo] = useState("");

  function addtaskhandler(event) {
    settodos([...todos, newtodo]);
    setnewTodo("");
  }

  function inputchangehandler(event) {
    setnewTodo(event.target.value);
  }

  let deletelisthandler = (tododelete) => {
    settodos(todos.filter((todo) => todo !== tododelete));
  };

  let uppercasehandler = () => {
    settodos(
      todos.map((todo) => {
        return todo.toUpperCase();
      })
    );
  };

  let lowercasehandler=(todos)=>{
    settodos(
      todos.map((todo)=>{
        return todo.toLowerCase();
      })
    )
  }

  return (
    <div>
      <h1>TODO LIST</h1>

      <div>
        <input
          type="text"
          value={newtodo}
          onChange={inputchangehandler}
          placeholder="enter the task"
        />
        <button onClick={addtaskhandler}>Add Task</button>
      </div>

      <h3>todo tasks</h3>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div>
              <li key={index}>
                {todo}
                <button onClick={() => deletelisthandler(todo)} key={index}>
                  X
                </button>
              </li>
            </div>
          );
        })}
      </ul>

      <button onClick={() => uppercasehandler(todos)}>toUpperCase</button>
      <button onClick={()=> lowercasehandler(todos)}>toLowerCase</button>
    </div>
  );
}

export default App;
