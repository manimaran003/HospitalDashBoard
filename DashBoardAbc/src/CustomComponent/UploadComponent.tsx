import { TextFieldProps, Button, IconButton } from '@mui/material'
import { styled } from '@mui/material/styles';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import defaultImg from '../Assets/default1.png';
import './UploadComponent.scss'
const Input = styled('input')({
    display: 'none',
    marginTop: "20px"
});
const UploadComponent: React.FC<TextFieldProps | any> = (props) => {
    const { error, imgData, ...rest } = props
    console.log(imgData)
    return (
        <div className=''>
            <div className="d-flex justify-content-center">
                <div className="profile--pic">
                    <img className="profile--pic" src={imgData?imgData:defaultImg} alt="pic"/>
                </div>
            </div>
            <label htmlFor="contained-button-file" className="profile--sider">
                <Input accept="image/*" />
                <IconButton color="primary" aria-label="upload picture" component="label">
                    <input hidden accept="image/*" type="file" id="contained-button-file" multiple {...rest} />
                    <PhotoCamera className="" />
                </IconButton>
            </label>
            <span style={{ color: "red" }}>{error}</span>
        </div>
    )
}
export default UploadComponent