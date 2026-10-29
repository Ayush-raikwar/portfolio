import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { styles } from '../utils/commonStyles';
import { constants } from '../utils/constants';
import aboutAnimation from '../assets/json/about-dev.json'
import { FaCss3Alt, FaGit, FaHtml5, FaGithub, FaGamepad, FaCamera, FaYoutube, FaSwimmer, FaExternalLinkAlt, FaEnvelope, FaArrowRight } from "react-icons/fa";
import { GiJeep } from "react-icons/gi";
import { RiGeminiFill, RiOpenaiFill, RiReactjsFill, RiSupabaseFill } from "react-icons/ri";
import { SiAdobephotoshop, SiMacos, SiPostman, SiRedux, SiTypescript } from "react-icons/si";
import { IoLogoFirebase, IoLogoJavascript, IoLogoVercel } from "react-icons/io5";
import Lottie from 'react-lottie';
import { BiLogoFigma, BiLogoNetlify } from 'react-icons/bi';
import { VscVscodeInsiders } from 'react-icons/vsc';
import { GridComponent } from '../components/GridComponent';
import { TbBrandReactNative } from 'react-icons/tb';
import { FcLinux } from 'react-icons/fc';
import { GitHubGraph } from '../components/GithubGraph';
import { Helmet } from 'react-helmet';
import { GlassTitle } from '../components/GlassTitle';
import { PrimaryButton, GhostButton } from '../components/Buttons';
import { Footer } from '../components/Footer';
import { nowFonts, starryBackground, glassCard } from '../utils/pageStyles';

const ICON = 26;

const skills = [
  { name: "React Native", icon: <TbBrandReactNative size={ICON} color="#61DAFB" /> },
  { name: "TypeScript", icon: <SiTypescript size={ICON} color="#3178C6" /> },
  { name: "React.js", icon: <RiReactjsFill size={ICON} color="#61DAFB" /> },
  { name: "JavaScript", icon: <IoLogoJavascript size={ICON} color="#F7DF1E" /> },
  { name: "Redux", icon: <SiRedux size={ICON} color="#9B6DEB" /> },
  { name: "HTML", icon: <FaHtml5 size={ICON} color="#E34F26" /> },
  { name: "CSS", icon: <FaCss3Alt size={ICON} color="#3B82F6" /> },
];

const tools = [
  { name: "Git", icon: <FaGit size={ICON} color="#F05032" /> },
  { name: "GitHub", icon: <FaGithub size={ICON} color="#FFFFFF" /> },
  { name: "ChatGPT", icon: <RiOpenaiFill size={ICON} color="#FFFFFF" /> },
  { name: "Gemini AI", icon: <RiGeminiFill size={ICON} color="#8E9BFF" /> },
  { name: "Firebase", icon: <IoLogoFirebase size={ICON} color="#FFCA28" /> },
  { name: "Supabase", icon: <RiSupabaseFill size={ICON} color="#3ECF8E" /> },
  { name: "Vercel", icon: <IoLogoVercel size={ICON} color="#FFFFFF" /> },
  { name: "Netlify", icon: <BiLogoNetlify size={ICON} color="#00C7B7" /> },
  { name: "Postman", icon: <SiPostman size={ICON} color="#FF6C37" /> },
  { name: "Figma", icon: <BiLogoFigma size={ICON} color="#F24E1E" /> },
  { name: "VS Code", icon: <VscVscodeInsiders size={ICON} color="#3BA3FF" /> },
  { name: "Photoshop", icon: <SiAdobephotoshop size={ICON} color="#31A8FF" /> },
  { name: "macOS", icon: <SiMacos size={ICON} color="#FFFFFF" /> },
  { name: "Linux", icon: <FcLinux size={ICON} /> },
];

const hobbies = [
  { name: "Gaming", icon: FaGamepad },
  { name: "Photography", icon: FaCamera, href: constants.social_links.photography },
  { name: "Vlogging", icon: FaYoutube, href: constants.social_links.yt },
  { name: "Off-roading", icon: GiJeep },
  { name: "Swimming / Free diving", icon: FaSwimmer },
];

