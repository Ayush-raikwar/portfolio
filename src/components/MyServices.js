import React from "react";
import styled from "styled-components";
import { FaMobileAlt, FaPaintBrush, FaCode, FaCogs, FaBrain } from "react-icons/fa";

const services = [
  {
    icon: <FaMobileAlt />,
    title: "Mobile App Development",
    description: "Creating cross-platform mobile applications with React Native for Android & iOS."
  },
  {
    icon: <FaCogs />,
    title: "Skills & Tools",
    description: "Proficient in React Native, ReactJS, Google APIs, Git, and Agile methodologies."
  },
  {
    icon: <FaBrain />,
    title: "AI Integration",
    description: "Experienced in integrating AI solutions, such as ChatGPT or Gemini AI within React Native applications, as well as incorporating the Google ML Kit native library."
  },
  {
    icon: <FaCode />,
    title: "Web Development",
    description: "Building responsive and scalable web applications using React.js and React Native."
  },
  {
    icon: <FaPaintBrush />,
    title: "UI/UX Design",
    description: "Designing intuitive and engaging user interfaces with a focus on seamless user experience."
  },
];

const Section = styled.section`
  padding: 4rem 0;
  background: linear-gradient(135deg, #0a0f1a, #16213e);
  text-align: center;
  color: white;
  position: relative;
  overflow: hidden;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0) 70%);
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  margin-bottom: 2rem;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const ServiceCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  color: #ffdd57;
`;

const ServiceTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 1rem;
  color: #fff;
`;

const Description = styled.p`
  color: #ddd;
  margin-top: 0.5rem;
`;

export const MyServices = () => {
  return (
    <Section>
      <Title>My Services</Title>
      <Container>
        {services.map((service, index) => (
          <ServiceCard key={index}>
            <IconWrapper>{service.icon}</IconWrapper>
            <ServiceTitle>{service.title}</ServiceTitle>
            <Description>{service.description}</Description>
          </ServiceCard>
        ))}
      </Container>
    </Section>
  );
};
