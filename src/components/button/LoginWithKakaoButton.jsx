import styled from 'styled-components';
import { ReactComponent as KakaoSVG } from '../../assets/icons/kakao.svg';

const LoginWithKakaoBtn = styled.button`
  display: flex;
  align-items: center;
  width: 183px;
  height: 45px;
  background-color: #fee500;
  color: rgba(0, 0, 0, 0.85);
  border-radius: 6px;
  padding: 0 11px;
  margin: 0 auto;
  cursor: pointer;

  span {
    flex-grow: 1;
    font-size: 1rem;
  }
`;

const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_APP_KEY}&redirect_uri=http://localhost:3000/kakaologin&response_type=code`;

const LoginWithKakaoButton = () => {
  const loginWithKakao = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <LoginWithKakaoBtn onClick={loginWithKakao}>
      <KakaoSVG />
      <span>카카오 로그인</span>
    </LoginWithKakaoBtn>
  );
};

export default LoginWithKakaoButton;
