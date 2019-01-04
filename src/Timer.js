import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

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
  color: #333;
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
  const time = `${minutes}:${seconds}`;
  return time;
}

function Timer() {
  const [timer, setTimer] = useState({
    id: null,
    seconds: 0,
    started: new Date().getTime()
  });

  const [minutes, setMinutes] = useState(5);

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
      return;
    }
  });

  const start = () => {
    if (!timer.id) {
      const started = new Date().getTime();
      const id = setInterval(incrementSeconds, 1000);
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

  return (
    <MainDiv>
      <Button onClick={start}>Start!</Button>
      <Button onClick={stop}>Stop</Button>
      <Input
        type="text"
        value={minutes}
        onChange={e => setMinutes(e.currentTarget.value)}
      />
      <Title>{formatForTimer(howMuchLeft(timer.seconds, minutes))}</Title>
    </MainDiv>
  );
}

export default Timer;
