import React from "react";
import Task from "./Task";

const Tasks = ({ allTasks }) => {
  return (
    <>
      {allTasks.map((task, index) => {
        return (
          <Task
            text={task.text}
            time={task.time}
            key={index}
            reminder={task.reminder}
          />
        );
      })}
    </>
  );
};

export default Tasks;
