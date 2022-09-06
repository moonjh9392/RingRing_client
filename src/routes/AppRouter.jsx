import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './Landing';
import KakaoLogin from './KakaoLogin';
import MyPage from '../components/mypage/MyPage';
import { menus } from '../assets/menulist/menus';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/kakaologin" element={<KakaoLogin />} />

        <Route path="/mypage" element={<MyPage />}>
          {menus.map((menu) => (
            <Route key={menu.id} path={menu.path} element={menu.component} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
