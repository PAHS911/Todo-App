import React from "react";
import { useSelector } from "react-redux";

const Filter = () => {
  const todos = useSelector((state) => state.todos);

  const allTodos = todos.map((todo, index) => (
    <div
      key={index}
      className={`text-2xl ${todo.completed ? "line-through" : ""}`}
    >
      {todo.text}
    </div>
  ));

  const completedTodos = todos
    .filter((todo) => todo.completed)
    .map((todo, index) => (
      <div key={index} className="text-2xl line-through">
        {todo.text}
      </div>
    ));

  const incompleteTodos = todos
    .filter((todo) => !todo.completed)
    .map((todo, index) => (
      <div key={index} className="text-2xl">
        {todo.text}
      </div>
    ));

  return (
    <>
      <div className="flex justify-center items-center gap-10 text-2xl mt-8">
        <div>
          <h3 className="border-b-2 mb-5">All</h3>
          {allTodos}
        </div>
        <div>
          <h3 className="border-b-2 mb-5">Complete</h3>
          {completedTodos}
        </div>
        <div>
          <h3 className="border-b-2 mb-5">Incomplete</h3>
          {incompleteTodos}
        </div>
      </div>
    </>
  );
};

export default Filter;
