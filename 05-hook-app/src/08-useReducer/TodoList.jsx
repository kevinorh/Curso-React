import React from "react";
import { TodoListItem } from "./TodoListItem";

export const TodoList = ({ todos = []}) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
        // <li
        //   key={todo.id}
        //   className="list-group-item d-flex justify-content-between"
        // >
        //   <span className="align-self-center">Item 1</span>
        //   <button className="btn btn-outline-danger">Borrar</button>
        // </li>
      ))}
    </ul>
  );
};
