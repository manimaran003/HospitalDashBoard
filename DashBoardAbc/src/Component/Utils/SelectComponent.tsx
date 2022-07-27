import React from 'react'
import { Select, MenuItem, TextFieldProps, InputBase, InputLabel } from '@mui/material'
import { alpha, styled } from '@mui/material/styles';
const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: "",
    },

    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
        border: '1px solid #ced4da',
        fontSize: 16,
        width: '100%',
        padding: '10px 12px',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main,
        },
    },
}));
const SelectInput = styled(Select)(({ theme }) => ({
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
        border: '1px solid #ced4da',
        fontSize: 16,
        width: '100%',
        padding: '10px 12px',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        // Use the system font instead of the default Roboto font.

    },
}));

const SelectComponent: React.FC<TextFieldProps | any> = (props) => {
    const { options, label, error, helperText, ...rest } = props
    return (
        <>
            <InputLabel shrink htmlFor="bootstrap-input" sx={{ display: "flex", fontSize: "1.3rem", fontWeight: "bolder" }}>
                {label}
            </InputLabel>
            <SelectInput
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                sx={{ width: "100%", border: `${error ? "1px solid red" : ""}` }}
                input={<BootstrapInput />}
                {...rest}
            >
                {options?.map((opt: any) => <MenuItem value={opt.data}>{opt.key}</MenuItem>)}
            </SelectInput>
            <span style={{ color: "red" }}>{helperText}</span>
        </>

    )
}
export default SelectComponent
