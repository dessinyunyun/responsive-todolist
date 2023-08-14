import React, { useState } from "react";
import "./todo-add.css";
import { addTodoList } from "../../../api/todoListApi";
import DropdownPriority from "./DropdownPriority";

export default function TodoAdd({ showModalAddTodo, handleCloseModalAddTodo, setRefresh, refresh, id }) {
  const [newTodo, setNewTodo] = useState({
    activity_group_id: id,
    title: "",
    priority: "normal",
  });

  const addTodo = async (e) => {
    e.preventDefault();

    const data = {
      activity_group_id: newTodo.activity_group_id,
      title: newTodo.title,
      priority: newTodo.priority,
    };

    try {
      await addTodoList(data);
      setRefresh(!refresh);
    } catch (error) {
      console.error("Error post activity:", error);
    }

    handleCloseModalAddTodo();
    setNewTodo({
      activity_group_id: id,
      title: "",
      priority: "normal",
    });
  };

  const handleChangeNewTodo = (e) => {
    setNewTodo({
      ...newTodo,
      [e.target.name]: e.target.value,
    });
  };

  const ButtonAddActivityComponent = () => {
    return (
      <button className={newTodo.title.length > 0 ? "bg-sky-500 text-white" : "bg-sky-300 text-white"} onClick={addTodo} disabled={newTodo.title.length <= 0}>
        Add Activity
      </button>
    );
  };

  return (
    <>
      <div
        style={{
          opacity: !showModalAddTodo ? "0" : "1",
          transform: `translateY(${!showModalAddTodo ? "-10%" : "0%"})`,
          transition: "all 0.3s",
          visibility: !showModalAddTodo ? "hidden" : "visible",
          position: "fixed",
          zIndex: 5,
          inset: 0,
        }}
        onClick={handleCloseModalAddTodo}
      >
        <div className="modaladdtodolist-container">
          <div className="modaladdtodolist-content-container">
            {/*content*/}
            <div className="modaladdtodolist-content" onClick={(e) => e.stopPropagation()}>
              {/*header*/}
              <div className="modaladdtodolist-header">
                <h3>Add New Todo-list</h3>
                <button onClick={handleCloseModalAddTodo}>
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
      {showModalAddTodo && <div className="modaladdtodolist-bg "></div>}
    </>
  );
}
