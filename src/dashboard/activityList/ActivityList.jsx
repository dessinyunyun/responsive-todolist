import React, { useEffect, useState } from "react";
import "./activity-list.css";
import { Link } from "react-router-dom";
import { getActivity } from "../../../api/activityListApi";
import moment from "moment/moment";

const ActivityList = ({ refresh, showModalDeleteActivityToggle, setActivityChoseDelete }) => {
  const [activity, setActivity] = useState([]);
  useEffect(() => {
    const getActivityList = async () => {
      try {
        const actityCall = await getActivity("woberuseless@gmail.com");
        setActivity(actityCall.data.data);
      } catch (error) {
        console.error("Error fetching activity:", error);
      }
    };
    getActivityList();
  }, [refresh]);

  const handleDeleteButton = (idActivity) => {
    setActivityChoseDelete(idActivity);
    showModalDeleteActivityToggle();
  };

  return (
    <div className="activity-list-container">
      {activity.map((act) => {
        return (
          <div className="activity-list-card" key={act.id}>
            <Link to={`todolist/${act.id}`} className="h-full">
              <div className="activity-list-title">
                <h2>{act.title}</h2>
              </div>
            </Link>
            <div className="activity-list-footer">
              <p>{moment(act.created_at).format("D MMMM yy")}</p>
              <i className="fi fi-rs-trash fs-5 text-muted cursor-pointer" onClick={() => handleDeleteButton(act.id)}></i>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ActivityList;
