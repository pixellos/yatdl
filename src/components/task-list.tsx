import React, { useCallback, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { TaskItemModel } from "../models/TaskItemModel";
import TaskItem from "./task-item";

export default () => {
  const [tasks, setTasks] = useState([] as TaskItemModel[]);
  const [newTitle, setNewTitle] = useState('Please provide task name.');
  const addTask = useCallback((x: React.MouseEvent) => setTasks(x => [...x, { label: newTitle, completed: false }]), [newTitle]);
  const onChange = useCallback((tim: TaskItemModel) => setTasks(tasks =>
    tasks.map(x => x === tim ? { ...x, completed: !x.completed } : x)
  ), [tasks]);
  const onRemove = useCallback((tim: TaskItemModel) => setTasks(tasks =>
    tasks.filter(x => x !== tim)
  ), [tasks]);

  return <div>
    {tasks.map((x, i) => <div key={i}><TaskItem tim={x} remove={onRemove} onClick={onChange} /></div>)}
    <Button onClick={addTask}>
      Add new
    </Button>
    <Form.Control plaintext defaultValue={newTitle} onChange={x => {
      return setNewTitle(() => x.target.value);
    }}></Form.Control>
  </div>;
}