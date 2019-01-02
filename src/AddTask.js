import React, { useState } from 'react';
import dataManager from './data-manager';
import styled from 'styled-components';

const Div = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin-top: 5px;
  
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;

  :focus {
    outline: 0;
  }
`;

const Button = styled.button`
  padding: 10px;
  border: 1px solid #ccc;
  background: #fafafa;

  :focus {
    outline: 0;
  }

  :hover {
    cursor: pointer;
  }
`;

function AddTask(props) {
  const [value, setValue] = useState('');

  const onChangeHandler = e => {
    setValue(e.target.value);
  };

  const add = () => {
    // const data = dataManager.get('tasks');
    const newItem = {
      title: value,
      id: Date.now(),
      state: 'todo'
    };
    dataManager.add('tasks', newItem);
    setValue('');
    props.updateTasks();
  };

  return (
    <Div>
      <Input
        placeholder="New Task Name"
        onChange={onChangeHandler}
        value={value}
        type="text"
      />
      <Button onClick={add}>Add</Button>
    </Div>
  );
}

export default AddTask;
