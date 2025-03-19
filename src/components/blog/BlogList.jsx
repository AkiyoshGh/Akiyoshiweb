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
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-lg);
  max-width: var(--breakpoint-desktop);
  margin: 0 auto;
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

const BlogTitle = styled.h3`
  margin-bottom: var(--spacing-sm);
  color: var(--color-primary);
`;

const BlogExcerpt = styled.p`
  color: var(--color-text);
  font-size: 0.9rem;
  margin-bottom: var(--spacing-sm);
`;

const BlogDate = styled.span`
  color: var(--color-secondary);
  font-size: 0.8rem;
`;

const BlogList = ({ posts }) => {
  return (
    <BlogContainer>
      <BlogGrid>
        {posts.map((post) => (
          <Link to={`/blog/${post.id}`} key={post.id} style={{ textDecoration: 'none' }}>
            <BlogCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <BlogImage src={post.image} alt={post.title} />
              <BlogContent>
                <BlogTitle>{post.title}</BlogTitle>
                <BlogExcerpt>{post.excerpt}</BlogExcerpt>
                <BlogDate>{post.date}</BlogDate>
              </BlogContent>
            </BlogCard>
          </Link>
        ))}
      </BlogGrid>
    </BlogContainer>
  );
};

export default BlogList;