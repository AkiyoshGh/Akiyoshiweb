import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const BlogContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-xl) var(--spacing-lg);
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--spacing-lg);
`;

const BlogCard = styled(motion.article)`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const BlogImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const BlogContent = styled.div`
  padding: var(--spacing-md);
`;

const BlogTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: var(--spacing-sm);
  color: var(--color-primary);
`;

const BlogExcerpt = styled.p`
  color: var(--color-text-light);
  margin-bottom: var(--spacing-md);
  line-height: 1.6;
`;

const BlogMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-text-light);
  font-size: 0.9rem;
`;

const ReadMore = styled(Link)`
  color: var(--color-accent);
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

const BlogList = ({ posts }) => {
  return (
    <BlogContainer>
      <BlogGrid>
        {posts.map((post) => (
          <BlogCard
            key={post.id}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <BlogImage src={post.image} alt={post.title} />
            <BlogContent>
              <BlogTitle>{post.title}</BlogTitle>
              <BlogExcerpt>{post.excerpt}</BlogExcerpt>
              <BlogMeta>
                <span>{post.date}</span>
                <ReadMore to={`/blog/${post.id}`}>阅读更多</ReadMore>
              </BlogMeta>
            </BlogContent>
          </BlogCard>
        ))}
      </BlogGrid>
    </BlogContainer>
  );
};

export default BlogList;