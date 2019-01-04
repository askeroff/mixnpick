import React from 'react';
import styled from 'styled-components';
import Timer from './Timer';

const Div = styled.div`
  background: #fafafa;
  border: 2px solid #ededed;
  margin-top: 10px;
`;

export const Title = styled.h2`
  text-align: center;
  color: #333;
`;

function SingleTask(props) {
  // TODO: why it comes here as null
  if (!props.task) return null;
  return (
    <Div>
      <Title>{props.task.title}</Title>
      <Timer />
    </Div>
  );
}

export default SingleTask;
