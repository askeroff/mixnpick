import React from 'react';
import styled from 'styled-components';
import dataManager from './data-manager';

const Heading = styled.h1`
  text-align: center;
  text-transform: uppercase;
`;

const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const About = styled.span`
  font-size: 16px;
  color: #42a3c7;
  font-style: italic;
  padding-left: 10px;
  :hover {
    cursor: pointer;
  }
`;

const Button = styled.button`
  border: 1px solid #fafafa;
  color: ${props => props.color || '#333'};
  background: ${props => props.bg || '#fafafa'};
  padding: 10px;

  :hover {
    cursor: pointer;
  }
  :focus {
    outline: 0;
  }
`;

function generateRandomNumber(min, max) {
  let random_number = Math.random() * (max - min) + min;
  return Math.floor(random_number);
}

function Header(props) {
  const pickATask = () => {
    const data = dataManager.get('tasks').filter(item => item.state === 'todo');
    const nextElem = data[generateRandomNumber(0, data.length)];

    props.setTask(nextElem);
    props.setPage('single');
  };

  const reset = () => {
    const data = dataManager
      .get('tasks')
      .map(item => ({ ...item, state: 'todo' }));
    dataManager.set('tasks', data);
    props.updateTasks();
  };
  
  const showAbout = () => {
    props.setPage('about');
  }

  return (
    <header>
      <Heading>
        Guitar Pick N Mix
        <About title="About The App" onClick={showAbout}>(?)</About>
      </Heading>
      <ButtonGroup>
        <Button onClick={pickATask} color="#fafafa" bg="#47c87f">
          Pick a task
        </Button>
        <Button
          onClick={() => props.setPage('list')}
          color="#fafafa"
          bg="#42a3c7"
        >
          List of tasks
        </Button>
        <Button onClick={reset} color="#fafafa" bg="#b81313">
          Reset Tasks State
        </Button>
      </ButtonGroup>
    </header>
  );
}

export default Header;
