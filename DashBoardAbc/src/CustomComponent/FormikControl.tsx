import React from 'react';
import InputComponent from './InputComponent';
import SelectComponent from './SelectComponent';
import UploadComponent from './UploadComponent';
import { FieldProps } from 'formik';
import { TextFieldProps } from '@mui/material';
type says = {
  control: string;
};

const FormikControl: React.FC<FieldProps & TextFieldProps & says & any> = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case 'input':
      return <InputComponent {...rest} />;
    case 'select':
      return <SelectComponent {...rest} />;
    case 'upload':
      return <UploadComponent {...rest} />;
    default:
      return null;
  }
};
export default FormikControl;
