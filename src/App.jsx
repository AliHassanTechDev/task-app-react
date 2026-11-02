import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([])
  const [text, setText] = useState('')

  function addTask() {
    if (text.trim() === '') return
    setTasks([...tasks, { id: Date.now(), title: text, completed: false }])
    setText('')
  }

  function completeTask(id) {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: true } : t)))
  }

  function deleteTask(id) {
    setTasks(tasks.filter((t) => t.id !== id))
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>My Tasks</h1>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              onClick={() => completeTask(task.id)}
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
                cursor: 'pointer',
              }}
            >
              {task.title} {task.completed && '✅'}
            </span>
            <button
              onClick={() => deleteTask(task.id)}
              style={{ marginLeft: '10px' }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App