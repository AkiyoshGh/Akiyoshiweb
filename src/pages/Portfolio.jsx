import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

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
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const ProjectInfo = styled.div`
  padding: var(--spacing-md);
`;

const ProjectTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: var(--spacing-sm);
  color: var(--color-primary);
`;

const ProjectCategory = styled.span`
  font-size: 0.9rem;
  color: var(--color-accent);
  margin-bottom: var(--spacing-sm);
  display: block;
`;

const ProjectDescription = styled.p`
  color: var(--color-text-light);
  font-size: 0.9rem;
  margin-bottom: 0;
`;

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = React.useState('全部');

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
            whileHover={{ y: -10 }}
          >
            <ProjectImage src={project.image} alt={project.title} />
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