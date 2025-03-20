import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const PortfolioContainer = styled.div`
  padding: calc(var(--spacing-xl) * 2) var(--spacing-lg);
  max-width: var(--breakpoint-desktop);
  margin: 0 auto;
`;

const PortfolioHeader = styled.div`
  text-align: center;
  margin-bottom: var(--spacing-xl);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: var(--color-primary);
  margin-bottom: var(--spacing-md);
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-xl);
  flex-wrap: wrap;
`;

const FilterButton = styled(motion.button)`
  padding: var(--spacing-sm) var(--spacing-md);
  border: 1px solid var(--color-border);
  background: ${props => props.active ? 'var(--color-accent)' : 'transparent'};
  color: ${props => props.active ? 'white' : 'var(--color-text)'};
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    background: var(--color-accent);
    color: white;
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
`;

const ProjectCard = styled(motion.div)`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  width: 100%;
  height: 200px;
`;

const ProjectMedia = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  
  img, video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  ${ProjectCard}:hover img,
  ${ProjectCard}:hover video {
    transform: scale(1.1);
  }
`;

const ProjectInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: var(--spacing-md);
  background: rgba(255, 255, 255, 0.9);
  color: var(--color-text);
  transform: translateY(100%);
  transition: transform 0.3s ease-in-out;

  ${ProjectCard}:hover & {
    transform: translateY(0);
  }
`;

const ProjectTitle = styled.h3`
  margin-bottom: var(--spacing-sm);
  color: var(--color-text);
`;

const ProjectCategory = styled.span`
  font-size: 0.9rem;
  color: var(--color-accent);
  margin-bottom: var(--spacing-sm);
  display: block;
`;



