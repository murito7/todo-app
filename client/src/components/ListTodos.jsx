import React from "react";
import { useState, useEffect } from "react";
import EditTodo from "./EditTodo";

function ListTodos() {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const res = await fetch("http://localhost:5000/todos");
      const jsnoData = await res.json();

      setTodos(jsnoData);
    } catch (err) {
      console.error(err.mesasge);
    }
  };

  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });

      setTodos(todos.filter((todo) => todo.todo_id !== id));
    } catch (err) {
      console.error(err.mesasge);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <table className="w-[100%] mx-auto mt-10 border-t-[1px] text-center ">
        <thead className="h-[60px]  border-b-[1px]">
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className="text-center ">
          {todos.map((todo) => (
            <tr key={todo.todo_id}>
              <td className="w-[200px] break-all sm:w-[400px] xl:w-[550px]">
                {todo.description}
              </td>
              <td>
                <EditTodo todo={todo} />
              </td>
              <td>
                <button
                  className="bg-[#FF4731] text-white font-bold p-2 mt-2 rounded-md"
                  onClick={() => deleteTodo(todo.todo_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListTodos;
