import React, {useState} from 'react';
import Button from './Button';
import TextField from './TextField';
import CheckboxField from './CheckboxField';

function Form() {
    const [info, setInfo] = useState({
        name: '',
        password: '',
        confirm: false,
    });

    const handleClick = () => {
        if (info.confirm) {
            alert(`name: ${info.name}, password :${info.password}`);
        }
    }

    return (
        <div style={{maxWidth: 300, display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'flex-start'}}>
            <TextField source={'name'} label="이름" setInfo={setInfo} info={info}/>
            <TextField type={'password'} source={'password'} label="비밀번호" setInfo={setInfo} info={info}/>
            <CheckboxField source={'confirm'} label="위 내용이 제출됩니다 동의하십니까?" setInfo={setInfo} info={info}/>
            <Button onClick={handleClick}>제출</Button>
        </div>
    );
}

export default Form;
