import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getActivityDetail } from "../../api/activityListApi";
import "./todolist-dashoard.css";
import TodolistComponent from "./todolist/Todolist";
import TodoAdd from "./todoAdd/TodoAdd";
import TodoEdit from "./todoEdit/TodoEdit";
import EditTItleActivity from "./editTitleActivity/EditTItleActivity";
import TodoDelete from "./todoDelete/TodoDelete";

const TodoListDashboard = () => {
  const { id } = useParams();
  const [todoList, setTodoList] = useState([]);
  const [activityDetailName, setActivityDetailName] = useState("");
  const [showModalAddTodo, setShowModalAddTodo] = useState(false);
  const [showModalEditTodo, setShowModalEditTodo] = useState(false);
  const [showModalDeleteTodo, setShowModalDeleteTodo] = useState(false);
  const [todoChoseEdit, setTodoChoseEdit] = useState({ id: "", title: "", priority: "" });
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const fetchActivityTitleAndTodoList = async () => {
      try {
        const activityDetail = await getActivityDetail(id);
        console.log(activityDetail);
        setActivityDetailName(activityDetail.data.title);
        setTodoList(activityDetail.data.todo_items);
      } catch (error) {
        console.log(error);
      }
    };

    fetchActivityTitleAndTodoList();
  }, [refresh]);

  const handleShowModalAddTodo = () => {
    setShowModalAddTodo(true);
  };
  const handleCloseModalAddTodo = () => {
    setShowModalAddTodo(false);
  };

  const handleShowModalEditTodo = (todo) => {
    console.log(todo);
    setTodoChoseEdit({ id: todo.id, title: todo.title, priority: todo.priority });
    setShowModalEditTodo(true);
  };
  const handleCloseModalEditTodo = () => {
    setShowModalEditTodo(false);
  };
  const handleShowModalDeleteTodo = (todo) => {
    console.log(todo);
    setTodoChoseEdit({ id: todo.id, title: todo.title, priority: todo.priority });
    setShowModalDeleteTodo(true);
  };
  const handleCloseModalDeleteTodo = () => {
    setShowModalDeleteTodo(false);
  };

  console.log("todoChoseEdit", todoChoseEdit);
  return (
    <>
      <div className="todolist-dashboard-container">
        <div className="todolist-dashboard-header">
          <div className="todolist-dashboard-header-left flex items-center justify-center h-fit gap-3">
            <Link to={"/"} className="h-4">
              <i className="fi fi-bs-angle-left font-bold m-0 h-0"></i>
            </Link>

            <EditTItleActivity activityDetailName={activityDetailName} setActivityDetailName={setActivityDetailName} id={id} />
          </div>
          <div className="add-todolist-dashboard-button">
            <button onClick={handleShowModalAddTodo}>+ Add Todolist</button>
          </div>
        </div>

        <TodolistComponent todoList={todoList} refresh={refresh} setRefresh={setRefresh} handleShowModalEditTodo={handleShowModalEditTodo} handleShowModalDeleteTodo={handleShowModalDeleteTodo} />
      </div>
      <TodoAdd showModalAddTodo={showModalAddTodo} handleCloseModalAddTodo={handleCloseModalAddTodo} refresh={refresh} setRefresh={setRefresh} id={id} />
      <TodoEdit showModalEditTodo={showModalEditTodo} handleCloseModalEditTodo={handleCloseModalEditTodo} todoChoseEdit={todoChoseEdit} refresh={refresh} setRefresh={setRefresh} />
      <TodoDelete todolistChoseDelete={todoChoseEdit.id} showModalDeleteTodo={showModalDeleteTodo} handleCloseModalDeleteTodo={handleCloseModalDeleteTodo} refresh={refresh} setRefresh={setRefresh} />
    </>
  );
};

export default TodoListDashboard;
