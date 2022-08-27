import React from "react";
import { useState } from "react";

function EditTodo({ todo }) {
  const [show, setShow] = useState(false);
  const [description, setDescription] = useState(todo.description);

  const openModal = () => setShow(!show);

  const updateDescription = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const res = await fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <button
        className="bg-[orange] text-white font-bold p-2 mt-2 rounded-md"
        onClick={openModal}
      >
        Edit
      </button>
      {show && (
        <>
          <div
            className="absolute w-[100%] h-[100%] top-0 left-0 bg-black opacity-75"
            onClick={openModal}
          ></div>
          <div
            className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2
        bg-white  w-[90%] sm:w-[500px] "
          >
            <div className="flex justify-between px-4 py-2 border-b-[1px] ">
              <h1 className="text-2xl font-bold">Edit Todo</h1>
              <button className="" onClick={openModal}>
                &#10006;
              </button>
            </div>
            <input
              className="w-[90%] h-[40px]  border-[1px] border-gray-300 rounded-sm mt-3 mb-3 pl-3"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <div className="flex justify-end h-[70px] items-center pr-4 border-t-[1px] border-gray-300">
              <button
                className="bg-[orange] text-white font-bold py-2 px-3  rounded-md mr-2"
                onClick={(e) => updateDescription(e)}
              >
                Edit
              </button>
              <button
                className="bg-[#FF4731] text-white font-bold py-2 px-3  rounded-md"
                onClick={openModal}
              >
                Close
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default EditTodo;
