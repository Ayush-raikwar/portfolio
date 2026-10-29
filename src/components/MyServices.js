import React, { useRef, useState } from "react";
import styled from "styled-components";
import { FaMobileAlt, FaPaintBrush, FaCode, FaCogs, FaBrain } from "react-icons/fa";
import { GlassTitle } from "./GlassTitle";

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
  padding: 5rem 0 5.5rem;
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
    background:
      radial-gradient(38rem 24rem at 50% 0%, rgba(254, 226, 99, 0.08), rgba(254, 226, 99, 0) 70%),
      radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, rgba(0, 0, 0, 0) 70%);
    pointer-events: none;
  }

  > * {
    position: relative;
  }

  @media (max-width: 768px) {
    padding: 4rem 0 3.5rem;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  /* phones: swipeable carousel with the next card peeking in */
  @media (max-width: 768px) {
    display: flex;
    gap: 0.9rem;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-padding: 0 1.25rem;
    padding: 0.4rem 1.25rem 1.25rem;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
    > * {
      flex: 0 0 80%;
      max-width: 340px;
      box-sizing: border-box;
      scroll-snap-align: start;
    }
  }
`;

const ServiceCard = styled.div`
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.03));
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  border-radius: 1.1rem;
  padding: 1.75rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    border-color: rgba(254, 226, 99, 0.35);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(254, 226, 99, 0.08);
  }
`;

const Dots = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    gap: 6px;
  }
`;

const Dot = styled.button`
  width: ${({ $active }) => ($active ? '22px' : '7px')};
  height: 7px;
  padding: 0;
  border: 0;
  border-radius: 999px;
  cursor: pointer;
  background: ${({ $active }) => ($active ? 'rgb(254, 226, 99)' : 'rgba(255, 255, 255, 0.25)')};
  box-shadow: ${({ $active }) => ($active ? '0 0 10px rgba(254, 226, 99, 0.6)' : 'none')};
  transition: width 0.3s ease, background 0.3s ease;
  -webkit-tap-highlight-color: transparent;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 1rem;
  font-size: 1.6rem;
  color: #ffdd57;
  background: rgba(254, 226, 99, 0.1);
  border: 1px solid rgba(254, 226, 99, 0.22);
  box-shadow: 0 0 24px rgba(254, 226, 99, 0.12);
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
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  // distance between two cards in the mobile carousel
  const step = () => {
    const el = trackRef.current;
    if (!el || el.children.length < 2) return 1;
    return el.children[1].offsetLeft - el.children[0].offsetLeft || 1;
  };

  const handleScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const atEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth - 2;
    setActive(atEnd ? services.length - 1 : Math.round(el.scrollLeft / step()));
  };

  const goTo = (index) => {
    trackRef.current?.scrollTo({ left: index * step(), behavior: 'smooth' });
  };

  return (
    <Section>
      <GlassTitle>My Services</GlassTitle>
      <Container ref={trackRef} onScroll={handleScroll}>
        {services.map((service, index) => (
          <ServiceCard key={index}>
            <IconWrapper>{service.icon}</IconWrapper>
            <ServiceTitle>{service.title}</ServiceTitle>
            <Description>{service.description}</Description>
          </ServiceCard>
        ))}
      </Container>
      <Dots>
        {services.map((service, index) => (
          <Dot
            key={service.title}
            $active={index === active}
            onClick={() => goTo(index)}
            aria-label={`Show ${service.title}`}
          />
        ))}
      </Dots>
    </Section>
  );
};
