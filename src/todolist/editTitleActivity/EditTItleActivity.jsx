import React, { useState } from "react";
import { editTitleActivity } from "../../../api/activityListApi";
import "./edit-title-activity.css";

const EditTItleActivity = ({ activityDetailName, setActivityDetailName, id }) => {
  const [activityDetailNameEdit, setActivityDetailNameEdit] = useState(false);

  const handleActivityDetailName = (e) => {
    setActivityDetailName(e.target.value);
  };

  const saveActivityDetailNameChange = async (e) => {
    e.preventDefault();
    try {
      const data = {
        activityId: id,
        title: activityDetailName,
      };
      const tes = await editTitleActivity(data);
    } catch (error) {
      console.log(error);
    }
    setActivityDetailNameEdit(false);
  };

  return (
    <div className="title-edit-activity-container">
      {activityDetailNameEdit ? (
        <>
          <input type="text" autoFocus className="input-edit-title-activity" value={activityDetailName} onChange={handleActivityDetailName} />
          <i className="fi fi-rs-check" style={{ cursor: "pointer" }} onClick={saveActivityDetailNameChange}></i>
        </>
      ) : (
        <p onClick={() => setActivityDetailNameEdit(true)}>{activityDetailName}</p>
      )}
    </div>
  );
};

export default EditTItleActivity;
