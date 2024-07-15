import React, { useContext } from 'react';

import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './LandingPage.css';

// 이미지 파일 import
import image1 from '../assets/images/icons/icon1.png';
import image2 from '../assets/images/icons/icon2.png';
import image3 from '../assets/images/icons/icon3.png';
import image4 from '../assets/images/icons/icon4.png';
import image5 from '../assets/images/icons/icon5.png';
import slidingImage1 from '../assets/images/slidingImage1.png'; // 새로운 슬라이딩 이미지
import slidingImage2 from '../assets/images/slidingImage2.png'; // 새로운 슬라이딩 이미지
import thirdSectionImage1 from '../assets/images/thirdSectionImage1.png'; // 세 번째 섹션 이미지 1
import thirdSectionImage2 from '../assets/images/thirdSectionImage2.png'; // 세 번째 섹션 이미지 2
import thirdSectionImage3 from '../assets/images/thirdSectionImage3.png'; // 세 번째 섹션 이미지 3
import thirdSectionImage4 from '../assets/images/thirdSectionImage4.png'; // 세 번째 섹션 이미지 4

const LandingPage = () => {

  const navigate = useNavigate();



  const handleNavigation = (path) => {
    navigate(path);
  };

  const handlePayment = () => {
    navigate('/payment');
  };

  return (
    <div className="landing-page">
      <Header />
      <main className="main-content">
        <div className="hero">
          <div className="hero-text">
            <h1>취준생부터 이직러까지</h1>
            <button className="primary">
              지금 무료로 시작하기
            </button>
          </div>
          <div className="hero-images">
            <img src={image1} alt="Hero Icon" />
          </div>
        </div>
        
        <div className="second-section">
          <div className="sliding-images">
            <img src={slidingImage1} alt="Sliding Image 1" />
            <img src={slidingImage2} alt="Sliding Image 2" />
          </div>
          <h2>잡메이커가 도와드립니다!</h2>
          <div className="generators">
            <div className="generator-card" onClick={() => handleNavigation('/cover-letter')}>
              <img src={image2} alt="Cover Letter Generator" />
              <h3>자소서 생성기</h3>
              <p>자기소개서를 처음 쓰는 분들, 온 때기가 막막한 분들에게!</p>
            </div>
            <div className="generator-card" onClick={() => handleNavigation('/photo-generator')}>
              <img src={image3} alt="Photo Generator" />
              <h3>증명사진 생성기</h3>
              <p>급하게 증명사진이 필요할 때!</p>
            </div>
            <div className="generator-card" onClick={() => handleNavigation('/interview-questions')}>
              <img src={image4} alt="Interview Questions Generator" />
              <h3>면접예상질문 생성기</h3>
              <p>첫 면접을 준비하는 학생부터 새로운 질문을 원하는 프로까지!</p>
            </div>
            <div className="generator-card" onClick={() => handleNavigation('/ai-interviewer')}>
              <img src={image5} alt="AI Interviewer" />
              <h3>AI 면접관</h3>
              <p>면접 연습이 필요할 때!</p>
            </div>
          </div>
        </div>

        <div className="third-section">
          <h2>서비스 예시</h2>
          <h3>실제 잡메이커 서비스를 활용한 생성 예시입니다!</h3>
          <div className="example-container">
            <img src={thirdSectionImage1} alt="Example 1" className="example-image left" />
            <img src={thirdSectionImage2} alt="Example 2" className="example-image center1" />
            <img src={thirdSectionImage3} alt="Example 3" className="example-image right" />
            <img src={thirdSectionImage4} alt="Example 4" className="example-image center2" />
          </div>
        </div>

        <div className="fourth-section">
          <h2>이런 분들에게!</h2>
          <h3>자소서 온 때기가 어려운 취준생부터 이직이 고민인데 복지가 궁금한 직장인까지!</h3>
          <div className="sliding-tags">
            <div className="tags-wrapper">
              <span className="tag">#자소서가 처음</span>
              <span className="tag">#기획자</span>
              <span className="tag">#디자이너</span>
              <span className="tag">#개발자</span>
              <span className="tag">#이직러</span>
              <span className="tag">#증명사진 너무 비싼데</span>
              <span className="tag">#우리회사랑저기랑복지비교</span>
              <span className="tag">#기획자</span>
              <span className="tag">#디자이너</span>
              <span className="tag">#개발자</span>
              <span className="tag">#이직러</span>
            </div>
          </div>
          <div className="sliding-tags">
            <div className="tags-wrapper">
              <span className="tag">#자소서가 처음</span>
              <span className="tag">#기획자</span>
              <span className="tag">#디자이너</span>
              <span className="tag">#개발자</span>
              <span className="tag">#이직러</span>
              <span className="tag">#증명사진 너무 비싼데</span>
              <span className="tag">#우리회사랑저기랑복지비교</span>
              <span className="tag">#기획자</span>
              <span className="tag">#디자이너</span>
              <span className="tag">#개발자</span>
              <span className="tag">#이직러</span>
            </div>
          </div>
        </div>

        <div className="fifth-section">
          <h2>이용권 가격</h2>
          <h3>잡메이커에서 자소서부터 취직까지 올인원으로 해결하세요!</h3>
          <div className="pricing-plans">
            <div className="plan">
              <h3>Free plan</h3>
              <p>0원 / 월</p>
              <ul>
                <li>베이직 툴</li>
                <li>5,000 tokens</li>
              </ul>
              <button className="primary" onClick={handlePayment}>오늘 바로 이용하기</button>
            </div>
            <div className="plan">
              <h3>Starter plan</h3>
              <p>5,000원 / 월</p>
              <ul>
                <li>스타터 툴</li>
                <li>40,000 tokens</li>
                <li>커스텀 지원</li>
              </ul>
              <button className="primary" onClick={handlePayment}>구독하기</button>
            </div>
            <div className="plan">
              <h3>Professional plan</h3>
              <p>10,000원 / 월</p>
              <ul>
                <li>프로 툴</li>
                <li>300,000 tokens</li>
                <li>커스텀 지원</li>
                <li>전문 멘토 매칭</li>
              </ul>
              <button className="primary" onClick={handlePayment}>구독하기</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
