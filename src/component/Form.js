import React, { useState } from 'react';
import Button from './Button';
import TextField from './TextField';

function Form(){

  const [info, setInfo] = useState({
    name:'',
    password:''
  });

  const handleClick = () =>{
    alert(`name: ${info.name}, password :${info.password}`);
  }

  return (
    <>
      <TextField label="name" setInfo={setInfo} info={info}/>
      <TextField label="password" setInfo={setInfo} info={info} />
      <Button onClick={handleClick}>submit </Button>
    </>
  );
}

export default Form;