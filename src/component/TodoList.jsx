import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../redux/action";
import { FaTrash } from "react-icons/fa";

export const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="w-auto pt-9 gap-10 flex justify-center items-center">
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`text-2xl flex items-center ${
              todo.completed ? "line-through" : ""
            }`}
            onClick={() => handleToggleTodo(todo.id)}
          >
            {todo.text}
            <FaTrash
              className="w-6 h-6 ml-12 text-red-500 cursor-pointer"
              onClick={() => handleDeleteTodo(todo.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
