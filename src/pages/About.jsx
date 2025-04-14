import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled.div`
  padding: calc(var(--spacing-xl) * 2) var(--spacing-lg);
  max-width: var(--breakpoint-desktop);
  margin: 0 auto;
`;

const AboutHeader = styled.div`
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

const ContentSection = styled.section`
  margin-bottom: var(--spacing-xl);
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: var(--color-primary);
  margin-bottom: var(--spacing-lg);
  text-align: center;
`;

const ProfileSection = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: var(--spacing-lg);
  object-fit: cover;
`;

const ProfileBio = styled.p`
  color: var(--color-text);
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: var(--spacing-xl);
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
`;

const ServiceCard = styled(motion.div)`
  padding: var(--spacing-lg);
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ServiceTitle = styled.h3`
  font-size: 1.2rem;
  color: var(--color-primary);
  margin-bottom: var(--spacing-sm);
`;

const ServiceDescription = styled.p`
  color: var(--color-text-light);
  font-size: 0.9rem;
`;

const About = () => {
  const services = [
    {
      title: '品牌设计',
      description: '从视觉语言构建品牌灵魂，从LOGO到VI系统精准传递品牌内核。通过战略定位、形象升级、市场差异化、打造深入人心的品牌符号。'
    },
    {
      title: 'UI/UX设计',
      description: '用科学设计驱动商业增长，构建「用户愿用、爱用」的数字产品。基于用户行为研究与交互逻辑优化，打造直观流畅的洁面体验。'
    },
    {
      title: '插画设计',
      description: '用画笔讲述品牌故事，定制专属视觉记忆点。结合品牌调性创作商业插画、为数字与实体媒介注入艺术生命力。'
    },
    {
      title: '包装设计',
      description: '让产品开口说话的第一媒介，创造货架吸引力与开箱仪式感。从创新到视觉设计，兼顾实用性与美学价值。'
    }
  ];

  return (
    <AboutContainer>
      <AboutHeader>
        <Title>关于我们</Title>
        <Subtitle>
          一家注重生活美学，专注做好每个品牌本质的设计公司。
        </Subtitle>
      </AboutHeader>

      <ContentSection>
        <ProfileSection>
          <ProfileImage src="/images/profile.jpg" alt="Akiyoshi" />
          <ProfileBio>
            您好，这里是秋喆设计。专注于各类品牌设计、创意创作，
            致力打磨优秀作品。我相信优秀的设计不仅能传达信息，更能创造价值，
            期待能与您合作，共同打造出色的作品。
          </ProfileBio>
        </ProfileSection>
      </ContentSection>

      <ContentSection>
        <SectionTitle>我的服务</SectionTitle>
        <ServiceGrid>
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceCard>
          ))}
        </ServiceGrid>
      </ContentSection>
    </AboutContainer>
  );
};

export default About;