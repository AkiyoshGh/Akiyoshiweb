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
      description: '从品牌策略到视觉识别系统的全方位设计服务，创造独有视觉体验。'
    },
    {
      title: 'UI/UX设计',
      description: '以用户为中心的界面设计，提供直观、流畅的交互体验。'
    },
    {
      title: '插画设计',
      description: '创作独特的商业插画，为品牌注入艺术气息和视觉活力。'
    },
    {
      title: '包装设计',
      description: '了解工艺材质，是懂产品的包装品牌设计。'
    }
  ];

  return (
    <AboutContainer>
      <AboutHeader>
        <Title>关于我</Title>
        <Subtitle>
          热衷于创造独特的视觉体验和有价值的设计
        </Subtitle>
      </AboutHeader>

      <ContentSection>
        <ProfileSection>
          <ProfileImage src="/images/profile.jpg" alt="Akiyoshi" />
          <ProfileBio>
            你好，我是Akiyoshi。我一名平面设计师。专注于各类文化品牌设计、创意创作，
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