import React, { useEffect, useState } from "react";
import "./dashboard.css";
import ActivityList from "./activityList/ActivityList";
import ActivityAdd from "./activityAdd/ActivityAdd";
import ActivityDelete from "./activityDelete/ActivityDelete";

const App = () => {
  const [showModalAddActivity, setShowModalAddActivity] = React.useState(false);
  const [activityChoseDelete, setActivityChoseDelete] = React.useState(true);

  const [refresh, setRefresh] = useState(false);

  const showModalAddActivityToggle = () => {
    setShowModalAddActivity(true);
  };
  const closeModalAddActivityToggle = () => {
    setShowModalAddActivity(false);
  };

  const [showModalDeleteActivity, setShowModalDeleteActivity] = React.useState(false);
  const showModalDeleteActivityToggle = () => {
    setShowModalDeleteActivity(true);
  };
  const closeModalDeleteActivityToggle = () => {
    setShowModalDeleteActivity(false);
  };
  console.log(refresh);
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div className="title">Activity</div>
        <div className="add-activity-button">
          <button onClick={showModalAddActivityToggle}>+ Add Activity</button>
        </div>
      </div>

      <ActivityList refresh={refresh} showModalDeleteActivityToggle={showModalDeleteActivityToggle} setActivityChoseDelete={setActivityChoseDelete} />
      <ActivityAdd showModalAddActivity={showModalAddActivity} setShowModalAddActivity={setShowModalAddActivity} closeModalAddActivityToggle={closeModalAddActivityToggle} setRefresh={setRefresh} refresh={refresh} />
      <ActivityDelete showModalDeleteActivity={showModalDeleteActivity} closeModalDeleteActivityToggle={closeModalDeleteActivityToggle} activityChoseDelete={activityChoseDelete} setRefresh={setRefresh} refresh={refresh} />
    </div>
  );
};

export default App;
