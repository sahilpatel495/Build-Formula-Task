import React from "react";
import "../../App.css";

const AddTaskForm = ({ newTask, setNewTask, addTask }) => {
  return (
    <>
      <div className="row mainToDo">
        <div className="col">
          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="form-control form-control-lg inputBar"
            placeholder="Add Task"
          />
        </div>
        <div className="col-auto">
          <button
            onClick={addTask}
            className="btn btn-lg btn-success addTaskButton"
          >
            Add Task
          </button>
        </div>
      </div>
      <br />
    </>
  );
};

export default AddTaskForm;
