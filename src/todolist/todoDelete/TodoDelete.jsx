import React from "react";
import "./todo-delete.css";
import { deleteTodoList } from "../../../api/todoListApi";

const TodoDelete = ({ showModalDeleteTodo, handleCloseModalDeleteTodo, todolistChoseDelete, setRefresh, refresh }) => {
  console.log(todolistChoseDelete);
  const handleDeleteActivity = async (e) => {
    try {
      const tes = await deleteTodoList(todolistChoseDelete);
      console.log(tes);
      console.log("berhasi;");
    } catch (error) {
      console.error("Error Delete todolist:", error);
    }
    setRefresh(!refresh);
    handleCloseModalDeleteTodo();
  };

  return (
    <>
      <div
        style={{
          opacity: !showModalDeleteTodo ? "0" : "1",
          transform: `translateY(${!showModalDeleteTodo ? "-10%" : "0%"})`,
          transition: "all 0.3s",
          visibility: !showModalDeleteTodo ? "hidden" : "visible",
          position: "fixed",
          zIndex: 5,
          inset: 0,
        }}
        onClick={handleCloseModalDeleteTodo}
      >
        <div className="modalDeleteTodo-container">
          <div className="modalDeleteTodo-content-container">
            {/*content*/}
            <div className="modalDeleteTodo-content" onClick={(e) => e.stopPropagation()}>
              {/*body*/}
              <div className="modalDeleteTodo-body">
                <i class="fi fi-ss-triangle-warning"></i>
                <p>Delete List?</p>
              </div>
              {/*footer*/}
              <div className="modalDeleteTodo-footer">
                <button className="bg-stone-300 text-zinc-500" onClick={handleCloseModalDeleteTodo}>
                  Close
                </button>
                <button className="bg-red-500 text-white" onClick={handleDeleteActivity}>
                  Delete List
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModalDeleteTodo && <div className="modalDeleteTodo-bg "></div>}
    </>
  );
};

export default TodoDelete;
