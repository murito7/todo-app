import React from "react";
import { useState } from "react";

function InputTodo() {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const res = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="flex  justify-center h-[60px] mt-10">
      <input
        className=" border-[1px] border-black w-[70%] rounded-md pl-4 mr-5 text-xl"
        type="text"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button
        className="bg-[green] w-[70px] rounded-md text-white font-bold tracking-wider"
        onClick={onSubmitForm}
      >
        ADD
      </button>
    </div>
  );
}

export default InputTodo;
