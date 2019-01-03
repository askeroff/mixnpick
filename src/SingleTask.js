import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  background: #fafafa;
  border: 2px solid #ededed;
  margin-top: 10px;
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
`;

function SingleTask(props) {
  return (
    <Div>
      <Title>{props.task.title}</Title>
    </Div>
  );
}

export default SingleTask;
