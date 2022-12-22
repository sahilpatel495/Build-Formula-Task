import React, { useState } from "react";
import "../../App.css";
import AddTaskForm from "./AddTaskForm";
import ToDo from "./ToDo";
import UpdateForm from "./UpdateForm";

const ToDoTask = () => {
  const [toDo, setToDo] = useState([
    { id: 1, title: "Task1", status: false },
    { id: 2, title: "Task2", status: false },
  ]);

  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");

  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      setToDo([...toDo, { id: num, title: newTask, status: false }]);

      setNewTask("");
    }
  };

  const deleteTask = (id) => {
    setToDo(toDo.filter((task) => task.id !== id));
  };

  const markDone = (id) => {
    setToDo(
      toDo.map((task) =>
        task.id === id ? { ...task, status: !task.status } : task
      )
    );
  };

  const cancelUpdate = () => {
    setUpdateData("");
  };

  const changeHolder = (e) => {
    setUpdateData({ ...updateData, title: e.target.value });
  };

  const updateTask = () => {
    let removeOldRecord = [...toDo].filter((task) => task.id !== updateData.id);
    setToDo([...removeOldRecord, updateData]);
    setUpdateData("");
  };

  return (
    <>
      <div className="wrapper">
        <div className="title">
          <div> To Do List</div>
        </div>

        <div className="">
          {updateData && updateData ? (
            <UpdateForm
              updateData={updateData}
              changeHolder={changeHolder}
              updateTask={updateTask}
              cancelUpdate={cancelUpdate}
            />
          ) : (
            <AddTaskForm
              newTask={newTask}
              setNewTask={setNewTask}
              addTask={addTask}
            />
          )}
        </div>

        {toDo && toDo.length ? "" : "No Tasks..."}

        <ToDo
          toDo={toDo}
          markDone={markDone}
          setUpdateData={setUpdateData}
          deleteTask={deleteTask}
        />
      </div>
    </>
  );
};

export default ToDoTask;
