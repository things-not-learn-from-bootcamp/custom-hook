import React from 'react';
import {FormContext} from "./Form";

function TextField({source, label, type}) {
    const {info, onChange} = React.useContext(FormContext);

    return (
        <>
            {label}
            <input onChange={e => onChange(source)(e.target.value)}
            value={info.label}
            type={type ? type :'text'}/>
        </>
    )
}

export default TextField;
