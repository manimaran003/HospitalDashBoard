import React from 'react'
import InputComponent from './InputComponent'
import SelectComponent from './SelectComponent'

const FormikControl = (props: any) => {
    const { control, ...rest } = props;
    switch (control) {
        case "input":
            return <InputComponent {...rest} />;
        case "select":
            return <SelectComponent {...rest} />;
        default:
            return null;
    }
}

export default FormikControl