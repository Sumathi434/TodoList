import React from "react";
import Delete from "../assets/delete.png";

function Todolist({ id, text, Deletetodo, toggle, isComplete }) {
  return (
    <div>
      <div className={`TODO ${isComplete ? "completed" : ""}`}>
        <p
          className={`TodoItems ${isComplete ? "completed" : " "}`}
          onClick={() => toggle(id)}
        >
          {text}
        </p>
        <img onClick={() => Deletetodo(id)} src={Delete} alt="delete" />
      </div>
    </div>
  );
}

export default Todolist;
