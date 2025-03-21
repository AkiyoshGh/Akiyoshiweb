import React, { useState, lazy, Suspense } from 'react';
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
    loading: lazy;
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
  const [projects] = useState(window.projects);

  const filteredProjects = React.useMemo(() => 
    activeFilter === '全部' ? projects : projects.filter(project => project.category === activeFilter)
  , [activeFilter, projects]);

  const renderProjectMedia = (project) => (
    <ProjectMedia>
      {project.video ? (
        <video 
          src={project.video} 
          poster={project.preview_image}
          autoPlay 
          loop 
          muted 
          playsInline 
          loading="lazy"
        />
      ) : (
        <img 
          src={project.images[0]} 
          alt={project.title} 
          loading="lazy"
          decoding="async"
        />
      )}
    </ProjectMedia>
  );

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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {renderProjectMedia(project)}
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