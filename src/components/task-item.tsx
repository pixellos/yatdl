import { FormLabel, FormCheck, Button } from "react-bootstrap";
import { TaskItemModel } from "../models/TaskItemModel";

export default (props: { tim: TaskItemModel, onClick: (tim: TaskItemModel) => void, remove: (tim: TaskItemModel) => void }) =>
  <div onClick={() => props.onClick(props.tim)} style={{ display: 'flex', justifyContent: 'center' }}>
    <FormCheck checked={props.tim.completed}>
    </FormCheck>
    <FormLabel style={{ textDecoration: props.tim.completed ? 'line-through' : '' }}>
      {props.tim.label}
    </FormLabel>
    <Button onClick={x => props.remove(props.tim)}>
      <span aria-hidden="true">&times;</span>
    </Button>
  </div> 