export default function About() {

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: aboutAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const lottieSize = screenWidth > 800 ? 420 : screenWidth <= 480 ? 250 : Math.min(320, screenWidth - 48);

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
        <TopSection>
          <IntroCard>
            <Eyebrow>About me</Eyebrow>
            <Title>Know who <TitleHighlight>I AM</TitleHighlight></Title>

            <Info>👋 Hey, I’m Ayush Raikwar, a tech geek from Bhopal who’s been building with React Native & React.js since 2021. I build <Highlight>high-performance</Highlight> apps, integrate <Highlight>Google APIs</Highlight>, and explore <Highlight>native bridging</Highlight>.</Info>
            <Info>Always up for a challenge — let’s build something epic! 🚀</Info>

            <Actions>
              <PrimaryButton href={constants.social_links.mail}><FaEnvelope /> Let’s talk</PrimaryButton>
              <GhostButton as={Link} to="/projects">See my work <FaArrowRight /></GhostButton>
            </Actions>

            <HobbiesLabel>When I’m not coding</HobbiesLabel>
            <Hobbies>
              {hobbies.map(({ name, icon: Icon, href }) => (
                href
                  ? <HobbyChip key={name} as="a" href={href} target="_blank" rel="noopener noreferrer" $link>
                      <Icon /> {name} <FaExternalLinkAlt className="ext" />
                    </HobbyChip>
                  : <HobbyChip key={name}><Icon /> {name}</HobbyChip>
              ))}
            </Hobbies>
          </IntroCard>

          <AnimationCol>
            <Glow />
            <Lottie options={lottieOptions}
              height={lottieSize}
              width={lottieSize}
            />
          </AnimationCol>
        </TopSection>

        <BottomSection>
          <GlassTitle>Professional <TitleHighlight>Skillset</TitleHighlight></GlassTitle>
          <GridComponent data={skills} />

          <GlassTitle className="spaced">Tools <TitleHighlight>I use</TitleHighlight></GlassTitle>
          <GridComponent data={tools} />
        </BottomSection>

        <GitHubGraph />
      </Container>
      <Footer />
    </>
  )
}

const Container = styled.div`
  ${nowFonts}
  ${starryBackground}
  color: ${styles.colors.white};
  padding: 7rem 0 5rem;

  p {
    font-family: 'Now-font-reg';
  }

  @media (max-width: 800px) {
    padding-top: 5.5rem;
  }
  /* portrait phones use the bottom tab bar, so no top-nav gap */
  @media (max-width: 768px) and (orientation: portrait) {
    padding-top: calc(0.5rem + env(safe-area-inset-top, 0px));
    padding-bottom: 3.5rem;
  }
`;

const TopSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  width: min(1200px, 88%);
  margin: auto;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    gap: 1rem;
    width: calc(100% - 2rem);
  }
  @media (max-width: 768px) {
    gap: 0;
    /* card slides up over the bottom of the illustration */
    > :first-child {
      position: relative;
      z-index: 1;
      margin-top: -1.5rem;
    }
  }
`

const IntroCard = styled.div`
  ${glassCard}
  flex: 1.15;
  max-width: 40rem;
  padding: 2.5rem 2.5rem 2.25rem;
  border-radius: 1.75rem;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 1.75rem 1.25rem;
    border-radius: 1.25rem;
  }
`

const Eyebrow = styled.span`
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${styles.colors.theme_default};
  margin-bottom: 0.5rem;
`

const Title = styled.h1`
  font-size: clamp(2rem, 3.6vw, 2.8rem);
  font-weight: 300;
  margin: 0 0 1.25rem;
  line-height: 1.15;
`

const TitleHighlight = styled.span`
  font-weight: 700;
  color: ${styles.colors.theme_default};
  text-shadow: 0 0 22px rgba(254, 226, 99, 0.35);
`

const Info = styled.p`
  font-size: 1.05rem;
  line-height: 1.7;
  color: #e5e7eb;
  margin: 0 0 1rem;
`

const Highlight = styled.span`
  color: ${styles.colors.theme_default};
`

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  margin: 1.75rem 0 2rem;

  @media (max-width: 480px) {
    gap: 0.7rem;
    margin: 1.5rem 0 1.75rem;
    > * {
      flex: 1 1 0;
      min-width: 0;
      padding-left: 0.6rem;
      padding-right: 0.6rem;
      white-space: nowrap;
    }
  }
  @media (max-width: 380px) {
    > * {
      font-size: 0.88rem;
    }
  }
`

const HobbiesLabel = styled.p`
  font-size: 0.8rem !important;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #9ca3af;
  margin: 0 0 0.75rem;
`

const Hobbies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
`

const HobbyChip = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.45rem 0.9rem;
  border-radius: 999px;
  font-size: 0.92rem;
  color: #f3f4f6;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.14);
  transition: border-color 0.25s ease, background 0.25s ease, transform 0.25s ease;

  svg {
    color: ${styles.colors.theme_default};
  }
  .ext {
    font-size: 0.65rem;
    opacity: 0.7;
    color: #f3f4f6;
  }

  ${({ $link }) => $link && `
    cursor: pointer;
    &:hover {
      transform: translateY(-2px);
      border-color: rgba(254, 226, 99, 0.6);
      background: rgba(254, 226, 99, 0.1);
    }
  `}
`

const AnimationCol = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Glow = styled.div`
  position: absolute;
  width: 70%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(closest-side, rgba(254, 226, 99, 0.16), rgba(72, 112, 255, 0.08) 60%, rgba(0, 0, 0, 0));
  filter: blur(30px);
  pointer-events: none;
`

const BottomSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 6rem 1rem 0;
  margin: auto;

  .spaced {
    margin-top: 4rem;
  }

  @media (max-width: 768px) {
    padding-top: 3.5rem;
    .spaced {
      margin-top: 3rem;
    }
  }
`
