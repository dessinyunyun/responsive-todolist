import React, { useEffect, useState } from "react";
import "./todo-edit.css";
import { editTodoList } from "../../../api/todoListApi";
import DropdownPriority from "./DropdownPriority";

export default function TodoEdit({ showModalEditTodo, handleCloseModalEditTodo, setRefresh, refresh, todoChoseEdit }) {
  const [newTodo, setNewTodo] = useState({ id: todoChoseEdit.id, title: todoChoseEdit.title, priority: todoChoseEdit.priority });

  useEffect(() => {
    setNewTodo({ id: todoChoseEdit.id, title: todoChoseEdit.title, priority: todoChoseEdit.priority });
  }, [todoChoseEdit]);

  const editTodo = async (e) => {
    e.preventDefault();

    const data = {
      todoId: newTodo.id,
      title: newTodo.title,
      priority: newTodo.priority,
    };

    try {
      await editTodoList(data);
      setRefresh(!refresh);
    } catch (error) {
      console.error("Error post activity:", error);
    }

    handleCloseModalEditTodo();
  };

  const handleChangeNewTodo = (e) => {
    setNewTodo({
      ...newTodo,
      [e.target.name]: e.target.value,
    });
  };

  const ButtonAddActivityComponent = () => {
    return (
      <button className={newTodo.title.length > 0 ? "bg-sky-500 text-white" : "bg-sky-300 text-white"} onClick={editTodo} disabled={newTodo.title.length <= 0}>
        Edit TodoList
      </button>
    );
  };

  console.log(todoChoseEdit);
  console.log(newTodo);

  return (
    <>
      <div
        style={{
          opacity: !showModalEditTodo ? "0" : "1",
          transform: `translateY(${!showModalEditTodo ? "-10%" : "0%"})`,
          transition: "all 0.3s",
          visibility: !showModalEditTodo ? "hidden" : "visible",
          position: "fixed",
          zIndex: 5,
          inset: 0,
        }}
        onClick={handleCloseModalEditTodo}
      >
        <div className="modaladdtodolist-container">
          <div className="modaladdtodolist-content-container">
            {/*content*/}
            <div className="modaladdtodolist-content" onClick={(e) => e.stopPropagation()}>
              {/*header*/}
              <div className="modaladdtodolist-header">
                <h3>Edit New Todo-list</h3>
                <button onClick={handleCloseModalEditTodo}>
                  <span>×</span>
                </button>
              </div>
              {/*body*/}
              <div className="modaladdtodolist-body">
                <input type="text" id="activity-title" name="title" placeholder="Enter your todo-title ..." value={newTodo.title} onChange={handleChangeNewTodo} />
                <div className="priority-container">
                  <label htmlFor="priority">Priority</label>
                  <DropdownPriority newTodo={newTodo} setNewTodo={setNewTodo} />
                </div>
              </div>
              {/*footer*/}
              <div className="modaladdtodolist-footer">
                <ButtonAddActivityComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModalEditTodo && <div className="modaladdtodolist-bg "></div>}
    </>
  );
}
