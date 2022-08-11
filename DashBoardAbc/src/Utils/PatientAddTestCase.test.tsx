import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store';
import UserProvider from '../Context/userContext';
import userEvent from '@testing-library/user-event';
import CustomPatientEditModal from './CustomPatientEditModal';
import CustomPatientAddModal from './CustomPatientAddModal';
import CustomPatientDelete from './CustomPatientDelete';
// import ViewPatients from '../Component/Patients/ViewPatients';
// import { BrowserRouter as Router } from 'react-router-dom';

const handleClose = jest.fn();

const InputCheckRender = () => {
  const imageText = screen.getByTestId('patientImage', { exact: false });
  expect(imageText).toBeInTheDocument();
  const nameText = screen.getByTestId('patientName', { exact: false });
  expect(nameText).toBeInTheDocument();
  const emailText = screen.getByTestId('email', { exact: false });
  expect(emailText).toBeInTheDocument();
  const addressText = screen.getByTestId('address', { exact: false });
  expect(addressText).toBeInTheDocument();
  const phoneText = screen.getByTestId('phoneNumber', { exact: false });
  expect(phoneText).toBeInTheDocument();
  const countryText = screen.getByTestId('country', { exact: false });
  expect(countryText).toBeInTheDocument();
  const dobText = screen.getByTestId('dob', { exact: false });
  expect(dobText).toBeInTheDocument();
  const dateText = screen.getByTestId('admitDate', { exact: false });
  expect(dateText).toBeInTheDocument();
  const ageText = screen.getByTestId('ageField', { exact: false });
  expect(ageText).toBeInTheDocument();
};

const checkRenderCancelButton = () => {
  const btn = screen.getByText('save', { exact: false });
  expect(btn).toBeInTheDocument();
  const cancelbtn = screen.getByText('cancel', { exact: false });
  expect(cancelbtn).toBeInTheDocument();
};

const checkErrorFieldRender = () => {
  const imageRequired = screen.getByTestId('test1');
  expect(imageRequired).toBeInTheDocument();
  const nameRequired = screen.getByTestId('err1');
  expect(nameRequired).toBeInTheDocument();
  const emailRequired = screen.getByTestId('err2');
  expect(emailRequired).toBeInTheDocument();
  const addressRequired = screen.getByTestId('err3');
  expect(addressRequired).toBeInTheDocument();
  const phoneNumber = screen.getByTestId('err4');
  expect(phoneNumber).toBeInTheDocument();
  const countryRequired = screen.getByTestId('err5');
  expect(countryRequired).toBeInTheDocument();
  const dobRequired = screen.getByTestId('err6');
  expect(dobRequired).toBeInTheDocument();
  const ageRequired = screen.getByTestId('err7');
  expect(ageRequired).toBeInTheDocument();
  const admitRequired = screen.getByTestId('err8');
  expect(admitRequired).toBeInTheDocument();
};

