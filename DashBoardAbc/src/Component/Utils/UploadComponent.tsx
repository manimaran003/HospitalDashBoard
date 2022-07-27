import { TextFieldProps, Button } from '@mui/material'
import { styled } from '@mui/material/styles';
const Input = styled('input')({
    display: 'none',
    marginTop: "20px"
});
const UploadComponent: React.FC<TextFieldProps | any> = (props) => {
    const { error, ...rest } = props
    return (
        <div>
            <label htmlFor="contained-button-file">
                <Input accept="image/*" id="contained-button-file" multiple {...rest} />
                <Button variant="contained" component="span" sx={{ mt: 1, mb: 1 }}>
                    Upload
                </Button>
            </label>
            <span>{error}</span>
        </div>
    )
}
export default UploadComponent