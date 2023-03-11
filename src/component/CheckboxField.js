import * as React from 'react';
import {FormContext} from "./Form";

const CheckboxField = ({source, label}) => {
    const {info, onChange} = React.useContext(FormContext);

    return (
        <>
            {label}
            <input onChange={e => onChange(source)(e.target.checked)}
                   value={info[source]}
                   type="checkbox"/>
        </>
    )
}

export default CheckboxField;
