import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const DetailContainer = styled.div`
  padding: calc(var(--spacing-xl) * 2) var(--spacing-lg);
  max-width: var(--breakpoint-desktop);
  margin: 0 auto;
  background: var(--color-background);
  
  @media (min-width: 768px) {
    padding: calc(var(--spacing-xl) * 3) var(--spacing-xl);
  }
`;

const BackButton = styled(motion.button)`
  background: transparent;
  color: var(--color-text);
  border: 1px solid var(--color-text);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: var(--spacing-xl);
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    background: var(--color-text);
    color: var(--color-background);
  }
`;

const ProjectHeader = styled.div`
  margin-bottom: var(--spacing-lg);
  text-align: left;
  max-width: 800px;
`;

const ProjectTitle = styled.h1`
  font-size: 2rem;
  color: var(--color-text);
  margin-bottom: var(--spacing-md);
  font-weight: 500;
  letter-spacing: 0.05em;
`;

const ProjectInfo = styled.div`
  display: flex;
  gap: var(--spacing-lg);
  color: var(--color-text);
  margin-bottom: var(--spacing-lg);
  font-size: 0.9rem;
`;

const ProjectCategory = styled.span`
  color: var(--color-text-light);
`;

const ProjectDate = styled.span`
  color: var(--color-text-light);
`;

const ProjectDescription = styled.p`
  color: var(--color-text);
  line-height: 1.8;
  margin-top: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
  font-size: 1rem;
  max-width: 800px;
`;

const MediaContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: var(--spacing-xl);
  background: var(--color-background);
  max-width: 1200px; /* 增加最大宽度，与MediaWrapper保持一致 */
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-xl);

  > div {
    width: 100%;
  }
`;

const MediaWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 比例，更适合现代显示设备 */
  overflow: hidden;
  background: var(--color-background-light);
  border-radius: 4px;
  max-width: 1200px; /* 增加最大宽度，使图片显示更大 */
  margin: 0 auto;
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
    object-fit: contain; /* 保持图片比例，确保完整显示 */
    object-position: center;
    max-height: 100%; /* 确保图片不会超出容器 */
  }
`;


const ImageNavigationArea = styled.div`
  position: absolute;
  top: 0;
  width: 50%;
  height: 100%;
  cursor: pointer;
  z-index: 2;
  
  &:first-child {
    left: 0;
  }
  
  &:last-child {
    right: 0;
  }
`;

const ThumbnailContainer = styled.div`
  display: flex;
  gap: var(--spacing-md);
  overflow-x: auto;
  padding: var(--spacing-md);
  margin-top: var(--spacing-md);
  justify-content: center;
  scrollbar-width: thin;
  scrollbar-color: var(--color-text-light) transparent;
  width: 100%;
  max-width: 1200px; /* 增加最大宽度，与MediaWrapper保持一致 */
  margin-left: auto;
  margin-right: auto;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color-text-light);
    border-radius: 3px;
  }
`;

const Thumbnail = styled.div`
  width: 120px;
  height: 68px;
  border-radius: 2px;
  overflow: hidden;
  cursor: pointer;
  opacity: ${props => props.active ? 1 : 0.6};
  transition: all 0.3s ease;
  flex-shrink: 0;
  border: 1px solid ${props => props.active ? 'var(--color-text)' : 'transparent'};

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
      </ProjectHeader>

      <MediaContainer>
        {/* 视频模块 */}
        {currentProject.video && (
          <div>
            <MediaWrapper>
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
            </MediaWrapper>
          </div>
        )}

        {/* 图片模块 */}
        {currentProject.images && currentProject.images.length > 0 && (
          <div>
            <MediaWrapper>
              <AnimatePresence mode="wait">
                <Media
                  key={currentProject.images[currentImageIndex]}
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
              </AnimatePresence>

              {currentProject.images.length > 1 && (
                <>
                  <ImageNavigationArea onClick={handlePrevImage} />
                  <ImageNavigationArea onClick={handleNextImage} />
                </>
              )}
            </MediaWrapper>

            {currentProject.images.length > 1 && (
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
          </div>
        )}
      </MediaContainer>
      <ProjectDescription>{currentProject.description}</ProjectDescription>
    </DetailContainer>
  );
};

export default PortfolioDetail;