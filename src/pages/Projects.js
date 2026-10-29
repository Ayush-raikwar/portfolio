import React from 'react'
import styled from 'styled-components';
import { FaTasks, FaHome, FaGraduationCap, FaGlobeAmericas, FaMobileAlt, FaGithub, FaExternalLinkAlt, FaShieldAlt, FaBuilding, FaGooglePlay, FaApple } from 'react-icons/fa';
import { styles } from '../utils/commonStyles';
import { constants } from '../utils/constants';
import { Helmet } from 'react-helmet';
import { GlassTitle } from '../components/GlassTitle';
import { PrimaryButton, GhostButton } from '../components/Buttons';
import { Footer } from '../components/Footer';
import { nowFonts, starryBackground, glassCard } from '../utils/pageStyles';

/* Icons + gradients for projects without a cover image (`cover` key in constants) */
const COVERS = {
  tasks: { icon: FaTasks, gradient: 'linear-gradient(135deg, #3b2a7a 0%, #6d4bd8 55%, #b79cff 100%)' },
  home: { icon: FaHome, gradient: 'linear-gradient(135deg, #0f4c5c 0%, #1f8a8a 55%, #7fd8c9 100%)' },
  learning: { icon: FaGraduationCap, gradient: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 55%, #93c5fd 100%)' },
  globe: { icon: FaGlobeAmericas, gradient: 'linear-gradient(135deg, #7c2d12 0%, #ea580c 55%, #fdba74 100%)' },
  // insurance apps (shield shows if the app icon can't load)
  typtap: { icon: FaShieldAlt, gradient: 'linear-gradient(135deg, #0b3b4f 0%, #0e7490 55%, #67e8f9 100%)' },
  hcpci: { icon: FaHome, gradient: 'linear-gradient(135deg, #0c2a5b 0%, #1d4ed8 55%, #7dd3fc 100%)' },
  tailrow: { icon: FaShieldAlt, gradient: 'linear-gradient(135deg, #1e1b4b 0%, #4338ca 55%, #a5b4fc 100%)' },
  praxis: { icon: FaShieldAlt, gradient: 'linear-gradient(135deg, #064e3b 0%, #059669 55%, #6ee7b7 100%)' },
  core: { icon: FaBuilding, gradient: 'linear-gradient(135deg, #1f2937 0%, #334155 50%, #38bdf8 100%)' },
};
const DEFAULT_COVER = { icon: FaMobileAlt, gradient: 'linear-gradient(135deg, #1f2937, #4b5563)' };

export default function Projects() {

  return (
    <>
      <Helmet>
        <title>Best React Native & Mobile App Developer in Central India</title>
        <meta name="description" content="Looking for a freelance React or React Native developer in Bhopal or India? Let's build stunning apps together!" />
        <meta name="keywords" content="React Native Developer Bhopal, Mobile App Developer India, Freelance React Developer, Website Developer Bhopal" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://asr-dev.vercel.app/" />
      </Helmet>
      <Container>
        <PageContainer>
          <GlassTitle as="h1">My Recent Works</GlassTitle>
          <Subtitle>Apps and web products I’ve built for clients and for myself — from home insurance and health & fitness to learning and Web3.</Subtitle>
          <ProjectsGrid>
            {constants.projects.map((project) => {
              const cover = COVERS[project.cover] || DEFAULT_COVER;
              const CoverIcon = cover.icon;
              return (
                <ProjectCard key={project.title}>
                  <ImgContainer style={!project.imgUrl ? { background: cover.gradient } : undefined}>
                    {project.imgUrl
                      ? <ProjectImage src={project.imgUrl} alt={project.title} loading="lazy" />
                      : (
                        <CoverBadge $logo={!!project.logo}>
                          <CoverIcon />
                          {project.logo && (
                            <img
                              src={project.logo}
                              alt=""
                              loading="lazy"
                              onError={(e) => { e.currentTarget.style.display = 'none'; }}
                            />
                          )}
                        </CoverBadge>
                      )}
                    <TypeChip $personal={project.personal}>
                      {project.personal ? 'Personal project' : 'Client project'}
                    </TypeChip>
                  </ImgContainer>
                  <ProjectContent>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <ProjectDescription>{project.description}</ProjectDescription>
                    {project.tags?.length > 0 && (
                      <Tags>
                        {project.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
                      </Tags>
                    )}
                    {(project.github || project.demo || project.playStore || project.appStore) && (
                      <ButtonGroup>
                        {project.playStore && <StoreButton href={project.playStore} target="_blank" rel="noopener noreferrer"><FaGooglePlay /> Google Play</StoreButton>}
                        {project.appStore && <StoreButton href={project.appStore} target="_blank" rel="noopener noreferrer"><FaApple /> App Store</StoreButton>}
                        {project.github && <StoreButton href={project.github} target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</StoreButton>}
                        {project.demo && <PrimaryButton href={project.demo} target="_blank" rel="noopener noreferrer">Live demo <FaExternalLinkAlt /></PrimaryButton>}
                      </ButtonGroup>
                    )}
                  </ProjectContent>
                </ProjectCard>
              );
            })}
          </ProjectsGrid>

          <Cta>
            <CtaText>Have an app idea or need a React Native developer?</CtaText>
            <PrimaryButton href={constants.social_links.mail}>Let’s build it together</PrimaryButton>
          </Cta>
        </PageContainer>
      </Container>
      <Footer />
    </>
  )
}


const Container = styled.div`
  ${nowFonts}
  ${starryBackground}
  color: ${styles.colors.white};
  min-height: 100vh;
`

const PageContainer = styled.div`
  width: min(1200px, 100%);
  box-sizing: border-box;
  margin: 0 auto;
  padding: 8rem 2rem 5rem;
  text-align: center;

  @media (max-width: 600px) {
    padding: 6rem 1rem 4rem;
  }
  /* portrait phones use the bottom tab bar, so no top-nav gap */
  @media (max-width: 768px) and (orientation: portrait) {
    padding-top: calc(1.5rem + env(safe-area-inset-top, 0px));
  }
`;

const Subtitle = styled.p`
  font-family: 'Now-font-reg';
  font-size: 1.1rem;
  line-height: 1.6;
  color: #b8c0cc;
  max-width: 40rem;
  margin: -1rem auto 3.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2.25rem;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 320px), 1fr));
  gap: 2rem;
  text-align: left;

  @media (max-width: 768px) {
    gap: 1.25rem;
  }
`;

const ProjectCard = styled.article`
  ${glassCard}
  display: flex;
  flex-direction: column;
  border-radius: 1.25rem;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(254, 226, 99, 0.45);
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(254, 226, 99, 0.12);
  }
`;

const ImgContainer = styled.div`
  position: relative;
  height: 190px;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 168px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  background: #111827;

  /* soft fade into the card body */
  &::after {
    content: "";
    position: absolute;
    inset: auto 0 0 0;
    height: 45%;
    background: linear-gradient(to bottom, rgba(10, 14, 24, 0), rgba(10, 14, 24, 0.55));
    pointer-events: none;
  }
`

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${ProjectCard}:hover & {
    transform: scale(1.05);
  }
`;

const CoverBadge = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 84px;
  height: 84px;
  border-radius: 24px;
  font-size: 2.3rem;
  color: #fff;
  background: rgba(255, 255, 255, 0.16);
  border: 1px solid rgba(255, 255, 255, 0.35);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
  transition: transform 0.4s ease;

  ${ProjectCard}:hover & {
    transform: scale(1.06) rotate(-3deg);
  }

  /* real app icon sits on top of the fallback icon */
  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const TypeChip = styled.span`
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 1;
  padding: 0.3rem 0.7rem;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${({ $personal }) => ($personal ? '#14110a' : '#fff')};
  background: ${({ $personal }) => ($personal ? styles.colors.theme_default : 'rgba(10, 14, 24, 0.6)')};
  border: 1px solid ${({ $personal }) => ($personal ? 'transparent' : 'rgba(255, 255, 255, 0.25)')};
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
`

const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1.4rem 1.5rem 1.6rem;

  @media (max-width: 768px) {
    padding: 1.15rem 1.15rem 1.3rem;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  color: #fff;
  margin: 0 0 0.6rem;
`;

const ProjectDescription = styled.p`
  font-family: 'Now-font-reg';
  font-size: 0.98rem;
  line-height: 1.6;
  color: #c3cad5;
  margin: 0 0 1.1rem;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-top: auto;
`

const Tag = styled.span`
  padding: 0.28rem 0.65rem;
  border-radius: 999px;
  font-size: 0.78rem;
  color: #fde68a;
  background: rgba(254, 226, 99, 0.08);
  border: 1px solid rgba(254, 226, 99, 0.22);
`

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 1.25rem;
`;

const StoreButton = styled(GhostButton)`
  padding: 0.55rem 1rem;
  font-size: 0.85rem;

  @media (max-width: 480px) {
    flex: 1 1 0;
    min-width: 0;
    padding: 0.65rem 0.5rem;
  }
`;

const Cta = styled.div`
  ${glassCard}
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;
  margin-top: 4rem;
  padding: 1.75rem 2rem;
  border-radius: 1.25rem;
  text-align: left;

  @media (max-width: 600px) {
    justify-content: center;
    text-align: center;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 2.5rem;
    padding: 1.5rem 1.25rem;
    border-color: rgba(254, 226, 99, 0.2);
    > a {
      width: 100%;
      box-sizing: border-box;
    }
  }
`

const CtaText = styled.p`
  font-family: 'Now-font-reg';
  font-size: 1.2rem;
  margin: 0;
`
