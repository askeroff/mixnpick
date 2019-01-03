import React, { useState } from 'react';
import { render } from 'react-dom';
import Header from './Header';
import TasksList from './TasksList';
import SingleTask from './SingleTask';
import styled from 'styled-components';

const MyDiv = styled.div`
  max-width: 640px;
  margin: 20px auto;
  border-radius: 10px;
  padding: 10px;
`;

function App() {
  const [page, setPage] = useState('list');
  const [task, setTask] = useState(null);

  return (
    <MyDiv>
      <Header setTask={setTask} setPage={setPage} page={page} />
      {page === 'list' ? (
        <TasksList setPage={setPage} page={page} />
      ) : (
        <SingleTask task={task} />
      )}
    </MyDiv>
  );
}

render(<App />, document.getElementById('app'));

/*
  ? ToDo Section that has a list of tasks
  ? Done List that has a list of done tasks
  ? We need a timer
  ? Need to randomly pick a task
  ? After time gone off put that task into done list
  ? Reset button to make all tasks undone
  ? Delete button
*/
