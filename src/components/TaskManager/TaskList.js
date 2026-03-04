import TaskItem from "./TaskItem";

function TaskList({ tasks, deleteTask, toggleComplete, editTask }) {
  return (
    <ul className="taskManager">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
          editTask={editTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;