import { useState } from "react";

function TaskInput({ addTask }) {
  const [value, setValue] = useState("");

  const submit = () => {
    if (!value.trim()) return;
    addTask(value);
    setValue("");
  };

  return (
    <>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={submit}>Add</button>
    </>
  );
}

export default TaskInput;