//Formulario para mandar una tarea nueva a la lsita de JS

import { useState, useContext } from "react"; //Nos traemos el estado de react

import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const { createTask } = useContext(TaskContext);

  const [title, setTitle] = useState(""); //lo iniciamos y ponemos la variable como la que va a asignar el titulo de la nueva tarea
  const [description, setDescription] = useState(""); //lo iniciamos y ponemos la variable como la que va a asignar el titulo de la nueva tarea

  const handleSubmit = (e) => {
    //Creamos una funcion que va a almacenar el submit que pongamos en el input
    e.preventDefault(); //previene su estado por defecto con el evento e

    createTask({ title, description });

    setDescription("");
    setTitle("");
  };

  return (
    //Vamos a crear un formulario que cuando hace submit en onSubmit llama a la funcion "handleSubmit" y cuando va cambiando su valor en onChange va modificando el estado del titulo
    <div className="max-w-md mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-700 mb-4 p-10 rounded-md"
      >
        <h1 className="text-2xl font-bold  text-white mb-2">
          Crea tu tarea
        </h1>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Escribe tu tarea"
          value={title}
          autoFocus
          className="bg-slate-500 p-3 w-full mb-2 rounded-sm"
        />
        <textarea
          placeholder="Escribe la descripción de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-500 p-3 w-full mb-2 rounded-sm"
        ></textarea>
        <button className="bg-gray-400 px-3 py-1 rounded-md">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
