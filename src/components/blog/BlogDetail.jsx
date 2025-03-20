import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';

const BlogDetailContainer = styled.article`
  padding: calc(var(--spacing-xl) * 1.5) var(--spacing-xl);
`;

const BlogHeader = styled.header`
  text-align: center;
  margin-bottom: var(--spacing-xl);
`;

const BlogTitle = styled.h1`
  font-size: 2.5rem;
  color: var(--color-primary);
  margin-bottom: var(--spacing-md);
`;

const BlogMeta = styled.div`
  color: var(--color-text-light);
  font-size: 0.9rem;
  margin-bottom: var(--spacing-lg);
`;

const BlogImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: var(--spacing-lg);
`;

const BlogContent = styled.div`
  line-height: 1.8;
  color: var(--color-text);
  
  p {
    margin-bottom: var(--spacing-md);
  }
  
  h2 {
    color: var(--color-primary);
    margin: var(--spacing-lg) 0 var(--spacing-md);
  }
  
  img {
    max-width: 100%;
    border-radius: 4px;
    margin: var(--spacing-md) 0;
  }
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: var(--color-accent);
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  margin-bottom: var(--spacing-md);
  
  &:hover {
    opacity: 0.8;
  }
`;

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // 这里可以根据id获取博客详细内容
  const post = {
    id,
    title: '示例博客标题',
    date: '2024-01-01',
    author: 'Akiyoshi',
    image: '/blog/example.jpg',
    content: '这里是博客的详细内容...'
  };

  return (
    <BlogDetailContainer
      as={motion.article}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <BackButton onClick={() => navigate('/blog')}>
        ← 返回博客列表
      </BackButton>
      <BlogHeader>
        <BlogTitle>{post.title}</BlogTitle>
        <BlogMeta>
          <span>{post.date}</span>
          <span> · </span>
          <span>{post.author}</span>
        </BlogMeta>
      </BlogHeader>
      
      <BlogImage src={post.image} alt={post.title} />
      
      <BlogContent>
        {post.content}
      </BlogContent>
    </BlogDetailContainer>
  );
};

export default BlogDetail;