import { useState, useEffect } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

function TaskManager() {
  const [tasks, setTasks] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) setTasks(savedTasks);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    setTasks(prev => [
      ...prev,
      { id: Date.now(), text, completed: false }
    ]);
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const editTask = (id, newText) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  };

  return (
    <div style={{ width: "350px", margin: "20px auto" }}>
      <h3>Task Manager</h3>

      <TaskInput addTask={addTask} />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
        editTask={editTask}
      />
    </div>
  );
}

export default TaskManager;