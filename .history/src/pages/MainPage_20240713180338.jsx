import React from 'react';
import ToolCard from '../components/ToolCard';
import './MainPage.css';

// 이미지 파일 import
import icon1 from '../assets/images/icons/icon1.png';
import icon2 from '../assets/images/icons/icon2.png';
import icon3 from '../assets/images/icons/icon3.png';
import icon4 from '../assets/images/icons/icon4.png';
import icon5 from '../assets/images/icons/icon5.png';
import icon6 from '../assets/images/icons/icon2.png';

const tools = [
  {
    title: "자소서 생성기",
    description: "자기소개서를 처음 쓰는 분들, 온 메기가 약한 분들에게!",
    image: icon1,
    link: "/tools/resume-generator",
  },
  {
    title: "증명사진 생성기",
    description: "급하게 증명사진이 필요할 때",
    image: icon2,
    link: "/tools/photo-generator",
  },
  {
    title: "면접예상질문 생성기",
    description: "첫 면접을 준비하는 학생부터 새로운 질문을 원하는 프로까지!",
    image: icon3,
    link: "/tools/interview-questions-generator",
  },
  {
    title: "테크트리 생성기",
    description: "내 직무에 필요한 자격증들은?",
    image: icon4,
    link: "/tools/tech-tree-generator",
  },
  {
    title: "잡 매칭",
    description: "내 역량에 맞는 직무를 찾아줘요! 취준부터 이직까지!",
    image: icon5,
    link: "/tools/job-matching",
  },
  {
    title: "AI 면접관",
    description: "면접 연습이 필요할 때!",
    image: icon6,
    link: "/tools/ai-interviewer",
  },
];

const MainPage = () => {
  return (
    <div className="main-page">
      <div className="content">
        {tools.map((tool, index) => (
          <ToolCard
            key={index}
            title={tool.title}
            description={tool.description}
            image={tool.image}
            link={tool.link}
          />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
