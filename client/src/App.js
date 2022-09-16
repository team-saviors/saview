import { useEffect } from 'react';
import Counter from './components/Counter';
import PostPage from './pages/PostPage';
import { SignInModal } from './components/SignInModal';
function App() {
  return (
    <div>
      {/* <Counter></Counter> */}
      {/* <PostPage></PostPage> */}
      <SignInModal></SignInModal>
    </div>
  );
}

export default App;
