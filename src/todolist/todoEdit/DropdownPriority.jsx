import React, { useState } from "react";
import "./drop-down-priority.css";
const DropdownPriority = ({ newTodo, setNewTodo }) => {
  const [showPrioritySelect, setShowPrioritySelect] = useState(false);

  const handleShowPriority = () => {
    setShowPrioritySelect(!showPrioritySelect);
  };

  const colorItem = (priority) => {
    switch (priority) {
      case "high":
        return "text-red-600";
      case "normal":
        return "text-green-600";
      case "low":
        return "text-purple-600";
      default:
        return "text-green-600";
    }
  };

  const handlePriority = (priority) => {
    setNewTodo((prev) => ({
      ...prev,
      priority,
    }));
    handleShowPriority();
  };

  const priorityList = ["high", "normal", "low"];
  console.log(newTodo);
  return (
    <div className="relative">
      <div className="dd-select" onClick={handleShowPriority}>
        <div className={`dd-select-inside ${colorItem(newTodo.priority)}`}>
          <i className="fi fi-ss-circle label-indicator mr-1 text-lg"></i>
          <p className="ml-1">{newTodo.priority}</p>
        </div>
        <i className="fi fi-rs-angle-small-down self-center"></i>
      </div>
      {showPrioritySelect && (
        <div className="priority-select mt-2">
          <ul>
            {priorityList.map((pl, i) => {
              return (
                <li key={i} className="">
                  <div className={`dd-list ${colorItem(`${pl}`)}`} onClick={() => handlePriority(`${pl}`)}>
                    <i className={`fi fi-ss-circle label-indicator mr-1  ${colorItem(`${pl}`)} text-lg`}></i> {pl}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownPriority;
