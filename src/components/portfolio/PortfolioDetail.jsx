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
  height: auto;
  margin-bottom: var(--spacing-md);
  border-radius: 8px;
  overflow: hidden;
  aspect-ratio: 16/9;
`;

const ProjectMedia = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  video {
    width: 100%;
    height: 100%;
    object-fit: contain;
    background: transparent;
  }
`;

const ThumbnailContainer = styled.div`
  display: flex;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-lg);
  overflow-x: auto;
  padding: var(--spacing-sm) 0;
  justify-content: center;

  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-track {
    background: var(--color-border);
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-accent);
    border-radius: 2px;
  }
`;

const Thumbnail = styled.img`
  width: 120px;
  height: 67.5px;
  object-fit: cover;
  border-radius: 4px;
  cursor: pointer;
  border: 2px solid ${props => props.active ? 'var(--color-accent)' : 'transparent'};
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
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
    title: '动画效果设计',
    category: '动画/视频',
    description: '创意动画效果设计作品',
    images: [
      '/portfolio/Animation_Video/project-1.jpg'
    ],
    video: '/portfolio/Animation_Video/project-1.mp4',
    background: '该项目旨在通过创意动画效果提升用户体验和视觉表现力。',
    process: '从概念设计到最终实现，我们运用了多种动画技术和创意表现手法。',
    outcome: '最终呈现的动画效果获得客户高度认可，并在多个场景中得到应用。'
  },
  {
    id: 2,
    title: '电商App界面设计',
    category: 'App/Web',
    description: '为新零售电商平台打造的现代化移动应用界面设计',
    images: [
      '/portfolio/App_Web/project-1.jpg'
    ],
    background: '该项目旨在重新定义电商购物体验，通过创新的界面设计提升用户体验。',
    process: '设计过程包括用户研究、竞品分析、原型设计和多轮用户测试。',
    outcome: '最终交付的设计方案显著提升了用户满意度和转化率。'
  },
  {
    id: 3,
    title: '企业品牌形象设计',
    category: '形象设计',
    description: '现代企业品牌视觉形象整体解决方案',
    images: [
      '/portfolio/Brand_Image/project-1.jpg',
      '/portfolio/Brand_Image/project-1-2.jpg'
    ],
    background: '为企业打造独特的品牌视觉形象，提升品牌识别度。',
    process: '深入了解企业文化，设计logo、品牌色彩、字体等视觉元素。',
    outcome: '建立了完整的品牌视觉识别系统，提升了品牌形象。'
  },
  {
    id: 4,
    title: '企业宣传册设计',
    category: '宣传册/书籍',
    description: '企业宣传册整体设计方案',
    images: [
      '/portfolio/Brochure_Book/project-1.jpg'
    ],
    background: '通过精美的宣传册设计展示企业形象和产品特色。',
    process: '从内容规划到版式设计，全方位打造专业的企业宣传册。',
    outcome: '宣传册获得客户好评，有效提升了企业形象。'
  },
  {
    id: 5,
    title: '产品画册设计',
    category: '宣传册/书籍',
    description: '产品展示画册设计方案',
    images: [
      '/portfolio/Brochure_Book/project-2.jpg'
    ],
    background: '为客户打造专业的产品展示画册，突出产品特色。',
    process: '精心策划内容布局，融合创意设计元素，打造富有视觉冲击力的画册。',
    outcome: '画册设计获得客户认可，有效提升了产品形象和市场竞争力。'
  },
  {
    id: 6,
    title: '创意插画设计',
    category: '插画',
    description: '独特风格的创意插画艺术作品',
    images: [
      '/portfolio/Illustration/project-1.jpg'
    ],
    background: '创作独特风格的插画作品，展现艺术创意。',
    process: '融合多种艺术表现手法，创作富有个性的插画作品。',
    outcome: '插画作品在多个平台获得好评，建立了独特的艺术风格。'
  },
  {
    id: 7,
    title: '食品包装设计',
    category: '包装',
    description: '食品产品包装整体设计方案',
    images: [
      '/portfolio/Packaging/project-1.jpg'
    ],
    background: '为食品品牌设计独特的包装视觉形象。',
    process: '结合产品特性，设计富有创意的包装视觉元素。',
    outcome: '包装设计提升了产品的市场竞争力，获得消费者好评。'
  },
  {
    id: 8,
    title: '化妆品包装设计',
    category: '包装',
    description: '化妆品系列包装设计',
    images: [
      '/portfolio/Packaging/project-2.jpg'
    ],
    background: '为化妆品品牌打造高端的包装设计。',
    process: '融合时尚元素，设计精致的包装视觉效果。',
    outcome: '包装设计彰显品牌高端形象，提升了产品价值。'
  },
  {
    id: 9,
    title: '饮料包装设计',
    category: '包装',
    description: '饮料产品包装创意设计',
    images: [
      '/portfolio/Packaging/project-3.jpg'
    ],
    background: '为饮料品牌设计富有创意的包装。',
    process: '通过创新的设计理念，打造独特的包装视觉效果。',
    outcome: '包装设计获得市场认可，提升了品牌影响力。'
  },
  {
    id: 10,
    title: '礼盒包装设计',
    category: '包装',
    description: '高端礼盒包装设计方案',
    images: [
      '/portfolio/Packaging/project-4.jpg'
    ],
    background: '为高端礼品打造精致的包装设计。',
    process: '精选材质，融合创意元素，设计富有品质感的礼盒包装。',
    outcome: '礼盒设计展现高端品质，满足客户需求。'
  },
  {
    id: 11,
    title: '品牌VI设计',
    category: 'Vi',
    description: '企业品牌VI系统设计',
    images: [
      '/portfolio/Vi/project-1.jpg'
    ],
    background: '为企业打造专业的品牌视觉识别系统。',
    process: '系统规划品牌视觉元素，建立完整的VI应用规范。',
    outcome: 'VI系统全面提升品牌形象，获得客户认可。'
  },
  {
    id: 12,
    title: '餐饮品牌VI',
    category: 'Vi',
    description: '餐饮行业品牌视觉识别系统',
    images: [
      '/portfolio/Vi/project-2.jpg'
    ],
    background: '为餐饮品牌设计独特的视觉识别系统。',
    process: '深入餐饮文化，设计富有特色的品牌视觉元素。',
    outcome: '品牌VI系统帮助客户在餐饮市场建立独特形象。'
  },
  {
    id: 13,
    title: '教育品牌VI',
    category: 'Vi',
    description: '教育机构品牌视觉识别系统',
    images: [
      '/portfolio/Vi/project-3.jpg',
      '/portfolio/Vi/project-3-2.jpg',
      '/portfolio/Vi/project-3-3.jpg'
    ],
    background: '为教育机构设计专业的品牌视觉系统。',
    process: '结合教育理念，设计富有内涵的品牌视觉元素。',
    outcome: 'VI系统准确传达教育品牌理念，提升品牌价值。'
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
        {project.category === '动画/视频' ? (
          <ProjectMedia>
            <video
              src={project.video}
              autoPlay
              loop
              muted
              playsInline
              controls
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </ProjectMedia>
        ) : (
          <ProjectMedia>
            <img src={project.images[currentImage]} alt={project.title} />
          </ProjectMedia>
        )}
        {project.images.length > 1 && (
          <>
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
          </>
        )}
      </ImageContainer>
      {project.images.length > 1 && (
        <ThumbnailContainer>
          {project.images.map((image, index) => (
            <Thumbnail
              key={index}
              src={image}
              alt={`${project.title} - 预览图 ${index + 1}`}
              active={currentImage === index}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </ThumbnailContainer>
      )}

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