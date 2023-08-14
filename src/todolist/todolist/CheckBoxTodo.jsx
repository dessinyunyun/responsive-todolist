import React, { useState } from "react";
import { chekListTodo } from "../../../api/todoListApi";

const CheckBoxTodo = ({ todo, refresh, setRefresh }) => {
  const [chekList, setCheckList] = useState(todo.is_active == 1 ? false : true);
  const handleChekTodo = async (e) => {
    // e.preventDefault();
    setCheckList(!chekList);
    const data = {
      is_active: chekList,
      todoId: todo.id,
    };
    console.log(data);
    try {
      const tes = await chekListTodo(data);
      console.log(tes);
      setRefresh(!refresh);
    } catch (error) {
      console.log(error);
    }
  };

  return <input type="checkbox" name="" id="" defaultChecked={chekList} onChange={handleChekTodo} className="w-5 h-5 text-sky-500 border rounded focus:ring focus:ring-opacity-50 focus:ring-sky-500 focus:border-sky-500 outline-none" />;
};

export default CheckBoxTodo;
