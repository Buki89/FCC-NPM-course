import React, { FC, useState } from "react";
import { Button, Input } from "../../components";
import { Form, Field } from "react-final-form";
import { Task } from "../../types";
import { v4 as uuidv4 } from "uuid";

type Value = {
  taskName: string;
};

type DashboardProps = {};

const Dashboard: FC<DashboardProps> = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  console.log("tasks", tasks);

  const onSubmit = (values: Value) => {
    const newTask: Task = {
      id: uuidv4(),
      taskName: values.taskName,
      completed: false,
      createdAt: new Date(),
    };

    const newState = [...tasks];
    newState.push(newTask);
    setTasks(newState);
  };

  return (
    <div>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field name="taskName">
              {(props) => <Input type="text" {...props} />}
            </Field>
            <Button placeholder="add task" />
          </form>
        )}
      />
      {tasks.map((task: Task) => (
        <p key={task.id}>{task.taskName}</p>
      ))}
    </div>
  );
};

export default Dashboard;
