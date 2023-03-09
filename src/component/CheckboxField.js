import * as React from 'react';

const CheckboxField = ({source, label, setInfo, info}) => {
    return (
        <>
            {label}
            <input onChange={e => setInfo(source)(e.target.checked)}
                   value={info.label}
                   type="checkbox"/>
        </>
    )
}

export default CheckboxField;
