import { useState } from "react";
import "./styles.css";

export default function todo(props) {
  const [edit, setEdit] = useState(false);
  const [input, setInput] = useState();
  const [color, setColor] = useState("#021d27");
  const [completed, setCompleted] = useState(false);

  var arr;
  return (
    <li
      id="todo"
      className={completed ? "completed" : "pending"}
      style={{ backgroundColor: color }}
    >
      {edit ? (
        <>
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button
            onClick={() => {
              if (input) {
                let arr = props.list;
                arr.splice(props.idx, 1, input);
                props.setList([...arr]);
                setEdit(false);
                setColor("#021d27");
              }
            }}
          >
            Save
          </button>
          <button
            onClick={() => {
              setInput("");
              setEdit(false);
              setColor("#021d27");
            }}
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <div>
            <h5>{props.item}</h5>
          </div>
          <div>
            <button
              onClick={() => {
                arr = props.list;
                arr.splice(props.idx, 1);
                props.setList([...arr]);
              }}
            >
              Delete
            </button>
            <button
              onClick={() => {
                setInput(props.list[props.idx]);
                setEdit(true);
                setColor("#035264");
              }}
            >
              Edit
            </button>

            <button
              onClick={() => {
                let arr = props.list;
                let obj = arr.splice(props.idx, 1);
                console.log(obj);
                obj.status = "completed";
                console.log(obj);
                arr.splice(props.idx, 0, obj);
                props.setList([...arr]);
                setCompleted(!completed);
              }}
            >
              Completed
            </button>
          </div>
        </>
      )}
    </li>
  );
}
