import React, { useState } from 'react';
import dataManager from './data-manager';
import AddTask from './AddTask';
import styled from 'styled-components';

const Li = styled.li`
  list-style: none;
  margin: 10px 0;
  padding: 5px;
  border: 1px solid #ccc;
  color: #333;
  display: flex;
  justify-content: space-between;

  span:hover {
    cursor: pointer;
  }
`;

const Ul = styled.ul`
  margin: 0;
  padding: 0;
`;

const Tasks = props => {
  return props.list.map(item => {
    return (
      <Li key={item.id}>
        {item.title}
        <span onClick={props.deleteTask.bind(null, item.id)}>Delete</span>
      </Li>
    );
  });
};

function TasksList() {
  const [tasks, setTasks] = useState(dataManager.get('tasks'));

  const updateTasks = () => {
    const list = dataManager.get('tasks');
    setTasks(list);
  };

  const deleteTask = id => {
    dataManager.delete('tasks', id);
    updateTasks();
  };

  return (
    <div>
      <AddTask updateTasks={updateTasks} />
      <Ul>
        <Tasks deleteTask={deleteTask} list={tasks} />
      </Ul>
    </div>
  );
}

export default TasksList;
