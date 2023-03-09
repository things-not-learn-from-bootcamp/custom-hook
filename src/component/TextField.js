import React from 'react';

function TextField({source, label, setInfo, info, type}) {
    return (
        <>
            {label}
            <input onChange={e => setInfo(source)(e.target.value)}
            value={info.label}
            type={type ? type :'text'}/>
        </>
    )
}

export default TextField;
