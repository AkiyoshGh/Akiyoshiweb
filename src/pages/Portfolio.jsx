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
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
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

const ProjectDescription = styled.p`
  color: var(--color-text);
  font-size: 0.9rem;
`;

const Portfolio = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('全部');

  const filters = ['全部', 'UI设计', '品牌设计', '插画', '动效设计'];

  const projects = [
    {
      id: 1,
      title: '电商App界面设计',
      category: 'UI设计',
      description: '为新零售电商平台打造的现代化移动应用界面设计',
      image: '/portfolio/project1.jpg'
    },
    {
      id: 2,
      title: '品牌视觉识别系统',
      category: '品牌设计',
      description: '为科技初创公司设计的完整品牌视觉识别系统',
      image: '/portfolio/project2.jpg'
    },
    {
      id: 3,
      title: '插画系列作品',
      category: '插画',
      description: '以未来主义为主题的商业插画系列',
      image: '/portfolio/project3.jpg'
    },
    {
      id: 4,
      title: '交互动效设计',
      category: '动效设计',
      description: '为移动应用设计的流畅交互动效',
      image: '/portfolio/project4.jpg'
    },
    {
      id: 5,
      title: '移动应用UI设计',
      category: 'UI设计',
      description: '专注用户体验的移动应用界面设计方案',
      image: '/portfolio/project5.jpg'
    },
    {
      id: 6,
      title: '企业品牌形象设计',
      category: '品牌设计',
      description: '现代企业品牌视觉形象整体解决方案',
      image: '/portfolio/project6.jpg'
    },
    {
      id: 7,
      title: '创意插画设计',
      category: '插画',
      description: '独特风格的创意插画艺术作品',
      image: '/portfolio/project7.jpg'
    },
    {
      id: 8,
      title: '网页交互动效',
      category: '动效设计',
      description: '为网站设计的精美交互动效方案',
      image: '/portfolio/project8.jpg'
    },
    {
      id: 9,
      title: '社交媒体UI设计',
      category: 'UI设计',
      description: '现代社交平台的用户界面设计',
      image: '/portfolio/project9.jpg'
    },
    {
      id: 10,
      title: '品牌包装设计',
      category: '品牌设计',
      description: '创新产品包装视觉设计方案',
      image: '/portfolio/project10.jpg'
    },
    {
      id: 11,
      title: '概念插画创作',
      category: '插画',
      description: '科幻主题概念艺术插画系列',
      image: '/portfolio/project11.jpg'
    },
    {
      id: 12,
      title: '页面转场动效',
      category: '动效设计',
      description: '流畅的页面切换动画效果设计',
      image: '/portfolio/project12.jpg'
    },
    {
      id: 13,
      title: '金融App界面设计',
      category: 'UI设计',
      description: '专业金融应用的用户界面设计',
      image: '/portfolio/project13.jpg'
    },
    {
      id: 14,
      title: '活动主视觉设计',
      category: '品牌设计',
      description: '大型活动的品牌视觉设计',
      image: '/portfolio/project14.jpg'
    },
    {
      id: 15,
      title: '儿童绘本插画',
      category: '插画',
      description: '温馨有趣的儿童故事插画',
      image: '/portfolio/project15.jpg'
    },
    {
      id: 16,
      title: '图标动效设计',
      category: '动效设计',
      description: '生动的图标动画效果设计',
      image: '/portfolio/project16.jpg'
    },
    {
      id: 17,
      title: '旅行App设计',
      category: 'UI设计',
      description: '旅行应用的用户体验设计',
      image: '/portfolio/project17.jpg'
    },
    {
      id: 18,
      title: '节日品牌设计',
      category: '品牌设计',
      description: '节日主题的品牌视觉设计',
      image: '/portfolio/project18.jpg'
    },
    {
      id: 19,
      title: '商业插画设计',
      category: '插画',
      description: '商业广告插画作品系列',
      image: '/portfolio/project19.jpg'
    },
    {
      id: 20,
      title: '加载动画设计',
      category: '动效设计',
      description: '创意的加载状态动画设计',
      image: '/portfolio/project20.jpg'
    },
    {
      id: 21,
      title: '音乐App界面',
      category: 'UI设计',
      description: '音乐播放器的界面设计方案',
      image: '/portfolio/project21.jpg'
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => navigate(`/portfolio/${project.id}`)}
            style={{ cursor: 'pointer' }}
          >
            <ProjectImage
              src={project.image}
              alt={project.title}
            />
            <ProjectInfo>
              <ProjectCategory>{project.category}</ProjectCategory>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
            </ProjectInfo>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </PortfolioContainer>
  );
};

export default Portfolio;