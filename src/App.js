import { useState } from "react";
import React from "react";
import "./styles.css";
import Todo from "./Todo";

export default function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  function add() {
    setList([...list, input]);
    setInput("");
  }

  return (
    <>
      <div id="heading">
        <h1> To-Do List </h1>

        <input
          placeholder="Add Todo"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          onClick={() => {
            if (input) {
              add();
            }
          }}
        >
          Add
        </button>
        <h6>By Jivan Bhamburkar</h6>
      </div>
      <div id="body">
        <ul>
          {list.map((item, idx) => {
            return <Todo item={item} idx={idx} list={list} setList={setList} />;
          })}
        </ul>
      </div>
    </>
  );
}
