import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/action";

export const Todo = () => {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputText.trim() !== "") {
      dispatch(addTodo(inputText));
      setInputText("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <>
      <div className="mt-9 flex justify-center items-center">
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          className="py-2 px-4 bg-gray-100 border-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500 text-gray-700 leading-tight transition-colors duration-200"
        />
        <button
          onClick={handleAddTodo}
          className="text-white px-5 py-3 rounded-2xl bg-blue-500 ml-4"
        >
          Add
        </button>
      </div>
    </>
  );
};
