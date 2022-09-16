import { useEffect } from 'react';
import Counter from './components/Counter';
import Mainpage from './pages/MainPage';
import PostPage from './pages/PostPage';

function App() {
  return (
    <>
      <header
        style={{
          width: '100%',
          height: '85px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'blue',
        }}
      >
        헤더(layout 예시)
      </header>

      <div
        className="carousel"
        style={{
          width: '100%',
          height: '320px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'green',
        }}
      >
        carousel(layout 예시)
      </div>
      {/* <Counter></Counter> */}
      {/* <PostPage></PostPage> */}
      <Mainpage></Mainpage>
    </>
  );
}

export default App;
