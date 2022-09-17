import { useEffect } from 'react';
import Counter from './components/Counter';
import PostPage from './pages/PostPage';
import { SignInModal } from './components/SignInModal';
import Header from './components/Header';
import Mainpage from './pages/MainPage';
// import PostPage from './pages/PostPage';

function App() {
  return (
    <>
      <Header></Header>
      {/* <Counter></Counter> */}
      {/* <PostPage></PostPage> */}

      <Mainpage></Mainpage>
      {/* <PostPage></PostPage> */}
    </>
  );
}

export default App;
