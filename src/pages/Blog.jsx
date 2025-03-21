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
      title: '测试中',
      excerpt: '此页面还在测试中，敬请期待',
      date: '2024-01-15',
      image: '/blog/brand.svg'
    },
    {
      id: 2,
      title: '测试中2',
      excerpt: '此页面还在测试中，敬请期待',
      date: '2024-01-10',
      image: '/blog/trend.svg'
    },
    {
      id: 3,
      title: '测试中3',
      excerpt: '此页面还在测试中，敬请期待。',
      date: '2024-01-05',
      image: '/blog/illustration.svg'
    },
    {
      id: 4,
      title: '测试中4',
      excerpt: '此页面还在测试中，敬请期待。',
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