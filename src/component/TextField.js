import React from 'react';

function TextField({source, label, setInfo, info, type}) {
    const handleInput = (e) =>{
        const input = e.target.value;
        if (input !== undefined && input.length > 10) {
            return;
        }
        setInfo((prev)=>{
            let returnObject=prev;
            returnObject[source] = e.target.value;
            return returnObject;
        });
    }

    return (
        <>
            {label}
            <input onChange={handleInput}
            value={info.label}
            type={type ? type :'text'}/>

        </>
    )
}

export default TextField;
