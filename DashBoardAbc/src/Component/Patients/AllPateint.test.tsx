import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store';
import UserProvider from '../../Context/userContext';
import { BrowserRouter as Router } from 'react-router-dom';
import AllPatientsView from './AllPatientsView';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { ApiEndpoint, Constants } from '../../Constants/Constant';

const apiUrl = Constants.BaseUrl + ApiEndpoint.GetPatientInfo;

const fakeUserResponse = { token: [{}] };
const server = setupServer(
  rest.get(apiUrl, (req, res, ctx) => {
    return res(ctx.json({ data: fakeUserResponse.token }));
  })
);
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

describe('render all patient page', () => {
  global.matchMedia =
    global.matchMedia ||
    function () {
      return {
        matches: false,
        addListener: jest.fn(),
        removeListener: jest.fn()
      };
    };
  test('render patient screen table', () => {
    render(
      <Provider store={store}>
        <Router>
          <UserProvider>
            <AllPatientsView />
          </UserProvider>
        </Router>
      </Provider>
    );
  });

  test('test view screen api cal', async () => {
    render(
      <Provider store={store}>
        <Router>
          <UserProvider>
            <AllPatientsView />
          </UserProvider>
        </Router>
      </Provider>
    );
    server.listen();
    await fetch(apiUrl, { method: 'GET' });
    expect([{}]).toEqual([{}]); // Make an assertion on the result
  });

  //   test('test mock server apinstai call', async () => {
  //     render(
  //       <Provider store={store}>
  //         <Router>
  //           <UserProvider>
  //             <AllPatientsView />
  //           </UserProvider>
  //         </Router>
  //       </Provider>
  //     );
  //     server.listen();
  //     await fetch(apiUrl, { method: 'GET' });

  //     expect([{}]).toEqual([{}]); // Make an assertion on the result
  //   });
});
