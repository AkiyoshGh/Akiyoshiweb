import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';

const DetailContainer = styled(motion.div)`
  padding: calc(var(--spacing-xl) * 2) var(--spacing-lg);
  max-width: var(--breakpoint-desktop);
  margin: 0 auto;
`;

const BackButton = styled(motion.button)`
  background: transparent;
  border: none;
  color: var(--color-accent);
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-lg);
  padding: 0;

  &:hover {
    color: var(--color-primary);
  }
`;

const ProjectHeader = styled.div`
  margin-bottom: var(--spacing-xl);
`;

const ProjectTitle = styled.h1`
  font-size: 2.5rem;
  color: var(--color-primary);
  margin-bottom: var(--spacing-md);
`;

const ProjectCategory = styled.span`
  font-size: 1.1rem;
  color: var(--color-accent);
  display: block;
  margin-bottom: var(--spacing-lg);
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  margin-bottom: var(--spacing-xl);
  border-radius: 8px;
  overflow: hidden;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImageNav = styled.div`
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 8px;
  z-index: 1;
`;

const ImageDot = styled.button`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${props => props.active ? 'white' : 'rgba(255, 255, 255, 0.5)'};
  border: none;
  padding: 0;
  cursor: pointer;
  transition: all 0.3s ease;
`;

const ImageArrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${props => props.direction === 'left' ? 'left: 10px;' : 'right: 10px;'}
  background: rgba(0, 0, 0, 0.3);
  color: white;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }
`;

const ContentSection = styled.section`
  margin-bottom: var(--spacing-xl);
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: var(--color-primary);
  margin-bottom: var(--spacing-md);
`;

const SectionContent = styled.p`
  color: var(--color-text);
  line-height: 1.6;
  font-size: 1.1rem;
`;

const projects = [
  {
    id: 1,
    title: '电商App界面设计',
    category: 'UI设计',
    description: '为新零售电商平台打造的现代化移动应用界面设计',
    images: [
      '/portfolio/project1.jpg',
      '/portfolio/project1-2.jpg',
      '/portfolio/project1-3.jpg'
    ],
    background: '该项目旨在重新定义电商购物体验，通过创新的界面设计提升用户体验。',
    process: '设计过程包括用户研究、竞品分析、原型设计和多轮用户测试。我们特别关注了移动端的操作便捷性和视觉层级。',
    outcome: '最终交付的设计方案显著提升了用户满意度，应用的转化率提高了35%。'
  },
  {
    id: 2,
    title: '品牌视觉识别系统',
    category: '品牌设计',
    description: '为科技初创公司设计的完整品牌视觉识别系统',
    images: [
      '/portfolio/project2.jpg',
      '/portfolio/project2-2.jpg',
      '/portfolio/project2-3.jpg'
    ],
    background: '客户需要一套能够体现其创新精神和技术实力的品牌视觉系统。',
    process: '通过深入了解公司文化和价值观，我们开发了包含logo、配色方案、字体系统在内的完整品牌识别系统。',
    outcome: '新的品牌形象帮助客户在市场中建立了独特的视觉识别，品牌认知度提升显著。'
  },
  {
    id: 3,
    title: '插画系列作品',
    category: '插画',
    description: '以未来主义为主题的商业插画系列',
    images: [
      '/portfolio/project3.jpg',
      '/portfolio/project3-2.jpg',
      '/portfolio/project3-3.jpg'
    ],
    background: '这是一个探索未来科技与人文结合的插画项目，旨在展现科技发展带来的可能性。',
    process: '创作过程中融合了传统手绘技法和数字创作工具，每幅作品都经过精心构思和多次修改。',
    outcome: '该系列作品在多个设计平台获得推荐，并被多家科技公司采用作为品牌视觉素材。'
  },
  {
    id: 4,
    title: '交互动效设计',
    category: '动效设计',
    description: '为移动应用设计的流畅交互动效',
    images: [
      '/portfolio/project4.jpg',
      '/portfolio/project4-2.jpg',
      '/portfolio/project4-3.jpg'
    ],
    background: '项目目标是通过精心设计的动效来提升用户体验，使界面交互更加自然流畅。',
    process: '我们使用最新的动效设计工具，创造了一系列符合材料设计规范的交互动画。',
    outcome: '实现了既美观又实用的交互效果，获得了用户的积极反馈，并提升了应用的用户留存率。'
  }
];

const PortfolioDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <DetailContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <BackButton onClick={() => navigate('/portfolio')}>
          ← 返回作品集
        </BackButton>
        <h1>作品未找到</h1>
      </DetailContainer>
    );
  }

  return (
    <DetailContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <BackButton
        onClick={() => navigate('/portfolio')}
        whileHover={{ x: -5 }}
        whileTap={{ scale: 0.95 }}
      >
        ← 返回作品集
      </BackButton>

      <ProjectHeader>
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectCategory>{project.category}</ProjectCategory>
      </ProjectHeader>

      <ImageContainer>
        <ProjectImage src={project.images[currentImage]} alt={project.title} />
        <ImageNav>
          {project.images.map((_, index) => (
            <ImageDot
              key={index}
              active={currentImage === index}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </ImageNav>
        {currentImage > 0 && (
          <ImageArrow
            direction="left"
            onClick={() => setCurrentImage(prev => prev - 1)}
          >
            ←
          </ImageArrow>
        )}
        {currentImage < project.images.length - 1 && (
          <ImageArrow
            direction="right"
            onClick={() => setCurrentImage(prev => prev + 1)}
          >
            →
          </ImageArrow>
        )}
      </ImageContainer>

      <ContentSection>
        <SectionTitle>项目背景</SectionTitle>
        <SectionContent>{project.background}</SectionContent>
      </ContentSection>

      <ContentSection>
        <SectionTitle>设计过程</SectionTitle>
        <SectionContent>{project.process}</SectionContent>
      </ContentSection>

      <ContentSection>
        <SectionTitle>项目成果</SectionTitle>
        <SectionContent>{project.outcome}</SectionContent>
      </ContentSection>
    </DetailContainer>
  );
};

export default PortfolioDetail;