import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const DetailContainer = styled.div`
  padding: calc(var(--spacing-xl) * 2) var(--spacing-lg);
  max-width: var(--breakpoint-desktop);
  margin: 0 auto;
`;

const BackButton = styled(motion.button)`
  background: var(--color-accent);
  color: white;
  border: none;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: 20px;
  cursor: pointer;
  margin-bottom: var(--spacing-xl);
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
`;

const ProjectHeader = styled.div`
  margin-bottom: var(--spacing-xl);
`;

const ProjectTitle = styled.h1`
  font-size: 2.5rem;
  color: var(--color-primary);
  margin-bottom: var(--spacing-md);
`;

const ProjectInfo = styled.div`
  display: flex;
  gap: var(--spacing-md);
  color: var(--color-text);
  margin-bottom: var(--spacing-lg);
`;

const ProjectCategory = styled.span`
  color: var(--color-accent);
`;

const ProjectDate = styled.span`
  color: var(--color-text-light);
`;

const ProjectDescription = styled.p`
  color: var(--color-text);
  line-height: 1.6;
  margin-bottom: var(--spacing-xl);
`;

const MediaContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto var(--spacing-xl);
  border-radius: 8px;
  overflow: hidden;
  background: var(--color-background-light);
`;

const MediaWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 aspect ratio */
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Media = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img, video {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform 0.3s ease;
  }
`;

const NavigationButton = styled(motion.button)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: var(--spacing-md);
  cursor: pointer;
  z-index: 2;
  
  &:first-child {
    left: var(--spacing-md);
  }
  
  &:last-child {
    right: var(--spacing-md);
  }
`;

const ThumbnailContainer = styled.div`
  display: flex;
  gap: var(--spacing-sm);
  overflow-x: auto;
  padding: var(--spacing-sm);
  margin-top: var(--spacing-md);
`;

const Thumbnail = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  opacity: ${props => props.active ? 1 : 0.6};
  transition: opacity 0.3s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    opacity: 0.8;
  }
`;

const PortfolioDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentProject, setCurrentProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const projects = window.projects || [];
    const project = projects.find(p => p.id === parseInt(id));
    if (project) {
      setCurrentProject(project);
    } else {
      navigate('/portfolio');
    }
  }, [id, navigate]);

  if (!currentProject) return null;

  const handlePrevImage = () => {
    setCurrentImageIndex(prev => 
      prev === 0 ? currentProject.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex(prev =>
      prev === currentProject.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <DetailContainer>
      <BackButton
        onClick={() => navigate('/portfolio')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        ← 返回作品集
      </BackButton>

      <ProjectHeader>
        <ProjectTitle>{currentProject.title}</ProjectTitle>
        <ProjectInfo>
          <ProjectCategory>{currentProject.category}</ProjectCategory>
          <ProjectDate>{currentProject.date}</ProjectDate>
        </ProjectInfo>
        <ProjectDescription>{currentProject.description}</ProjectDescription>
      </ProjectHeader>

      <MediaContainer>
        <MediaWrapper>
          <AnimatePresence mode="wait">
            {currentProject.video ? (
              <Media
                key="video"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <video
                  src={currentProject.video}
                  controls
                  poster={currentProject.preview_image}
                />
              </Media>
            ) : (
              <Media
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={currentProject.images[currentImageIndex]}
                  alt={`${currentProject.title} - ${currentImageIndex + 1}`}
                />
              </Media>
            )}
          </AnimatePresence>

          {!currentProject.video && currentProject.images.length > 1 && (
            <>
              <NavigationButton
                onClick={handlePrevImage}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ←
              </NavigationButton>
              <NavigationButton
                onClick={handleNextImage}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                →
              </NavigationButton>
            </>
          )}
        </MediaWrapper>

        {!currentProject.video && currentProject.images.length > 1 && (
          <ThumbnailContainer>
            {currentProject.images.map((image, index) => (
              <Thumbnail
                key={index}
                active={index === currentImageIndex}
                onClick={() => setCurrentImageIndex(index)}
              >
                <img src={image} alt={`${currentProject.title} - ${index + 1}`} />
              </Thumbnail>
            ))}
          </ThumbnailContainer>
        )}
      </MediaContainer>
    </DetailContainer>
  );
};

export default PortfolioDetail;