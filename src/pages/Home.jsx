import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const BlogList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-lg);
  max-width: var(--breakpoint-desktop);
  margin: 0 auto;
`;

const BlogCard = styled(motion.div)`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const BlogImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const BlogContent = styled.div`
  padding: var(--spacing-md);
`;

const BlogTitle = styled.h3`
  margin-bottom: var(--spacing-sm);
  color: var(--color-primary);
`;

const BlogExcerpt = styled.p`
  color: var(--color-text);
  font-size: 0.9rem;
  margin-bottom: var(--spacing-sm);
`;

const BlogDate = styled.span`
  color: var(--color-secondary);
  font-size: 0.8rem;
`;

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
  grid-template-areas:
    "main top"
    "main bottom";
  grid-template-columns: 2fr 1fr;
  gap: var(--spacing-lg);
  max-width: var(--breakpoint-desktop);
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-areas:
      "main"
      "top"
      "bottom";
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  width: 100%;
  height: ${props => props.isMain ? '600px' : '290px'};
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${ProjectCard}:hover & {
    transform: scale(1.1);
  }
`;

const ProjectInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: var(--spacing-md);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  transform: translateY(100%);
  transition: transform 0.3s ease-in-out;

  ${ProjectCard}:hover & {
    transform: translateY(0);
  }
`;

const ProjectTitle = styled.h3`
  margin-bottom: var(--spacing-sm);
  color: white;
`;

const ProjectDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
`;

const Home = () => {
  const projects = [
    {
      id: 1,
      title: '电商App界面设计',
      description: '为新零售电商平台打造的现代化移动应用界面设计',
      image: '/portfolio/project1.jpg'
    },
    {
      id: 2,
      title: '品牌视觉识别系统',
      description: '为科技初创公司设计的完整品牌视觉识别系统',
      image: '/portfolio/project2.jpg'
    },
    {
      id: 3,
      title: '插画系列作品',
      description: '以未来主义为主题的商业插画系列',
      image: '/portfolio/project3.jpg'
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: '设计趋势探索：2024年UI设计新方向',
      excerpt: '探讨最新的用户界面设计趋势，以及如何在实际项目中应用这些创新理念。',
      date: '2024-01-15',
      image: '/blog/trend.svg'
    },
    {
      id: 2,
      title: '品牌设计的艺术：从理念到视觉',
      excerpt: '深入解析品牌设计的核心要素，以及如何打造独特的品牌视觉识别系统。',
      date: '2024-01-10',
      image: '/blog/brand.svg'
    },
    {
      id: 3,
      title: '插画设计：讲述品牌故事的艺术',
      excerpt: '探索商业插画在品牌传播中的应用，以及如何通过插画提升品牌价值。',
      date: '2024-01-05',
      image: '/blog/illustration.svg'
    }
  ];

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
        <SectionTitle>最新博客</SectionTitle>
        <BlogList>
          {blogPosts.map((post) => (
            <BlogCard
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -10 }}
            >
              <BlogImage src={post.image} alt={post.title} />
              <BlogContent>
                <BlogTitle>{post.title}</BlogTitle>
                <BlogExcerpt>{post.excerpt}</BlogExcerpt>
                <BlogDate>{post.date}</BlogDate>
              </BlogContent>
            </BlogCard>
          ))}
        </BlogList>
      </FeaturedSection>

      <FeaturedSection>
        <SectionTitle>精选作品</SectionTitle>
        <ProjectGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              isMain={index === 0}
              style={{ gridArea: index === 0 ? 'main' : index === 1 ? 'top' : 'bottom' }}
            >
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectInfo>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
              </ProjectInfo>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </FeaturedSection>
    </>
  );
};

export default Home;