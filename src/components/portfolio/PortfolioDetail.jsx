import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const DetailContainer = styled.div`
  padding: var(--spacing-xl) var(--spacing-lg);
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  background: var(--color-background);
  
  @media (min-width: 768px) {
    padding: var(--spacing-xl) var(--spacing-xl);
  }
`;

const BackButton = styled(motion.button)`
  background: none;
  border: none;
  color: var(--color-accent);
  padding: var(--spacing-sm) var(--spacing-md);
  cursor: pointer;
  margin-bottom: var(--spacing-xl);
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const ProjectHeader = styled.div`
  margin-bottom: var(--spacing-lg);
  text-align: left;
  max-width: 1200px;
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
  max-width: 1200px;
`;

const MediaContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: var(--spacing-xl);
  background: var(--color-background);
  max-width: 1600px; /* 增加最大宽度 */
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
  max-width: 1600px;
  margin: 0 auto;
  padding: 0;
  overflow: hidden;
`;

const Media = styled(motion.div)`
  width: 100%;
  max-width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 比例 */
  overflow: hidden;
  
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`


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
  max-width: 1600px; /* 增加最大宽度，与MediaWrapper保持一致 */
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
  border: 1px solid ${props => props.active ? 'var(--color-accent)' : 'transparent'};

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
                <VideoContainer>
                  <video
                    src={currentProject.video}
                    controls
                    poster={currentProject.preview_image}
                    preload="metadata"
                    controlsList="nodownload"
                    playsInline
                  />
                </VideoContainer>
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