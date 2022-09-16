import { useEffect } from 'react';
import Counter from './components/Counter';
import Header from './components/Header';
import Mainpage from './pages/MainPage';
import PostPage from './pages/PostPage';

function App() {
  return (
    <>
      <Header></Header>
      {/* <Counter></Counter> */}
      {/* <PostPage></PostPage> */}
      <Mainpage></Mainpage>
    </>
  );
}

export default App;
