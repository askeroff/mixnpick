import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import dataManager from './data-manager';

const Button = styled.button`
  background: #fafafa;
  border: 1px solid #ccc;
  padding: 6px;
  text-align: center;

  :hover {
    cursor: pointer;
  }

  :focus {
    outline: 0;
  }
`;

const Input = styled.input`
  background: #fafafa;
  border: 1px solid #ccc;
  padding: 6px;
  :focus {
    outline: 0;
  }
`;

const MainDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 10px 0;
`;

export const Title = styled.h2`
  text-align: center;
  color: ${props => (props.done ? '#47c87f' : '#333')};
  grid-column: 1/-1;
`;

function getSecondsDiff(date) {
  const now = new Date().getTime();
  return parseInt((now - date) / 1000, 10);
}

function howMuchLeft(passed, timer) {
  const seconds = timer * 60;
  return seconds - passed;
}

function formatForTimer(number) {
  const secNum = parseInt(number, 10);
  let hours = Math.floor(secNum / 3600);
  let minutes = Math.floor((secNum - hours * 3600) / 60);
  let seconds = secNum - hours * 3600 - minutes * 60;
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  if (hours < 1) {
    return `${minutes}:${seconds}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  return `${hours}:${minutes}:${seconds}`;
}

function Timer(props) {
  const [timer, setTimer] = useState({
    id: null,
    seconds: 0,
    started: new Date().getTime()
  });

  const [minutes, setMinutes] = useState(5);

  const [finished, setFinished] = useState(false);

  const incrementSeconds = () => {
    setTimer(prevState => {
      return { ...prevState, seconds: getSecondsDiff(prevState.started) };
    });
  };

  useEffect(() => {
    const left = howMuchLeft(timer.seconds, minutes);
    if (left < 1) {
      clearInterval(timer.id);
      setTimer(timer => ({ ...timer, id: null, seconds: 0 }));
      const done = { ...props.task, state: 'done' };
      dataManager.update('tasks', props.task.id, done);
      setFinished(true);
      return;
    }
  });

  useEffect(
    () => {
      setFinished(false);
    },
    [props.task]
  );

  const start = () => {
    if (!timer.id) {
      const started = new Date().getTime();
      const id = setInterval(incrementSeconds, 1000);
      setFinished(false);
      setTimer(() => ({
        id,
        seconds: 0,
        started
      }));
    }
  };

  const stop = () => {
    clearInterval(timer.id);
    setTimer(timer => ({ ...timer, id: null, seconds: 0 }));
  };

  const changeMinutes = e => {
    const value = e.currentTarget.value;
    if (+value >= 1) {
      setMinutes(value);
    }
  };

  return (
    <MainDiv>
      <Button disabled={finished} onClick={start}>
        Start!
      </Button>
      <Button disabled={finished} onClick={stop}>
        Stop
      </Button>
      <Input type="number" value={minutes} onChange={changeMinutes} />
      <Title done={finished}>
        {finished
          ? 'Done'
          : formatForTimer(howMuchLeft(timer.seconds, minutes))}
      </Title>
    </MainDiv>
  );
}

export default Timer;
