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

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-lg);
  margin-top: var(--spacing-xl);
`;

const TeamMember = styled(motion.div)`
  text-align: center;
`;

const MemberImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: var(--spacing-md);
  object-fit: cover;
`;

const MemberName = styled.h3`
  font-size: 1.2rem;
  color: var(--color-primary);
  margin-bottom: var(--spacing-xs);
`;

const MemberRole = styled.p`
  color: var(--color-accent);
  font-size: 0.9rem;
  margin-bottom: var(--spacing-sm);
`;

const MemberBio = styled.p`
  color: var(--color-text-light);
  font-size: 0.9rem;
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
  const team = [
    {
      name: '山田 明',
      role: '创意总监',
      bio: '拥有超过10年的设计经验，专注于品牌策略和用户体验设计。',
      image: '/team/member1.jpg'
    },
    {
      name: '李 静',
      role: 'UI/UX设计师',
      bio: '擅长移动应用界面设计，注重用户交互体验的优化与创新。',
      image: '/team/member2.jpg'
    },
    {
      name: '张 伟',
      role: '视觉设计师',
      bio: '专注于品牌视觉识别系统设计，擅长将品牌理念转化为视觉语言。',
      image: '/team/member3.jpg'
    }
  ];

  const services = [
    {
      title: '品牌设计',
      description: '从品牌策略到视觉识别系统的全方位设计服务，帮助企业建立独特的品牌形象。'
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
      title: '动效设计',
      description: '通过精心设计的动画效果，提升用户体验和界面表现力。'
    }
  ];

  return (
    <AboutContainer>
      <AboutHeader>
        <Title>关于我们</Title>
        <Subtitle>
          我们是一支充满激情的设计团队，致力于为客户创造独特的视觉体验和有价值的设计解决方案。
        </Subtitle>
      </AboutHeader>

      <ContentSection>
        <SectionTitle>我们的团队</SectionTitle>
        <TeamGrid>
          {team.map((member, index) => (
            <TeamMember
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <MemberImage src={member.image} alt={member.name} />
              <MemberName>{member.name}</MemberName>
              <MemberRole>{member.role}</MemberRole>
              <MemberBio>{member.bio}</MemberBio>
            </TeamMember>
          ))}
        </TeamGrid>
      </ContentSection>

      <ContentSection>
        <SectionTitle>我们的服务</SectionTitle>
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