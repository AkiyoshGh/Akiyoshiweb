import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-background);
  padding: 0 var(--spacing-lg);
  position: relative;
`;

const HeroContent = styled.div`
  text-align: center;
  max-width: 800px;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: var(--spacing-md);
  color: var(--color-primary);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: var(--color-secondary);
  margin-bottom: var(--spacing-lg);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const FeaturedSection = styled.section`
  padding: var(--spacing-xl) var(--spacing-lg);
  background: #f8f9fa;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: var(--spacing-xl);
  font-size: 2.5rem;
  color: var(--color-primary);
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectCard = styled(motion.div)`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectInfo = styled.div`
  padding: var(--spacing-md);
`;

const ProjectTitle = styled.h3`
  margin-bottom: var(--spacing-sm);
  color: var(--color-primary);
`;

const ProjectDescription = styled.p`
  color: var(--color-text-light);
  font-size: 0.9rem;
`;

const Home = () => {
  return (
    <>
      <HeroSection>
        <HeroContent>
          <HeroTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            创意设计，无限可能
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            专注于用户体验与视觉设计，为您打造独特的品牌形象
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>

      <FeaturedSection>
        <SectionTitle>精选作品</SectionTitle>
        <ProjectGrid>
          {[1, 2, 3].map((project) => (
            <ProjectCard
              key={project}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectImage src={`/placeholder-${project}.jpg`} alt={`Project ${project}`} />
              <ProjectInfo>
                <ProjectTitle>项目标题 {project}</ProjectTitle>
                <ProjectDescription>
                  这是一个简短的项目描述，展示项目的主要特点和亮点。
                </ProjectDescription>
              </ProjectInfo>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </FeaturedSection>

      <FeaturedSection>
        <SectionTitle>最新博客</SectionTitle>
        <ProjectGrid>
          {[
            {
              id: 1,
              title: '设计趋势探索：2024年UI设计新方向',
              excerpt: '探讨最新的用户界面设计趋势，以及如何在实际项目中应用这些创新理念。',
              date: '2024-01-15',
              image: '/blog/trend.jpg'
            },
            {
              id: 2,
              title: '品牌设计的艺术：从理念到视觉',
              excerpt: '深入解析品牌设计的核心要素，以及如何打造独特的品牌视觉识别系统。',
              date: '2024-01-10',
              image: '/blog/brand.jpg'
            },
            {
              id: 3,
              title: '插画设计：讲述品牌故事的艺术',
              excerpt: '探索商业插画在品牌传播中的应用，以及如何通过插画提升品牌价值。',
              date: '2024-01-05',
              image: '/blog/illustration.jpg'
            }
          ].map((post) => (
            <ProjectCard
              key={post.id}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              as={motion.article}
            >
              <ProjectImage src={post.image} alt={post.title} />
              <ProjectInfo>
                <ProjectTitle>{post.title}</ProjectTitle>
                <ProjectDescription>{post.excerpt}</ProjectDescription>
                <ProjectDescription style={{ marginTop: 'var(--spacing-sm)' }}>
                  {post.date}
                </ProjectDescription>
              </ProjectInfo>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </FeaturedSection>
    </>
  );
};

export default Home;