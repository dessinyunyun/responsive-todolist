import React from "react";
import "./todolist.css";
import CheckBoxTodo from "./CheckBoxTodo";

const TodolistComponent = ({ todoList, refresh, setRefresh, handleShowModalEditTodo, handleShowModalDeleteTodo }) => {
  const colorItem = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-600";
      case "normal":
        return "bg-green-600";
      case "low":
        return "bg-purple-500";
      default:
        return "bg-purple-500";
    }
  };

  const customSort = (item) => {
    let priorityValue = 0;
    if (item.priority === "high") {
      priorityValue = 0;
    } else if (item.priority === "normal") {
      priorityValue = 1;
    } else if (item.priority === "low") {
      priorityValue = 2;
    }

    const activeValue = item.is_active ? 0 : 1;

    return [activeValue, priorityValue];
  };

  const sortedTodoList = todoList.slice().sort((a, b) => {
    const [aActive, aPriority] = customSort(a);
    const [bActive, bPriority] = customSort(b);

    // Urutkan berdasarkan status aktif (is_active)
    if (aActive !== bActive) {
      return aActive - bActive;
    }

    // Jika status aktif sama, urutkan berdasarkan prioritas
    return aPriority - bPriority;
  });

  return (
    <div className="flex flex-col gap-2">
      {sortedTodoList.map((todo) => {
        return (
          <div key={todo.id} className="todolist-container shadow-md bg-white p-5 rounded-md flex justify-between">
            <div className="left flex items-center gap-5">
              <CheckBoxTodo todo={todo} refresh={refresh} setRefresh={setRefresh} />

              <div className="priority-title flex items-center">
                <span className={`priority ${colorItem(todo.priority)}`}></span>
                <div className={`judul-todo ${!todo.is_active && "line-through italic text-slate-500"}`}>{todo.title}</div>
              </div>
            </div>
            <div className="right flex gap-5">
              <div className="tombol-edit">
                <i className="fi fi-rs-pencil cursor-pointer" onClick={() => handleShowModalEditTodo(todo)}></i>
              </div>
              <div className="delete-icon">
                <i className="fi fi-rs-trash fs-5 text-muted cursor-pointer" onClick={() => handleShowModalDeleteTodo(todo)}></i>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodolistComponent;
