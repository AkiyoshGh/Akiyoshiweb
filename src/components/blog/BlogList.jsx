import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const BlogContainer = styled.div`
  max-width: var(--breakpoint-desktop);
  margin: 0 auto;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BlogCard = styled(motion.article)`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const BlogImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const BlogLinks = styled.div`
  padding: var(--spacing-md);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
`;

const BlogLink = styled(Link)`
  color: var(--color-text);
  text-decoration: none;
  font-size: 1rem;
  padding: var(--spacing-sm) 0;
  border-bottom: 1px solid var(--color-border);
  
  &:hover {
    color: var(--color-primary);
  }
  
  &:last-child {
    border-bottom: none;
  }
`;

const BlogList = ({ posts }) => {
  return (
    <BlogContainer>
      <BlogGrid>
        {posts.map((post) => (
          <BlogCard
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <BlogImage src={post.image} alt={post.title} />
            <BlogLinks>
              <BlogLink to={`/blog/${post.id}`}>2022.09 广州</BlogLink>
              <BlogLink to={`/blog/${post.id}`}>2025.08 北京</BlogLink>
              <BlogLink to={`/blog/${post.id}`}>2010.10 日本</BlogLink>
            </BlogLinks>
          </BlogCard>
        ))}
      </BlogGrid>
    </BlogContainer>
  );
};

export default BlogList;