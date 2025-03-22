import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FooterContainer = styled.footer`
  padding: 2rem;
  background: #f8f9fa;
  width: 100%;
  margin-top: auto;
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

const QRCode = styled.img`
  width: 150px;
  height: 150px;
  margin-top: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
          <p>深耕品牌文化发展思维，提供优质的设计解决方案。</p>
        </FooterSection>
        <FooterSection>
          <h3>联系方式</h3>
          <p>邮箱：Akiyoshi-design@outlook.com</p>
          <p>电话：+86 17625129139</p>
          <QRCode src="/images/wechat-qr.svg" alt="微信二维码" />
        </FooterSection>
        <FooterSection>
          <h3>社交媒体</h3>
          <SocialLinks>
            <SocialLink
              href="https://www.zcool.com.cn"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              站酷
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