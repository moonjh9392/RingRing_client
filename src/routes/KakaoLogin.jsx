import axios from 'axios';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const KakaoLogin = () => {
  const navigate = useNavigate();
  const KAKAO_CODE = useLocation().search.split('=')[1];

  const getToken = async () => {
    try {
      const {
        data: { access_token },
      } = await axios({
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        url: `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.REACT_APP_KAKAO_APP_KEY}&redirect_uri=http://localhost:3000/kakaologin&code=${KAKAO_CODE}`,
      });
      // access_token 받고, 서버에 전달해서 JWT 토큰 받기
      sessionStorage.setItem('token', access_token);

      // 성공하면 다음 페이지로 이동
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  return <>카카오 로그인 중...</>;
};

export default KakaoLogin;
