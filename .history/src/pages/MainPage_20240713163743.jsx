import React from 'react';
import ToolCard from '../components/ToolCard';
import './MainPage.css';


const tools = [
  {
    title: "자소서 생성기",
    description: "자기소개서를 처음 쓰는 분들, 온 메기가 약한 분들에게!",
    image: "../assets/images/icons/icon2.png",
  },
  {
    title: "증명사진 생성기",
    description: "급하게 증명사진이 필요할 때",
    image: "/images/icon2.png",
  },
  {
    title: "면접예상질문 생성기",
    description: "첫 면접을 준비하는 학생부터 새로운 질문을 원하는 프로까지!",
    image: "/images/icon3.png",
  },
  {
    title: "테크트리 생성기",
    description: "내 직무에 필요한 자격증들은?",
    image: "/images/icon4.png",
  },
  {
    title: "잡 매칭",
    description: "내 역량에 맞는 직무를 찾아줘요! 취준부터 이직까지!",
    image: "/images/icon5.png",
  },
  {
    title: "AI 면접관",
    description: "면접 연습이 필요할 때!",
    image: "/images/icon6.png",
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
          />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
