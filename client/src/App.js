import { useEffect } from 'react';
import PostPage from './pages/PostPage';
import Mainpage from './pages/MainPage';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Mainpage />}></Route>
        <Route path="/postpage" element={<PostPage />}></Route>
        {/* <Mainpage></Mainpage>
        <PostPage></PostPage> */}
      </Routes>
    </>
  );
}

export default App;
