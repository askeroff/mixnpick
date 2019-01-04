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
  background: ${props => (props.done ? '#47c87f' : '#fff')};
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
    const holdString = item.state === 'onhold' ? 'To Do' : 'On Hold';
    return (
      <Li done={item.state === 'done'} key={item.id}>
        {item.title}
        <div>
          {item.state !== 'done' ? (
            <span onClick={props.toggleHold.bind(null, item.id, props.list)}>
              {holdString} | {" "}
            </span>
          ) : null}
          <span onClick={props.deleteTask.bind(null, item.id)}>Delete</span>
        </div>
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

  const toggleHold = (id, tasks) => {
    const found = tasks.find(item => item.id === id);
    if (found && found.state !== 'onhold') {
      found.state = 'onhold';
    } else if (found && found.state === 'onhold') {
      found.state = 'todo';
    }
    dataManager.update('tasks', id, found);
    updateTasks();
  };

  return (
    <div>
      <AddTask updateTasks={updateTasks} />
      <Ul>
        <Tasks toggleHold={toggleHold} deleteTask={deleteTask} list={tasks} />
      </Ul>
    </div>
  );
}

export default TasksList;
