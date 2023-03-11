import React, {createContext, useState} from 'react';
import Button from './Button';
import TextField from './TextField';
import CheckboxField from './CheckboxField';

export const FormContext = createContext({
    name: '',
    password: '',
    confirm: false,
    onChange: () => {},
})

function Form() {
    const [info, setInfo] = useState({
        name: '',
        password: '',
        confirm: false,
    });

    const handleClick = () => {
        if (info.confirm) {
            console.log("-> info", info);
            alert(`name: ${info.name}, password :${info.password}`);
        }
    }

    const onChange = (source) => (value) => {
        setInfo({
            ...info,
            [source]: value,
        })
    }

    return (
        <FormContext.Provider value={{info, onChange}}>
            <div style={{maxWidth: 300, display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'flex-start'}}>
                <TextField source={'name'} label="이름" />
                <TextField type={'password'} source={'password'} label="비밀번호" />
                <CheckboxField source={'confirm'} label="위 내용이 제출됩니다 동의하십니까?" />
                <Button onClick={handleClick}>제출</Button>
            </div>
        </FormContext.Provider>
    );
}

export default Form;
