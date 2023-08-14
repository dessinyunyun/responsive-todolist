import React, { useState } from "react";
import "./activityAdd.css";
import { addActivity } from "../../../api/activityListApi";

export default function Modal({ showModalAddActivity, closeModalAddActivityToggle, setRefresh, refresh }) {
  const [newActivity, setNewActivity] = useState("");

  const addActivityList = async (e) => {
    e.preventDefault();

    const data = JSON.stringify({
      title: newActivity,
      email: "woberuseless@gmail.com",
    });

    try {
      await addActivity(data);
      setRefresh(!refresh);
    } catch (error) {
      console.error("Error post activity:", error);
    }

    closeModalAddActivityToggle(false);
    setNewActivity("");
  };

  const handleChangeNewActivity = (e) => {
    setNewActivity(e.target.value);
  };

  const ButtonAddActivityComponent = () => {
    return (
      <button className={newActivity.length > 0 ? "bg-sky-500 text-white" : "bg-sky-300 text-white"} onClick={addActivityList} disabled={newActivity.length <= 0}>
        Add Activity
      </button>
    );
  };

  console.log(newActivity.length);

  return (
    <>
      <div
        style={{
          opacity: !showModalAddActivity ? "0" : "1",
          transform: `translateY(${!showModalAddActivity ? "-10%" : "0%"})`,
          transition: "all 0.3s",
          visibility: !showModalAddActivity ? "hidden" : "visible",
          position: "fixed",
          zIndex: 5,
          inset: 0,
        }}
        onClick={closeModalAddActivityToggle}
      >
        <div className="modaladdactivity-container">
          <div className="modaladdactivity-content-container">
            {/*content*/}
            <div className="modaladdactivity-content" onClick={(e) => e.stopPropagation()}>
              {/*header*/}
              <div className="modaladdactivity-header">
                <h3>Add New Activity</h3>
                <button onClick={closeModalAddActivityToggle}>
                  <span>×</span>
                </button>
              </div>
              {/*body*/}
              <div className="modaladdactivity-body">
                <input type="text" id="activity-title" name="activity-title" placeholder="Enter your activity-title ..." value={newActivity} onChange={handleChangeNewActivity} />
              </div>
              {/*footer*/}
              <div className="modaladdactivity-footer">
                <ButtonAddActivityComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModalAddActivity && <div className="modaladdactivity-bg "></div>}
    </>
  );
}
