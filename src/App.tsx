import React from 'react';
import './App.css';
import TaskList from './components/task-list';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        Task List
      </header>
      <TaskList />
    </div>
  );
}

export default App;
