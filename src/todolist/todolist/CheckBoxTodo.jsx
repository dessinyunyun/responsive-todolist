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

  return <input type="checkbox" name="" id="" defaultChecked={chekList} onChange={handleChekTodo} />;
};

export default CheckBoxTodo;
