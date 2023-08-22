import TaskCard from "./TaskCard";

import { useContext } from "react";

import { TaskContext } from "../context/TaskContext";

function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    //validamos que no  esté vacío
    return <h1 className="text-white font-bold text-center text-4xl">No hay tareas aún</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
