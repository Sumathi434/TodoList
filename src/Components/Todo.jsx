import React, { useEffect, useRef, useState } from "react";
import Todolist from "./Todolist";

function Todo() {
  const [todoList, setTodoList] = useState(localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")) : []);
  const inputRef = useRef();

 
  const add = () => {
    const inputText = inputRef.current.value.trim();

    if (inputText === "") {
     return null;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = ""; 
  };

  
  const Deletetodo = (id) => {
    setTodoList((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
  };

 
  const toggle = (id) => {
    setTodoList((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  };

  useEffect(() => {
    console.log("todoList updated:", todoList);
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <>
      <div className="container">
        <h2>Todo List</h2>
        <div className="inputfield">
          <input ref={inputRef} type="text" placeholder="Enter" />
          <button className="add" onClick={add}>
            ADD
          </button>
        </div>
        {todoList.length > 0 ? (
          todoList.map((item) => (
            <Todolist
              key={item.id} 
              id={item.id}
              text={item.text}
              isComplete={item.isComplete}
              Deletetodo={Deletetodo}
              toggle={toggle}
            />
          ))
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default Todo;
