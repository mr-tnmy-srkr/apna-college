import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([{ task: "sample tasks", id: uuidv4() }]);
  const [newTodo, setNewTodo] = useState("");

  const addNewTasks = (e) => {
    setNewTodo(e.target.value);
  };
  const updateTodoValue = () => {
    setTodos([...todos, { task: newTodo, id: uuidv4() }]);
    setNewTodo("");
  };
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleUpperCase = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        } else {
          return { ...todo };
        }
      })
    );
  };
  const upperCaseAll = () => {
    setTodos(
      todos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      })
    );
  };

  return (
    <>
      <input
        type="text"
        name=""
        id=""
        value={newTodo}
        onChange={addNewTasks}
        placeholder="Add a tasks"
      />
      <br />
      <br />
      <br />
      <button onClick={updateTodoValue}>Add a Tasks</button>
      <br />
      <br />
      <br />
      <hr />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.task}</span>
            <span>
              <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            </span>
            <span>
              <button onClick={() => handleUpperCase(todo.id)}>
                Uppder case
              </button>
            </span>
          </li>
        ))}
      </ul>
      <br />
      <br />
      <button onClick={upperCaseAll}>UpperCase-All</button>
    </>
  );
}

export default App;
