import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { Constants, ApiEndpoint } from '../Constants/Constant';
import TokenService from '../Constants/token.service';
import Api from '../Constants/Instance';
import { toast } from 'react-toastify';
import { AppDispatch } from '../store';
import { Signin, Signup } from '../TypeFile/TypeScriptType';

export const SignupAction = (data: Signup) => async (dispatch: AppDispatch) => {
  try {
    const SignupResponse = await axios({
      method: 'POST',
      url: Constants.BaseUrl + ApiEndpoint.SignupAuthentication,
      data
    }).then((res) => {
      return res.data;
    });
    if (SignupResponse) {
      TokenService.setSignupUser(SignupResponse?.token);
      dispatch(setSignUpSuccess(SignupResponse));
    }
  } catch (err) {
    console.log(err);
    const error = err as any;
    const { message } = error.response.data;
    toast.error(message);
  }
};

export const LoginAction = (data: Signin, navigate: any) => async (dispatch: AppDispatch) => {
  try {
    const LoginResponse = await axios({
      method: 'POST',
      url: Constants.BaseUrl + ApiEndpoint.LoginAuthentication,
      data
    }).then((res) => {
      return res.data;
    });
    if (LoginResponse) {
      console.log(LoginResponse);
      if (LoginResponse.token && LoginResponse.refreshToken) {
        TokenService.setUserImage(
          LoginResponse?.RoleData?.doctorImage ? LoginResponse?.RoleData?.doctorImage : ''
        );
        TokenService.setAccessToken(LoginResponse?.token);
        TokenService.setRefreshToken(LoginResponse?.refreshToken);
        navigate('/dashboard');
      }
      dispatch(setLoginSuccess(LoginResponse));
    }
  } catch (err) {
    const error = err as any;
    const { message } = error.response.data;
    toast.error(message);
  }
};

export const getUserList = () => async (dispatch: AppDispatch) => {
  try {
    const userList = await Api({
      method: 'GET',
      url: Constants.BaseUrl + ApiEndpoint.getAllUser,
      headers: { authorization: TokenService.getAccessToken() }
    }).then((res) => {
      return res.data;
    });
    if (userList) {
      dispatch(AllUserList(userList));
    }
  } catch (err) {
    console.log(err);
    // const error = err as any
    // let { message } = error?.response?.data
    // console.log(message)
    // dispatch(setSignupError(message))
  }
};

const initialState = {
  SignupResponse: {
    data: {}
  },
  LoginResponse: {
    data: {}
  },
  userListResponse: {
    data: {}
  }
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setSignUpSuccess: (state, action) => {
      state.SignupResponse = {
        data: action.payload
      };
    },
    setLoginSuccess: (state, action) => {
      state.LoginResponse = {
        data: action.payload
      };
    },
    AllUserList: (state, action) => {
      state.userListResponse = {
        data: action.payload
      };
    }
  }
});

export const { setSignUpSuccess, setLoginSuccess, AllUserList } = usersSlice.actions;

export default usersSlice.reducer;
