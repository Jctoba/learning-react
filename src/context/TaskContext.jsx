import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/task"; //Traemos el listado desde una lista de JS

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]); //Iniciamos el estado llamando la variable tasks

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    //Iniciamos un efecto que soluciona el error que tira al estar vacío el estado
    setTasks(data); //Cuando inicie este efecto llenar el arreglo con lo que nos trajimos como data
  }, []);

  return (
    <TaskContext.Provider value={{ tasks, deleteTask, createTask }}>
      {props.children}
    </TaskContext.Provider>
  );
}
