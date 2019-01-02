import React from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
  text-align: center;
  text-transform: uppercase;
`;

const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
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

const Header = () => {
  return (
    <header>
      <Heading>Guitar Pick N Mix</Heading>
      <ButtonGroup>
        <Button color="#fafafa" bg="#47c87f">
          Pick a task
        </Button>
        <Button color="#fafafa" bg="#aa652c">List of tasks</Button>
        <Button color="#fafafa" bg="#b81313">Reset Tasks State</Button>
      </ButtonGroup>
    </header>
  );
};

export default Header;
