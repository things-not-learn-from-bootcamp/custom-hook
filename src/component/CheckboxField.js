import * as React from 'react';

const CheckboxField = ({source, label, setInfo, info}) => {
    const handleInput = (e) => {
        const input = e.target.checked;

        setInfo((prev) => {
            let returnObject = prev;
            returnObject[source] = input;
            return returnObject;
        });
    }

    return (
        <>
            {label}
            <input onChange={handleInput}
                   value={info.label}
                   type="checkbox"/>
        </>
    )
}

export default CheckboxField;
