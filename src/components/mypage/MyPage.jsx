import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../common/Header';

const MypageStyle = styled.div`
  overflow-y: scroll;

  .menu {
    position: relative;
    margin: 0 auto;
    max-width: 718px;

    @media screen and (max-width: 768px) {
      padding: 128px 24px;
      top: -128px;
    }
  }

  .background {
    background-color: #fafafa;
  }
`;

const MyPage = () => {
  return (
    <MypageStyle>
      <Header />
      <div className="background">
        <div className="menu">
          <Outlet />
        </div>
      </div>
    </MypageStyle>
  );
};

export default MyPage;
