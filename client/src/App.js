import { useEffect } from 'react';
import PostPage from './pages/PostPage';
import Mainpage from './pages/MainPage';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import QuestionPostPage from './pages/QuestionPostPage';
import UserPage from './pages/UserPage/UserPage';
function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Mainpage />}></Route>
        <Route path="/questions/:id" element={<PostPage />}></Route>
        {/* <Mainpage></Mainpage>
        <PostPage></PostPage> */}
        <Route path="/questionpost" element={<QuestionPostPage />}></Route>
        <Route path="/users/:id" element={<UserPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
