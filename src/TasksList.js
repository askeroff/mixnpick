import React, { useState } from 'react';
import dataManager from './data-manager';
import AddTask from './AddTask';
import styled from 'styled-components';

const Li = styled.li`
  list-style: none;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  color: #333;
  display: flex;
  justify-content: space-between;
  background: ${props => {
    if (props.state === 'onhold') return '#ccc';
    if (props.state === 'done') return '#47c87f';
    return '#fff';
  }};
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
    const holdString =
      item.state === 'onhold' || item.state === 'done' ? 'To Do' : 'On Hold';
    return (
      <Li state={item.state} key={item.id}>
        {item.title}
        <div>
          <span onClick={props.toggleHold.bind(null, item.id, props.list)}>
            {holdString} |{' '}
          </span>
          <span onClick={props.deleteTask.bind(null, item.id)}>Delete</span>
        </div>
      </Li>
    );
  });
};

function TasksList(props) {
  const deleteTask = id => {
    dataManager.delete('tasks', id);
    props.updateTasks();
  };

  const toggleHold = (id, tasks) => {
    const found = tasks.find(item => item.id === id);
    if (found && (found.state === 'onhold' || found.state === 'done')) {
      found.state = 'todo';
    } else {
      found.state = 'onhold';
    }
    dataManager.update('tasks', id, found);
    props.updateTasks();
  };

  return (
    <div>
      <AddTask updateTasks={props.updateTasks} />
      <Ul>
        <Tasks
          toggleHold={toggleHold}
          deleteTask={deleteTask}
          list={props.tasks}
        />
      </Ul>
    </div>
  );
}

export default TasksList;
