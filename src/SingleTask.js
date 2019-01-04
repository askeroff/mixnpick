import React from 'react';
import styled from 'styled-components';
import Timer from './Timer';

const Div = styled.div`
  background: #fafafa;
  border: 2px solid #ededed;
  margin-top: 10px;
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
`;

const Description = styled.p`
  padding: 10px;
  color: #333;
`;

function SingleTask(props) {
  if (!props.task) {
    return (
      <Div>
        <Title>Nothing Left</Title>
        <Description>
          Either all tasks are done, or there are none. If all are done, you can
          reset the the state with the button above. If none were added you can
          add some.
        </Description>
      </Div>
    );
  }
  return (
    <Div>
      <Title>{props.task.title}</Title>
      <Timer task={props.task} />
    </Div>
  );
}

export default SingleTask;
