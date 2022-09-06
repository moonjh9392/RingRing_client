import Header from '../components/common/Header';
import LoginWithKakaoBtn from '../components/button/LoginWithKakaoButton';
import Phone from '../components/Phone';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import TextTransition from 'react-text-transition';

const texts = ['맑아요', '흐려요', '살짝 흐려요', '비가 와요', '눈이 와요', '천둥번개가 쳐요', '강풍이 심해요'];

const icons = ['☀️', '☁️', '⛅️', '☔️', '❄️', '⚡️', '💨'];

const MainStyle = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const SectionStyle = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:nth-child(odd) {
    background-color: #fafafa;
  }

  strong {
    display: block;
    width: 100%;
    max-width: 600px;
    font-size: 1.1rem;
    font-weight: 500;
    margin: 0 auto;
    margin-bottom: 12px;
  }

  img {
    width: auto;
    max-width: 450px;
    max-height: calc(100vh - 60px);
    margin: 0 auto;
  }

  .internal-image {
    display: none;
  }

  .section-wrapper {
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;
  }

  .section-container {
    display: flex;
    flex-direction: column;
    padding: 72px 24px;
    text-align: left;
  }

  .section-title {
    display: block;
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.5;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    margin-bottom: 24px;

    span {
      color: #eddf66;
      font-weight: 700;
    }
  }

  .center {
    text-align: center;
  }

  @media screen and (min-width: 1119px) {
    height: calc(100vh - 60px);
    background-color: #fafafa;
    max-width: 50vw;

    .section-title {
      font-size: 2rem;
    }

    .section-wrapper.phone {
      .section-container {
        padding: 0;
      }
    }

    &:nth-child(3) {
      position: fixed;
      top: 0;
      right: 0;
      width: 100%;
      padding-top: 60px;
      height: calc(100vh - 60px);

      .external-image {
        position: relative;
        z-index: 3;
      }

      .internal-image {
        position: absolute;
        display: block;
        z-index: 1;
      }

      .internal-image.ex1 {
        z-index: 1;
      }
    }

    .section-container {
      align-items: center;
      text-align: center;
    }
  }
`;

const CardStyle = styled.div`
  width: 100%;
  max-width: 600px;
  height: 200px;
  background-color: white;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  box-shadow: 3px 3px 20px 2px rgba(0, 0, 0, 0.05);

  h1 {
    font-size: 1.5rem;
    color: #333333;
    font-weight: 600;
  }

  @media screen and (min-width: 1119px) {
    margin: 0;
    /* max-width: 40vw; */
  }
`;

const Landing = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((prev) => prev + 1), 1500);
    return () => {
      clearTimeout(intervalId);
    };
  }, []);

  return (
    <>
      <Header />
      <MainStyle>
        <SectionStyle>
          <div className="section-wrapper">
            <div className="section-container">
              <strong>날씨</strong>
              <h1 className="section-title">
                시간을 지정하면,
                <br />
                <span>날씨</span>를 알려드려요
              </h1>
              <CardStyle>
                <h1>
                  오늘은{' '}
                  <TextTransition inline direction="down">
                    <span>{texts[index % texts.length]}</span>
                    <span className="tossface">{icons[index % icons.length]}</span>
                  </TextTransition>
                </h1>
              </CardStyle>
            </div>
          </div>
        </SectionStyle>
        <SectionStyle>
          <div className="section-wrapper">
            <div className="section-container">
              <strong>뉴스</strong>
              <h1 className="section-title">
                원한다면
                <br />
                <span>뉴스</span>까지 한 번에 <span className=" tossface">📰</span>
              </h1>
            </div>
          </div>
        </SectionStyle>
        <SectionStyle>
          <Phone />
        </SectionStyle>
        <SectionStyle>
          <div className="section-wrapper">
            <div className="section-container">
              <h1 className="section-title center">
                카카오로
                <br />
                바로 시작할 수 있어요
              </h1>
              <LoginWithKakaoBtn />
            </div>
          </div>
        </SectionStyle>
      </MainStyle>
    </>
  );
};

export default Landing;
