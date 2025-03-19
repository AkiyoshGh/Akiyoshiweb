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

const ProjectDescription = styled.p`
  color: var(--color-text);
  font-size: 0.9rem;
`;

const Portfolio = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('全部');

  const filters = ['全部', 'Vi', 'App/Web', '动画/视频', '宣传册/书籍', '形象设计', '包装', '插画'];

  const projects = [
    {
      id: 1,
      title: '动画效果设计',
      category: '动画/视频',
      description: '创意动画效果设计作品',
      images: [
        '/portfolio/Animation_Video/project-1.jpg'
      ],
      video: '/portfolio/Animation_Video/project-1.mp4'
    },
    {
      id: 2,
      title: '电商App界面设计',
      category: 'App/Web',
      description: '以用户体验为核心的电商平台界面设计，提升购物体验',
      image: '/portfolio/App_Web/project-1.jpg'
    },
    {
      id: 3,
      title: '企业品牌形象设计',
      category: '形象设计',
      description: '打造独特的品牌视觉语言，塑造专业企业形象',
      image: '/portfolio/Brand_Image/project-1.jpg'
    },
    {
      id: 4,
      title: '企业宣传册设计',
      category: '宣传册/书籍',
      description: '精致的排版设计，展现企业专业形象与价值主张',
      image: '/portfolio/Brochure_Book/project-1.jpg'
    },
    {
      id: 5,
      title: '产品画册设计',
      category: '宣传册/书籍',
      description: '优雅的版式与精美的图片展示，突出产品特色',
      image: '/portfolio/Brochure_Book/project-2.jpg'
    },
    {
      id: 6,
      title: '创意插画设计',
      category: '插画',
      description: '富有创意的手绘插画，为品牌传达独特艺术魅力',
      image: '/portfolio/Illustration/project-1.jpg'
    },
    {
      id: 7,
      title: '食品包装设计',
      category: '包装',
      description: '新颖的包装设计，让产品在货架上脱颖而出',
      image: '/portfolio/Packaging/project-1.jpg'
    },
    {
      id: 8,
      title: '化妆品包装设计',
      category: '包装',
      description: '优雅精致的包装设计，彰显品牌高端形象',
      image: '/portfolio/Packaging/project-2.jpg'
    },
    {
      id: 9,
      title: '饮料包装设计',
      category: '包装',
      description: '时尚清新的包装设计，提升产品市场竞争力',
      image: '/portfolio/Packaging/project-3.jpg'
    },
    {
      id: 10,
      title: '礼盒包装设计',
      category: '包装',
      description: '精致典雅的礼盒设计，传递品牌价值与情感',
      image: '/portfolio/Packaging/project-4.jpg'
    },
    {
      id: 11,
      title: '品牌VI设计',
      category: 'Vi',
      description: '全方位的品牌视觉识别系统设计，构建品牌形象',
      image: '/portfolio/Vi/project-1.jpg'
    },
    {
      id: 12,
      title: '餐饮品牌VI',
      category: 'Vi',
      description: '特色鲜明的餐饮品牌设计，打造独特品牌体验',
      image: '/portfolio/Vi/project-2.jpg'
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
              <ProjectDescription>{project.description}</ProjectDescription>
            </ProjectInfo>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </PortfolioContainer>
  );
};

export default Portfolio;