describe('render patientAdd Modal', () => {
  test('check patient add modal', () => {
    render(
      <Provider store={store}>
        <UserProvider>
          <CustomPatientAddModal id="" />
        </UserProvider>
      </Provider>
    );
    const text = screen.getByText('Add Patient', { exact: false });
    expect(text).toBeInTheDocument();
  });
  test('check all input fields render', () => {
    render(
      <Provider store={store}>
        <UserProvider>
          <CustomPatientAddModal id="exampleModals" />
        </UserProvider>
      </Provider>
    );
    InputCheckRender();
  });
  test('render the cancel save  button', () => {
    render(
      <Provider store={store}>
        <UserProvider>
          <CustomPatientAddModal id="exampleModals" />
        </UserProvider>
      </Provider>
    );
    checkRenderCancelButton();
  });
  test('check error message values box render in add patient', () => {
    render(
      <Provider store={store}>
        <UserProvider>
          <CustomPatientAddModal id="exampleModals" />
        </UserProvider>
      </Provider>
    );
    checkErrorFieldRender();
  });

  test('check error message when hit submit button in addPatient', async () => {
    render(
      <Provider store={store}>
        <UserProvider>
          <CustomPatientAddModal id="exampleModals" />
        </UserProvider>
      </Provider>
    );
    const imageText = screen.getByTestId('patientImage', { exact: false });
    fireEvent.change(imageText, { target: { value: '' } });
    const nameText = screen.getByTestId('patientName', { exact: false });
    fireEvent.change(nameText, { target: { value: '' } });
    const emailText = screen.getByTestId('email');
    fireEvent.change(emailText, { target: { value: '' } });
    const addressText = screen.getByTestId('address');
    fireEvent.change(addressText, { target: { value: '' } });
    const phoneText = screen.getByTestId('phoneNumber');
    fireEvent.change(phoneText, { target: { value: '' } });
    const countryText = screen.getByTestId('country');
    fireEvent.change(countryText, { target: { value: '' } });
    const dobText = screen.getByTestId('dob');
    fireEvent.change(dobText, { target: { value: '' } });
    const dateText = screen.getByTestId('admitDate');
    fireEvent.change(dateText, { target: { value: '' } });
    const ageText = screen.getByTestId('ageField');
    fireEvent.change(ageText, { target: { value: '' } });
    const btn = screen.getByText('save', { exact: false });
    userEvent.click(btn);
    // await waitFor(() => {
    //     const imageRequired = screen.getByTestId("test1")
    //     expect(imageRequired).toHaveTextContent("File is required")
    // })
    await waitFor(() => {
      const nameRequired = screen.getByTestId('err1');
      expect(nameRequired).toHaveTextContent('name is required');
    });
    await waitFor(() => {
      const emailRequired = screen.getByTestId('err2');
      expect(emailRequired).toHaveTextContent('Enter valid email-id');
    });
    await waitFor(() => {
      const addressRequired = screen.getByTestId('err3');
      expect(addressRequired).toHaveTextContent('address is required');
    });
    await waitFor(() => {
      const phoneNumber = screen.getByTestId('err4');
      expect(phoneNumber).toHaveTextContent('phone number is required');
    });
    await waitFor(() => {
      const countryRequired = screen.getByTestId('err5');
      expect(countryRequired).toHaveTextContent('country is required');
    });
    await waitFor(() => {
      const dobRequired = screen.getByTestId('err6');
      expect(dobRequired).toHaveTextContent('Dob is required');
    });
    await waitFor(() => {
      const admitRequired = screen.getByTestId('err8');
      expect(admitRequired).toHaveTextContent('admitDate is required');
    });
  });
  test('check correct email is displayed show error message', async () => {
    render(
      <Provider store={store}>
        <UserProvider>
          <CustomPatientAddModal id="exampleModals" />
        </UserProvider>
      </Provider>
    );
    const emailText = screen.getByTestId('email');
    fireEvent.change(emailText, { target: { value: 'cmmaran' } });
    fireEvent.change(emailText, { target: { value: 'cmmaran102@.co' } });
    fireEvent.change(emailText, { target: { value: 'cmmaran102.com' } });
    const btn = screen.getByText('save', { exact: false });
    userEvent.click(btn);
    await waitFor(() => {
      const emailRequired = screen.getByTestId('err2');
      expect(emailRequired).toHaveTextContent('email must be a valid email');
    });
  });
});

