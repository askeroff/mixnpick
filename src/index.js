import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import Header from './Header';
import TasksList from './TasksList';
import SingleTask from './SingleTask';
import styled, { createGlobalStyle } from 'styled-components';
import dataManager from './data-manager';
import About from './About';

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Arimo');
    font-family: 'Arimo', sans-serif;
    background: rgb(223, 231, 239);
    font-size: 16px;
    line-height: 1.2em;
    color: #333;
  }
`;

const MyDiv = styled.div`
  max-width: 640px;
  margin: 20px auto;
  border-radius: 10px;
  padding: 10px;
`;

function App() {
  const [page, setPage] = useState('list');
  const [task, setTask] = useState(null);
  const [tasks, setTasks] = useState(dataManager.get('tasks'));

  const updateTasks = () => {
    const list = dataManager.get('tasks');
    setTasks(list);
  };

  const showPage = page => {
    if (page === 'list') {
      return (
        <TasksList
          tasks={tasks}
          updateTasks={updateTasks}
          setPage={setPage}
          page={page}
        />
      );
    } else if (page === 'single') {
      return <SingleTask task={task} />;
    } else if (page === 'about') {
      return <About />;
    }
  };

  useEffect(
    () => {
      updateTasks();
    },
    [page]
  );

  return (
    <MyDiv>
      <GlobalStyles />
      <Header
        updateTasks={updateTasks}
        setTask={setTask}
        setPage={setPage}
        page={page}
      />
      {showPage(page)}
    </MyDiv>
  );
}

render(<App />, document.getElementById('app'));