const Portfolio = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('全部');

  const filters = ['全部', 'Vi', 'App/Web', '动画/视频', '宣传册/书籍', '形象设计', '包装', '插画'];

  const projects = [
    {
      id: 15,
      title: '品牌VI设计7',
      category: 'Vi',
      description: '企业品牌视觉识别系统设计',
      date: '2023',
      image: '/portfolio/Vi/project-7.jpg',
      images: [
        '/portfolio/Vi/project-7.jpg',
        '/portfolio/Vi/project-7-2.jpg',
        '/portfolio/Vi/project-7-3.jpg',
        '/portfolio/Vi/project-7-4.jpg'
      ]
    },
    {
      id: 14,
      title: '品牌VI设计6',
      category: 'Vi',
      description: '企业品牌视觉识别系统设计',
      date: '2023',
      image: '/portfolio/Vi/project-6.jpg',
      images: [
        '/portfolio/Vi/project-6.jpg',
        '/portfolio/Vi/project-6-2.jpg',
        '/portfolio/Vi/project-6-3.jpg',
        '/portfolio/Vi/project-6-4.jpg'
      ]
    },
    {
      id: 13,
      title: '品牌VI设计5',
      category: 'Vi',
      description: '企业品牌视觉识别系统设计',
      date: '2023',
      image: '/portfolio/Vi/project-5.jpg',
      images: [
        '/portfolio/Vi/project-5.jpg',
        '/portfolio/Vi/project-5-1.jpg',
        '/portfolio/Vi/project-5-2.jpg',
        '/portfolio/Vi/project-5-3.jpg',
        '/portfolio/Vi/project-5-4.jpg'
      ]
    },
    {
      id: 12,
      title: '品牌VI设计4',
      category: 'Vi',
      description: '企业品牌视觉识别系统设计',
      date: '2022',
      image: '/portfolio/Vi/project-4.jpg',
      images: [
        '/portfolio/Vi/project-4.jpg',
        '/portfolio/Vi/project-4-2.jpg',
        '/portfolio/Vi/project-4-3.jpg'
      ]
    },
    {
      id: 11,
      title: '品牌VI设计3',
      category: 'Vi',
      description: '企业品牌视觉识别系统设计',
      date: '2022',
      image: '/portfolio/Vi/project-3.jpg',
      images: [
        '/portfolio/Vi/project-3.jpg',
        '/portfolio/Vi/project-3-2.jpg'
      ]
    },
    {
      id: 10,
      title: '品牌VI设计2',
      category: 'Vi',
      description: '企业品牌视觉识别系统设计',
      date: '2022',
      image: '/portfolio/Vi/project-2.jpg',
      images: [
        '/portfolio/Vi/project-2.jpg',
        '/portfolio/Vi/project-2-2.jpg',
        '/portfolio/Vi/project-2-3.jpg'
      ]
    },
    {
      id: 9,
      title: '品牌VI设计1',
      category: 'Vi',
      description: '企业品牌视觉识别系统设计',
      date: '2021',
      image: '/portfolio/Vi/project-1.jpg',
      images: [
        '/portfolio/Vi/project-1.jpg',
        '/portfolio/Vi/project-1-2.jpg',
        '/portfolio/Vi/project-1-3.jpg'
      ]
    },
    {
      id: 8,
      title: '企业宣传视频',
      category: '动画/视频',
      description: '生动展现企业文化与价值理念的宣传片制作',
      date: '2023',
      video: '/portfolio/Animation_Video/project-1.mp4',
      preview_image: '/portfolio/Animation_Video/project-1-preview.jpg'
    },
    {
      id: 7,
      title: '宣传册设计3',
      category: '宣传册/书籍',
      description: '企业宣传册设计方案',
      date: '2023',
      image: '/portfolio/Brochure_Book/project-3.jpg',
      images: [
        '/portfolio/Brochure_Book/project-3.jpg'
      ]
    },
    {
      id: 6,
      title: '宣传册设计2',
      category: '宣传册/书籍',
      description: '产品宣传册设计方案',
      date: '2022',
      image: '/portfolio/Brochure_Book/project-2.jpg',
      images: [
        '/portfolio/Brochure_Book/project-2.jpg',
        '/portfolio/Brochure_Book/project-2-2.jpg',
        '/portfolio/Brochure_Book/project-2-3.jpg'
      ]
    },
    {
      id: 5,
      title: '宣传册设计1',
      category: '宣传册/书籍',
      description: '企业宣传册设计方案',
      date: '2022',
      image: '/portfolio/Brochure_Book/project-1.jpg',
      images: [
        '/portfolio/Brochure_Book/project-1.jpg',
        '/portfolio/Brochure_Book/project-1-2.jpg',
        '/portfolio/Brochure_Book/project-1-3.jpg'
      ]
    },
    {
      id: 4,
      title: '品牌形象设计2',
      category: '形象设计',
      description: '企业品牌形象设计方案',
      date: '2022',
      image: '/portfolio/Brand_Image/project-2.jpg',
      images: [
        '/portfolio/Brand_Image/project-2.jpg'
      ]
    },
    {
      id: 3,
      title: '品牌形象设计1',
      category: '形象设计',
      description: '企业品牌形象设计方案',
      date: '2021',
      image: '/portfolio/Brand_Image/project-1.jpg',
      images: [
        '/portfolio/Brand_Image/project-1.jpg',
        '/portfolio/Brand_Image/project-1-2.jpg'
      ]
    },
    {
      id: 2,
      title: 'App界面设计',
      category: 'App/Web',
      description: '移动应用界面设计方案',
      date: '2021',
      image: '/portfolio/App_Web/project-1.jpg',
      images: [
        '/portfolio/App_Web/project-1.jpg'
      ]
    },
    {
      id: 1,
      title: '插画设计',
      category: '插画',
      description: '创意插画设计作品',
      date: '2021',
      image: '/portfolio/Illustration/project-1.jpg',
      images: [
        '/portfolio/Illustration/project-1.jpg',
        '/portfolio/Illustration/project-1-2.jpg',
        '/portfolio/Illustration/project-1-3.jpg',
        '/portfolio/Illustration/project-1-4.jpg'
      ]
    }
  ];

  const filteredProjects = activeFilter === '全部'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <PortfolioContainer>
      <PortfolioHeader>
        <Title>作品集</Title>
      </PortfolioHeader>

      <FilterContainer>
        {filters.map(filter => (
          <FilterButton
            key={filter}
            active={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {filter}
          </FilterButton>
        ))}
      </FilterContainer>

      <ProjectGrid>
        {filteredProjects.map(project => (
          <ProjectCard
            key={project.id}
            onClick={() => navigate(`/portfolio/${project.id}`)}
          >
            <ProjectMedia>
              {project.video ? (
                <video src={project.video} autoPlay loop muted playsInline />
              ) : (
                <img src={project.image} alt={project.title} />
              )}
            </ProjectMedia>
            <ProjectInfo>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectCategory>{project.category}</ProjectCategory>
            </ProjectInfo>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </PortfolioContainer>
  );
};

export default Portfolio;