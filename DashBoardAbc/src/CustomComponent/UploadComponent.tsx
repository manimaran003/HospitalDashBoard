import { TextFieldProps, Button, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import defaultImg from '../Assets/default1.png';
import './UploadComponent.scss';
import PropTypes from 'prop-types';
const Input = styled('input')({
  display: 'none',
  marginTop: '20px'
});
interface FieldProps {
  imgData: string;
  name: string;
  error: string;
  type: string;
  test: string;
}
const UploadComponent: React.FC<TextFieldProps|any> = (props) => {
  const { error, imgData, name, test } = props;
  console.log('img', imgData);
  return (
    <div className="">
      <div className="d-flex justify-content-center">
        <div className="profile--pic">
          <img className="profile--pic" src={imgData ? imgData : defaultImg} alt="pic" />
        </div>
      </div>
      <label htmlFor="contained-button-file" className="profile--sider">
        <Input accept="image/*" />
        <IconButton color="primary" aria-label="upload picture" component="label">
          <input
            hidden
            accept="image/*"
            data-testid={name}
            type="file"
            id="contained-button-file"
            multiple
          />
          <PhotoCamera className="" />
        </IconButton>
      </label>
      <span data-testid={test} style={{ color: 'red' }}>
        {error}
      </span>
    </div>
  );
};

UploadComponent.propTypes = {
  error: PropTypes.string.isRequired,
  imgData: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  test: PropTypes.string.isRequired
};
export default UploadComponent;
