import { useState } from "react";

function TaskItem({ task, deleteTask, toggleComplete, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(task.text);

  const saveEdit = () => {
    editTask(task.id, text);
    setIsEditing(false);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
      />

      {isEditing ? (
        <>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={saveEdit}>Save</button>
        </>
      ) : (
        <span
          style={{
            textDecoration: task.completed ? "line-through" : "none"
          }}
        >
          {task.text}
        </span>
      )}

      <button onClick={() => setIsEditing(true)}>Edit</button>
      <button onClick={() => deleteTask(task.id)}>❌</button>
    </li>
  );
}

export default TaskItem;