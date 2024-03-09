import { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState(["sample"]);
  const [newTodo, setnewTodo] = useState("");

  let addTaskhandler = (event) => {
    setTodos([...todos, newTodo]);
    setnewTodo("");
  };

  let changehandler = (event) => {
    setnewTodo(event.target.value);
  };

  let deleteTodo = (todo) => {
    let modifiedArr = todos.filter((each) => {
      each !== todo;
    });

    settodos(modifiedArr);
  };

  return (
    <div>
      <input
        placeholder="add a task"
        value={newTodo}
        onChange={changehandler}
      />
      <button onClick={addTaskhandler}>Add Task</button>
      <h4>TODO LIST</h4>

      <ul>
        {todos.map((todo, index) => {
          return (
            <div>
              <li>
                {todo}
                <button onClick={() => deleteTodo(todo)} key={index}>
                  X
                </button>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
