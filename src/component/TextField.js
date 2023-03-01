import React from 'react';

function TextField({label, setInfo, info}) {

    const handleInput = (e) =>{
        setInfo((prev)=>{
            let returnObject=prev;
            returnObject[label] = e.target.value;
            return returnObject;
        });
    }
    return (
        <>
            {label}
            <input onChange={handleInput} 
            value={info.label}
            type={label === 'password' ? 'password' : 'text'}/>
       
        </>
    )
}

export default TextField;