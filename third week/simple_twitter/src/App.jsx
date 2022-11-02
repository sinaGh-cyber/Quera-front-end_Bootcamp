import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Pages/Home/home';
import Login from './Pages/Login/login';
import NotFound from './Pages/NotFound/NotFound';
import Profile from './Pages/Profile/profile';
import SignUp from './Pages/Signup/signup';
import Thread from './Pages/Thread/thread';
import Search from './Pages/Search/search';
import TweetModal from './modules/tweetModal/tweetModal';
import { httpRequest } from './services/httpRequest';

function App() {
  const isTweetModalActive = useSelector(
    (state) => state.tweet.isTweetModalActive
  );
  
  return (
    <div className="flex relative flex-col w-screen min-h-screen bg-gray-ExtraExtraLight">
      {isTweetModalActive && <TweetModal />}
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
        <Route
          path={'/home'}
          element={
            <Protected path="/home">
              <Home />
            </Protected>
          }
          key="0"
        />
        <Route
          path={'/thread/:threadId'}
          element={
            <Protected path="/thread/:threadId">
              <Thread />
            </Protected>
          }
          key="1"
        />
        <Route
          path={'/user/:username'}
          element={
            <Protected path="/user/:username">
              <Profile />
            </Protected>
          }
          key="2"
        />
        <Route path={'/login'} element={<Login />} key="3" />
        <Route path={'/sign-up'} element={<SignUp />} key="4" />
        <Route path={'*'} element={<NotFound />} key="5" />{' '}
        <Route
          path={'/search'}
          element={
            <Protected path="/search">
              <Search />
            </Protected>
          }
          key="6"
        />
      </Routes>
    </div>
  );
}

export default App;

function Protected({ children, path }) {
  const isLoggedIn = useSelector((state) => state.auth.token);

  if (!isLoggedIn) {
    return <Navigate to={`/login?redirect=${path}`} replace />;
  }
  return children;
}
