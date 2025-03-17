import React from 'react';
import styled from 'styled-components';
import BlogList from '../components/blog/BlogList';

const BlogContainer = styled.div`
  padding: calc(var(--spacing-xl) * 2) var(--spacing-lg);
  max-width: var(--breakpoint-desktop);
  margin: 0 auto;
`;

const BlogHeader = styled.div`
  text-align: center;
  margin-bottom: var(--spacing-xl);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: var(--color-primary);
  margin-bottom: var(--spacing-md);
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: var(--color-secondary);
  max-width: 600px;
  margin: 0 auto;
`;

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: '设计趋势探索：2024年UI设计新方向',
      excerpt: '探讨最新的用户界面设计趋势，以及如何在实际项目中应用这些创新理念。',
      date: '2024-01-15',
      image: '/blog/trend.jpg'
    },
    {
      id: 2,
      title: '品牌设计的艺术：从理念到视觉',
      excerpt: '深入解析品牌设计的核心要素，以及如何打造独特的品牌视觉识别系统。',
      date: '2024-01-10',
      image: '/blog/brand.jpg'
    },
    {
      id: 3,
      title: '插画设计：讲述品牌故事的艺术',
      excerpt: '探索商业插画在品牌传播中的应用，以及如何通过插画提升品牌价值。',
      date: '2024-01-05',
      image: '/blog/illustration.jpg'
    },
    {
      id: 4,
      title: '动效设计：让界面栩栩如生',
      excerpt: '探讨如何通过精心设计的动画效果，提升用户体验和界面表现力。',
      date: '2024-01-01',
      image: '/blog/animation.jpg'
    }
  ];

  return (
    <BlogContainer>
      <BlogHeader>
        <Title>博客</Title>
        <Subtitle>
          分享设计思考与经验，探讨行业趋势与创新
        </Subtitle>
      </BlogHeader>
      <BlogList posts={posts} />
    </BlogContainer>
  );
};

export default Blog;