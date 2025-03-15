import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FooterContainer = styled.footer`
  padding: 2rem;
  background: #f8f9fa;
  margin-top: 4rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: #333;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled(motion.a)`
  color: #666;
  text-decoration: none;
  
  &:hover {
    color: #333;
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #eee;
  color: #666;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>关于我们</h3>
          <p>专注于创意设计和用户体验，为客户提供优质的设计解决方案。</p>
        </FooterSection>
        <FooterSection>
          <h3>联系方式</h3>
          <p>邮箱：contact@akiyoshi.design</p>
          <p>电话：+86 123 4567 8900</p>
        </FooterSection>
        <FooterSection>
          <h3>社交媒体</h3>
          <SocialLinks>
            <SocialLink
              href="https://weibo.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              微博
            </SocialLink>
            <SocialLink
              href="https://behance.net"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              Behance
            </SocialLink>
            <SocialLink
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              Dribbble
            </SocialLink>
          </SocialLinks>
        </FooterSection>
      </FooterContent>
      <Copyright>
        © {currentYear} Akiyoshi Design. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;