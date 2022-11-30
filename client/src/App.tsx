import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import ScrollToTopButton from './components/ScrollToTopButton';
import { loginStore } from './store/store';
import ScrollToTop from './utils/ScrollToTop';
const PostPage = lazy(() => import('./pages/PostPage/PostPage'));
const MainPage = lazy(() => import('./pages/MainPage/MainPage'));
const Header = lazy(() => import('./components/Header'));
const QuestionPostPage = lazy(
  () => import('./pages/PostPage/QuestionPostPage')
);
const UserPage = lazy(() => import('./pages/UserPage/UserPage'));
const ModifyUserPage = lazy(() => import('./pages/UserPage/ModifyUserPage'));
const UserInfoPage = lazy(() => import('./pages/UserPage/UserInfoPage'));
function App() {
  const { loginHandler } = loginStore();
  useEffect(() => {
    loginHandler();
  }, []);
  return (
    <>
      <Header></Header>
      <ScrollToTop></ScrollToTop>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/questions/:id" element={<PostPage />}></Route>
          <Route path="/questionpost" element={<QuestionPostPage />}></Route>
          <Route path="/users/:id/" element={<UserPage />}>
            <Route index element={<UserInfoPage />}></Route>
            <Route path="modify" element={<ModifyUserPage />}></Route>
          </Route>
        </Routes>
      </Suspense>
      <ScrollToTopButton></ScrollToTopButton>
    </>
  );
}

export default App;