describe('test patient edit modal rendered', () => {
  test('check patient edit modal', () => {
    render(
      <Provider store={store}>
        <UserProvider>
          <CustomPatientEditModal id="exampleModals" />
        </UserProvider>
      </Provider>
    );
    const text = screen.getByText('Edit Patient', { exact: false });
    expect(text).toBeInTheDocument();
  });
  test('check all input fields render', () => {
    render(
      <Provider store={store}>
        <UserProvider>
          <CustomPatientAddModal id="" />
        </UserProvider>
      </Provider>
    );
    InputCheckRender();
  });
  test('render the cancel save  button', () => {
    render(
      <Provider store={store}>
        <UserProvider>
          <CustomPatientAddModal id="exampleModals" />
        </UserProvider>
      </Provider>
    );
    checkRenderCancelButton();
  });
  test('check error message when hit submit button in addPatient', async () => {
    render(
      <Provider store={store}>
        <UserProvider>
          <CustomPatientAddModal id="exampleModals" />
        </UserProvider>
      </Provider>
    );
    // const imageText = screen.getByTestId("patientImage", { exact: false })
    // fireEvent.change(imageText, { target: { value: {file:"skdlsd"} } })
    const nameText = screen.getByTestId('patientName', { exact: false });
    fireEvent.change(nameText, { target: { value: 'manimaran' } });
    const emailText = screen.getByTestId('email');
    fireEvent.change(emailText, { target: { value: 'cmmaran199@gmail.com' } });
    const addressText = screen.getByTestId('address');
    fireEvent.change(addressText, { target: { value: 'no:2,thillainagar' } });
    const phoneText = screen.getByTestId('phoneNumber');
    fireEvent.change(phoneText, { target: { value: '8987654534' } });
    const countryText = screen.getByTestId('country');
    fireEvent.change(countryText, { target: { value: 'Tamilnadu' } });
    const dobText = screen.getByTestId('dob');
    fireEvent.change(dobText, { target: { value: '2020-10-22' } });
    const dateText = screen.getByTestId('admitDate');
    fireEvent.change(dateText, { target: { value: '2020-10-22' } });
    const ageText = screen.getByTestId('ageField');
    fireEvent.change(ageText, { target: { value: 21 } });
    const btn = screen.getByText('save', { exact: false });
    userEvent.click(btn);
    // await waitFor(() => {
    //     const imageRequired = screen.getByTestId("test1")
    //     expect(imageRequired).toHaveTextContent("File is required")
    // })
    await waitFor(() => {
      const nameRequired = screen.getByTestId('err1');
      expect(nameRequired).toHaveTextContent('');
    });
    await waitFor(() => {
      const emailRequired = screen.getByTestId('err2');
      expect(emailRequired).toHaveTextContent('');
    });
    await waitFor(() => {
      const addressRequired = screen.getByTestId('err3');
      expect(addressRequired).toHaveTextContent('');
    });
    await waitFor(() => {
      const phoneNumber = screen.getByTestId('err4');
      expect(phoneNumber).toHaveTextContent('');
    });
    await waitFor(() => {
      const countryRequired = screen.getByTestId('err5');
      expect(countryRequired).toHaveTextContent('');
    });
    await waitFor(() => {
      const dobRequired = screen.getByTestId('err6');
      expect(dobRequired).toHaveTextContent('');
    });
    await waitFor(() => {
      const admitRequired = screen.getByTestId('err8');
      expect(admitRequired).toHaveTextContent('');
    });
  });
});

describe('test patient delete modal renders', () => {
  test('check patient delete modal', () => {
    render(
      <Provider store={store}>
        <UserProvider>
          <CustomPatientDelete open={true} close={handleClose} edit={''} />
        </UserProvider>
      </Provider>
    );
    const text = screen.getByText('Do you want to delete a patient?', { exact: false });
    expect(text).toBeInTheDocument();
  });
  test('check btn renders in delete patient', () => {
    render(
      <Provider store={store}>
        <UserProvider>
          <CustomPatientDelete open={true} close={handleClose} edit={''}  />
        </UserProvider>
      </Provider>
    );
    const cancelbtn = screen.getByText('Cancel', { exact: false });
    expect(cancelbtn).toBeInTheDocument();
    const btn = screen.getByText('Yes', { exact: false });
    expect(btn).toBeInTheDocument();
  });
});

// describe("check patient View screen rendered",()=>{
//     test("check patient view rendered",()=>{
//         render(
//             <Provider store={store}>
//             <UserProvider>
//                 <Router>
//               <ViewPatients/>
//               </Router>
//             </UserProvider>
//         </Provider>
//         )
//     })
// })
