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
      title: '设计工作室的品牌塑造：从概念到实现',
      excerpt: '探讨如何为设计工作室建立独特的品牌形象，以及如何通过视觉设计传达工作室的核心价值。',
      date: '2024-01-15',
      image: '/blog/brand.svg'
    },
    {
      id: 2,
      title: '数字时代的用户体验设计',
      excerpt: '深入分析数字产品的用户体验设计原则，以及如何创造出既美观又实用的界面设计。',
      date: '2024-01-10',
      image: '/blog/trend.svg'
    },
    {
      id: 3,
      title: '创意插画在商业设计中的应用',
      excerpt: '分享如何将创意插画融入商业设计项目，为品牌注入独特的艺术气息和视觉表现力。',
      date: '2024-01-05',
      image: '/blog/illustration.svg'
    },
    {
      id: 4,
      title: '动效设计：提升用户交互体验',
      excerpt: '探索如何通过动效设计增强用户界面的交互体验，使产品更具生命力和吸引力。',
      date: '2024-01-01',
      image: '/blog/animation.svg'
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