import React, { useState } from "react";

const InputTodo = () => {
  const [description, setDescription] = useState("Type Something!");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      //"http://localhost:5000/todos"
      window.location = "/";
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <h1 className="text-center text-3xl mt-5">PERN Todo List</h1>
      <div className="flex items-center justify-center mt-6">
        <form
          onSubmit={onSubmitForm}
          className="">
          <input
            type="text"
            className="border w-[450px] h-[45px] text-xl border-gray-300 text-gray-400 shadow-md outline-none"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button
            className="bg-green-900 h-[45px] text-gray-200
            px-3 rounded-r-xl border text-xl border-t-gray-500 border-b-gray-500 border-r-gray-500 border-l-none shadow-md">
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default InputTodo;
