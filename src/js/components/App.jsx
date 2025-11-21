import { useState } from "react";
import "./styles.css";

const App = () => {
  const [tarea, setTarea] = useState("");
  const [lista, setLista] = useState([]);

  // Agregar tarea
  const añadirTarea = () => {
    if (tarea.trim() !== "") {
      setLista([...lista, tarea]);
      setTarea("");
    }
  };

  // Manejar Enter
  const manejarEnter = (e) => {
    if (e.key === "Enter") {
      añadirTarea();
    }
  };

  // Eliminar tarea
  const eliminarTarea = (index) => {
    setLista(lista.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1 className="title">TODOLIST</h1>

      <div className="todo-box">
        <input
          className="todo-input"
          type="text"
          placeholder="What needs to be done?"
          value={tarea}
          onChange={(e) => setTarea(e.target.value)}
          onKeyDown={manejarEnter} // <-- corregido aquí
        />

        <button className="add-btn" onClick={añadirTarea}>+</button>

        <ul className="todo-list">
          {/* Si no hay tareas */}
          {lista.length === 0 && (
            <li className="no-tasks">No hay tareas, añadir tareas</li>
          )}

          {lista.map((t, i) => (
            <li key={i} className="todo-item">
              {t}
              <button
                className="delete-btn"
                onClick={() => eliminarTarea(i)}
              >
                ✖
              </button>
            </li>
          ))}
        </ul>

        <div className="counter">
          {lista.length} item{lista.length !== 1 && "s"} left
        </div>
      </div>
    </div>
  );
};

expor
