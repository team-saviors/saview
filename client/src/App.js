import { useEffect } from 'react';
import PostPage from './pages/PostPage';
import Mainpage from './pages/MainPage/MainPage';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import QuestionPostPage from './pages/QuestionPostPage';
import UserPage from './pages/UserPage/UserPage';
import { loginStore } from './store/store';
import ModifyUserPage from './pages/UserPage/ModifyUserPage';
import UserInfoPage from './pages/UserPage/UserInfoPage';
function App() {
  const { loginHandler } = loginStore();
  useEffect(() => {
    loginHandler();
  }, []);
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Mainpage />}></Route>
        <Route path="/questions/:id" element={<PostPage />}></Route>
        <Route path="/questionpost" element={<QuestionPostPage />}></Route>
        <Route path="/users/:id" element={<UserPage />}>
          <Route path="/users/:id" element={<UserInfoPage />}></Route>
          <Route path="/users/:id/modify" element={<ModifyUserPage />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
