import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { routes } from './routes';

function App() {
  // const dispatch = useDispatch();

  // httpRequest
  //   .signUp({
  //     username: 'azaz1378',
  //     email: 'azaz1387@gmail.com',
  //     password: '123456',
  //   })
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  // useEffect(() => {
  //   dispatch(fetchAth({ username: 'azaz1378', password: '123456' }));
  // }, []);

  return (
    <div className="flex flex-col w-screen min-h-screen bg-gray-ExtraExtraLight">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Routes>
        {routes.map((route) => (
          <Route {...route} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
