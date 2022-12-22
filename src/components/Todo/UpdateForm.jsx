import React from "react";
import "../../App.css";
const UpdateForm = ({ updateData, changeHolder, updateTask, cancelUpdate }) => {
  return (
    <>
      <div className="row mainToDo">
        <div className="col">
          <input
            value={updateData && updateData.title}
            onChange={(e) => changeHolder(e)}
            className="form-control form-control-lg inputBar"
            placeholder="Update Task"
          />
        </div>
        <div className="col-auto">
          <button
            onClick={updateTask}
            className="btn btn-lg btn-success  addTaskButton"
          >
            Update
          </button>
          <button
            onClick={cancelUpdate}
            className="btn btn-lg btn-danger editTaskButton"
          >
            Cancel
          </button>
        </div>
      </div>
      <br />
    </>
  );
};

export default UpdateForm;
