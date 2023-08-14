import React from "react";
import "./activity-delete.css";
import { deleteActivity } from "../../../api/activityListApi";

const ActivityDelete = ({ showModalDeleteActivity, closeModalDeleteActivityToggle, activityChoseDelete, setRefresh, refresh }) => {
  console.log(activityChoseDelete);
  const handleDeleteActivity = async (e) => {
    try {
      const tes = await deleteActivity(activityChoseDelete);
      console.log(tes);
      console.log("berhasi;");
    } catch (error) {
      console.error("Error Delete activity:", error);
    }
    setRefresh(!refresh);
    closeModalDeleteActivityToggle();
  };

  return (
    <>
      <div
        style={{
          opacity: !showModalDeleteActivity ? "0" : "1",
          transform: `translateY(${!showModalDeleteActivity ? "-10%" : "0%"})`,
          transition: "all 0.3s",
          visibility: !showModalDeleteActivity ? "hidden" : "visible",
          position: "fixed",
          zIndex: 5,
          inset: 0,
        }}
        onClick={closeModalDeleteActivityToggle}
      >
        <div className="modalDeleteactivity-container">
          <div className="modalDeleteactivity-content-container">
            {/*content*/}
            <div className="modalDeleteactivity-content" onClick={(e) => e.stopPropagation()}>
              {/*header*/}
              {/* <div className="modalDeleteactivity-header">
                <h3>Delete Activity</h3>
                <button onClick={closeModalDeleteActivityToggle}>
                  <span>×</span>
                </button>
              </div> */}
              {/*body*/}
              <div className="modalDeleteactivity-body">
                <i class="fi fi-ss-triangle-warning"></i>
                <p>Delete Activity?</p>
              </div>
              {/*footer*/}
              <div className="modalDeleteactivity-footer">
                <button className="bg-stone-300 text-zinc-500" onClick={closeModalDeleteActivityToggle}>
                  Close
                </button>
                <button className="bg-red-500 text-white" onClick={handleDeleteActivity}>
                  Delete Activity
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModalDeleteActivity && <div className="modalDeleteactivity-bg "></div>}
    </>
  );
};

export default ActivityDelete;
