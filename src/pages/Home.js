import React, { useEffect, useState } from 'react'
import styled, { css, keyframes } from 'styled-components';
import Lottie from 'react-lottie';
import { TypeAnimation } from 'react-type-animation';
import { styles } from '../utils/commonStyles';
import devAnimation from '../assets/json/dev_animation.json'
import hiDevAnimation from '../assets/json/hello_dev.json'
import showerAnimation from '../assets/json/shower.json'
import { ReactComponent as ProfileIcon } from '../assets/icons/programmer.svg'
import { FaCode, FaEnvelope, FaGoogle, FaMapMarkerAlt, FaPhone, FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { constants } from '../utils/constants';
import { Footer } from '../components/Footer';
import { handleLink } from '../utils/helpers';
import { ViewCounter } from '../components/ViewCounter';
import { MyServices } from '../components/MyServices'
import { fetchLastCommit } from '../api/commonApis';
import { Skills } from '../components/Skills';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { incrementCounter } from '../utils/firebase';
import { GlassTitle } from '../components/GlassTitle';

const Home = () => {
  const devLottieOptions = {
    loop: true,
    autoplay: true,
    animationData: devAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  const hiLottieOptions = {
    loop: true,
    autoplay: true,
    animationData: hiDevAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  const showerLottieOptions = {
    loop: true,
    autoplay: true,
    animationData: showerAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  const [transform, setTransform] = useState("rotateX(0deg) rotateY(0deg)");
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [lastUpdate, setLastUpdate] = useState(null);


  useEffect(() => {
    const handleScroll = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  useEffect(() => {
    fetchLastCommit().then(data => setLastUpdate(data))
    incrementCounter('portfolio-view-count', 'count', 'count_so_far', 1)
  }, [])

  // const handleMouseMove = (e) => {
  //   const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
  //   const x = e.clientX - left;
  //   const y = e.clientY - top;

  //   const rotateX = ((y / height) - 0.5) * 60;
  //   const rotateY = ((x / width) - 0.5) * -60;

  //   setTransform(`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  // };

  // const handleMouseLeave = () => {
  //   setTransform("rotateX(0deg) rotateY(0deg)");
  // };  -- commented out for now
  // const handleLink = (type) => {
  //   if (type === 'github') {
  //     window.open(constants.social_links.github)
  //   } else if (type === 'linkedin') {
  //     window.open(constants.social_links.linkedin)
  //   } else if (type === 'instagram') {
  //     window.open(constants.social_links.instagram)
  //   }
  // } -- commented out for now

  return (
    <>
      <Helmet>
        <title>Ayush Raikwar | Best React Native & Mobile App Developer in Central India</title>
        <meta name="description" content="Looking for a freelance React or React Native developer in Bhopal or India? Let's build stunning apps together!" />
        <meta name="keywords" content="React Native Developer Bhopal, Mobile App Developer India, Freelance React Developer, Website Developer Bhopal" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://asr-dev.vercel.app/" />
      </Helmet>
      <Container>
        <Lottie options={showerLottieOptions}
          height={styles.sizes.height}
          width={styles.sizes.width}
          style={{ position: 'absolute', width: '100%', opacity: .15 }}
        />
        <TopContent id='top-section'>
          <Row className='top-sec-row'>
            <LeftCol>
              <HeroCard>
                <SameLine className='top-content-col'>
                  <WelcomeMessage>Hello!</WelcomeMessage>
                  <div>
                    <Lottie options={hiLottieOptions}
                      height={66}
                      width={60}
                    />
                  </div>
                </SameLine>
                <SubText>I'M <NameMain>Ayush Raikwar</NameMain></SubText>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1.75rem', minHeight: 56 }}>
                  <TypeAnimation
                    sequence={[
                      'Software developer',
                      1000,
                      'React Native Developer',
                      1000,
                      'React Js Developer',
                      1000,
                      'Freelancer',
                      1000
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: 'clamp(1.4rem, 2.4vw, 2rem)', display: 'inline-block', textAlign: 'center' }}
                    repeat={Infinity}
                  />
                </div>
                <CtaRow>
                  <PrimaryCta to="/projects">View my work</PrimaryCta>
                  <GhostCta to="/resume">Resume</GhostCta>
                </CtaRow>
              </HeroCard>
            </LeftCol>
            <RightCol className='top-right-col'>
              <Lottie options={devLottieOptions}
                height={screenWidth > 900 ? screenWidth * .35 : screenWidth * .7}
                width={screenWidth > 900 ? screenWidth * .35 : screenWidth * .7}
              />
            </RightCol>
          </Row>
        </TopContent>
        {/* <Divider /> */}
        <BottomContent id='bottom-section'>
          <ForestArea $fadeTop>
            <GlassTitle>Let me Introduce myself</GlassTitle>
            <Row className='bottom-sec-row'>
              <LeftCol className='info'>
                <SameLine className='mob-center'>
                  <div>
                    <FaCode size={20} />
                  </div>
                  <DataPoint><span>Fell in love with coding in 2020 </span>– Been sharpening my skills ever since.<br /></DataPoint>
                </SameLine>
                <SameLine className='mob-center'>
                  <div>
                    <FaCode size={20} />
                  </div>
                  <DataPoint>Fluent with classics like <Highlight>JAVASCRIPT</Highlight>, with hands on experience in <Highlight>React & React Native</Highlight>.<br /></DataPoint>
                </SameLine>
                <SameLine className='mob-center'>
                  <div>
                    <FaCode size={20} />
                  </div>
                  <DataPoint><Highlight>Cross-Platform</Highlight> Mobile App Development – Successfully built and deployed multiple React Native applications for both Android and iOS.</DataPoint>
                </SameLine>
                <SameLine className='mob-center'>
                  <div>
                    <FaCode size={20} />
                  </div>
                  <DataPoint>Proficient in State Management & API Integration – Experienced with <Highlight>Redux</Highlight>, <Highlight>Axios</Highlight>, <Highlight>REST APIs</Highlight>, <Highlight>Postman</Highlight>, and <Highlight>JSON</Highlight> handling.<br /></DataPoint>
                </SameLine>
                <SameLine className='mob-center'>
                  <div>
                    <FaCode size={20} />
                  </div>
                  <DataPoint>Experience with Cutting-Edge Technologies – Worked extensively with <Highlight>Firebase</Highlight>, <Highlight>Google ML Kit</Highlight>, <Highlight>Native Bridging</Highlight>, and other advanced tools.<br /></DataPoint>
                </SameLine>
                <SameLine className='mob-center'>
                  <div>
                    <FaCode size={20} />
                  </div>
                  <DataPoint>Expertise in <Highlight>Pixel perfect</Highlight> App development on React Native.<br /></DataPoint>
                </SameLine>
                <SameLine className='mob-center'>
                  <div>
                    <FaCode size={20} />
                  </div>
                  <DataPoint>Expertise in UI/UX & Design Tools – Skilled in <Highlight>Figma</Highlight>, <Highlight>Canva</Highlight> & other tools for seamless app design and prototyping.<br /></DataPoint>
                </SameLine>
              </LeftCol>
              {/* <RightCol>
              <IconWrapper onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                <StyledProfileIcon style={{ transform }} />
              </IconWrapper>
            </RightCol> */}
              <Card>
                <AvatarContainer style={{ position: "relative" }}>
                  <Avatar src={require('../assets/images/avatar.jpg')} />
                  <StatusIndicator />
                </AvatarContainer>
                <Name>Ayush Raikwar</Name>
                <Role>React Native Developer</Role>
                <Separator />
                <Info>
                  <Icon><FaEnvelope /></Icon>
                  ayushraikwar45@gmail.com
                </Info>
                <Info>
                  <Icon><FaPhone /></Icon>
                  +91-797469****
                </Info>
                <Info>
                  <Icon><FaMapMarkerAlt /></Icon>
                  India
                </Info>

              </Card>
            </Row>

            <Divider />
          </ForestArea>

          <Skills />

          <MyServices />

          <ForestArea>
            <Divider />

            <GlassTitle>Find me here</GlassTitle>

            <Socials>
              <IconContainer onClick={() => handleLink('github')}>
                <FaGithub
                  fill='#163440'
                />
              </IconContainer>

              <IconContainer onClick={() => handleLink('linkedin')}>
                <FaLinkedin
                  fill='#163440'
                />
              </IconContainer>

              <IconContainer onClick={() => handleLink('ig')}>
                <RiInstagramFill
                  fill='#163440'
                />
              </IconContainer>
            </Socials>
          </ForestArea>

        </BottomContent>
        {/* <ViewCounter slug="home-page" /> */}
        {/* <LastUpdate>Last Updated - {lastUpdate}</LastUpdate> */}
        <Footer />
      </Container>
    </>
  )
}

const fadeIn = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;
const pulse = keyframes`
  0%{ box-shadow: 0 0 0 0 #39ff14; }
  100%{ box-shadow: 0 0 0 14px #69ffa800; }
`;

const Container = styled.div`
  color: ${styles.colors.white};
  background-size: contain;  

  @font-face {
    font-family: 'Now-font-reg';
    src: url('/fonts/Now-Regular.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Now-font-lt';
    src: url('/fonts/Now-Light.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
  }

  p{
    font-family: 'Now-font-reg';
  }

`;
const TopContent = styled.section`
  width: 100%;
  padding-top: 12%;
  padding-bottom: 3rem;
  min-height:85vh;
  background-image:
    /* fade the bottom into the next section's top colour */
    linear-gradient(to bottom, rgba(12, 26, 36, 0) calc(100% - 200px), rgb(12, 26, 36) 100%),
    url(${constants.images.bg_image});
  background-size: cover;
  background-position: center;
  @media (max-width: 1300px) {
    padding-top: 7rem;
    .top-sec-row {
      flex-direction:column;
    }
  }

  /* ---------- mobile ---------- */
  @media (max-width: 768px) {
    min-height: auto;
    padding-bottom: 2.5rem;
    .top-sec-row {
      flex-direction: column-reverse;
    }
    .top-sec-row .top-right-col {
      margin: 0 auto;
    }
    .top-sec-row > div:first-child {
      margin-top: -1.25rem;
      position: relative;
      z-index: 1;
    }
  }
  /* portrait phones use the bottom tab bar, so no space needed for a top nav */
  @media (max-width: 768px) and (orientation: portrait) {
    padding-top: calc(1rem + env(safe-area-inset-top, 0px));
  }
`
const BottomContent = styled.section`
  position: relative;
  overflow: hidden;

  > * {
    position: relative;
    z-index: 1;
  }

  .bottom-sec-row {
    gap:2rem;
  }
  @media (max-width: 1100px) {
    .bottom-sec-row {
      flex-direction:column-reverse;
      align-items: center;
    }
  }
`
/*
  Forest photo behind a block of content: sharp and centred so the
  main tree and sun rays stay in focus, with only a light blur and
  vignette creeping in from the edges.
*/
const ForestArea = styled.div`
  position: relative;
  display: flow-root;
  overflow: hidden;
  isolation: isolate;
  padding-top: ${({ $fadeTop }) => ($fadeTop ? '5rem' : '0')};

  @media (max-width: 768px) {
    padding-top: ${({ $fadeTop }) => ($fadeTop ? '3.5rem' : '0')};
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -2;
    background-image:
      ${({ $fadeTop }) => ($fadeTop
        /* melt out of the starry hero instead of a hard edge */
        ? 'linear-gradient(to bottom, rgb(12, 26, 36) 0, rgba(12, 26, 36, 0) 260px),'
        : '')}
      radial-gradient(ellipse at center, rgba(5, 8, 15, 0) 40%, rgba(5, 8, 15, 0.45) 100%),
      url(${constants.images.home_bg_2});
    background-size: cover;
    background-position: center;
  }

  /* light blur on the outer edges only, centre stays crisp */
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    -webkit-backdrop-filter: blur(3px);
    backdrop-filter: blur(3px);
    -webkit-mask-image: radial-gradient(ellipse at center, transparent 55%, #000 100%);
    mask-image: radial-gradient(ellipse at center, transparent 55%, #000 100%);
    pointer-events: none;
  }
`

const LastUpdate = styled.p`
  text-align: center;
`

const Socials = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap:2rem;
  padding-bottom: 5rem;

  @media (max-width: 768px) {
    gap: 1.25rem;
    padding-bottom: 3.5rem;
  }
`
const IconContainer = styled.div`
  cursor: pointer;
  background-color: ${styles.colors.white};
  border-radius: 100px;
  display: flex;
  width: 36px;
  height: 36px;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 4px 2px rgba(255, 223, 0, 0.7), 0 0 10px 6px rgba(255, 223, 0, 0.5);
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 0 10px 5px rgba(255, 223, 0, 0.9), 0 0 10px 4px rgba(255, 223, 0, 0.7);
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 22px;
    box-shadow: 0 0 0 4px rgba(254, 226, 99, 0.18), 0 8px 24px rgba(254, 226, 99, 0.35);
    -webkit-tap-highlight-color: transparent;
    &:active {
      transform: scale(0.92);
    }
  }
`

const WelcomeMessage = styled.p`
  font-size: 2rem;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
  animation: ${fadeIn} 3s ease-in-out;
`;
const SubText = styled.h1`
  font-family: 'Now-font-reg';
  font-weight: normal;
  font-size: clamp(1.9rem, 3vw, 2.5rem);
  margin: 0.75rem 0 1rem;
  animation: ${fadeIn} 3s ease-in-out both;
  animation-delay: 1s;
  text-align: center;
`;
const NameMain = styled.span`
  font-size: clamp(1.3rem, 2vw, 2.2rem);
  color:${styles.colors.theme_default};
  text-transform: uppercase;
  font-family: "Sixtyfour", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  white-space: nowrap;
  text-shadow:
    0 0 18px rgba(254, 226, 99, 0.45),
    0 0 42px rgba(254, 226, 99, 0.2);

  @media (max-width: 1300px) {
    font-size: clamp(1.3rem, 4vw, 2.2rem);
  }
  @media (max-width: 480px) {
    display: block;
    margin-top: 0.5rem;
  }
`

/* Frosted-glass plate behind the hero titles */
const HeroCard = styled.div`
  position: relative;
  width: min(100%, 38rem);
  margin: 0 auto;
  padding: 2.25rem 2.5rem 2.5rem;
  border-radius: 1.75rem;
  background:
    linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.02)),
    rgba(8, 12, 22, 0.28);
  -webkit-backdrop-filter: blur(12px) saturate(150%);
  backdrop-filter: blur(12px) saturate(150%);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow:
    0 24px 60px rgba(0, 0, 0, 0.45),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  box-sizing: border-box;

  /* soft golden glow sitting behind the name */
  &::before {
    content: "";
    position: absolute;
    left: 10%;
    right: 10%;
    top: 22%;
    height: 45%;
    z-index: -1;
    background: radial-gradient(closest-side, rgba(254, 226, 99, 0.16), rgba(254, 226, 99, 0));
    filter: blur(24px);
    pointer-events: none;
  }

  @media (max-width: 600px) {
    padding: 1.75rem 1.25rem 2rem;
    border-radius: 1.25rem;
  }
  @media (max-width: 768px) {
    border-color: rgba(254, 226, 99, 0.16);
    box-shadow:
      0 24px 60px rgba(0, 0, 0, 0.5),
      0 0 0 1px rgba(255, 255, 255, 0.04),
      inset 0 1px 0 rgba(255, 255, 255, 0.12);
  }
`

const CtaRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.9rem;

  @media (max-width: 480px) {
    gap: 0.7rem;
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
      font-size: 0.9rem;
    }
  }
`
const ctaBase = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.6rem;
  border-radius: 999px;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-decoration: none;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease, background 0.25s ease;

  &:hover {
    transform: translateY(-2px);
  }
  &:focus-visible {
    outline: 2px solid ${styles.colors.theme_default};
    outline-offset: 3px;
  }
`
const PrimaryCta = styled(Link)`
  ${ctaBase}
  color: #14110a;
  background: linear-gradient(135deg, #ffe98a, ${styles.colors.theme_default} 55%, #f2c94c);
  box-shadow: 0 8px 24px rgba(254, 226, 99, 0.25);

  &:hover {
    box-shadow: 0 12px 32px rgba(254, 226, 99, 0.4);
  }
`
const GhostCta = styled(Link)`
  ${ctaBase}
  color: ${styles.colors.white};
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.25);

  &:hover {
    border-color: rgba(254, 226, 99, 0.7);
    background: rgba(254, 226, 99, 0.08);
  }
`
const Highlight = styled.span`
  color: rgba(254, 226, 99,.95);
  text-align: center;
  font-family: 'Now-font-lt';
  /* font-style: italic; */
`
const DataPoint = styled.p`
  font-family: 'Now-font-lt';
  font-size: 1.15rem;
  text-align: justify;
  span {
    /* font-family: 'Now-font-reg'; */
  }

  @media (max-width: 800px) {
    font-size: 1rem;
    /* justify leaves big word gaps on narrow screens */
    text-align: left;
  }
`

const Row = styled.div`
  width: 80%;
  margin: auto;
  display:flex;

  //classes
  .left, .right {
    flex:1;
  }
  .left {
    margin-top: 3rem;
    div:last-child {
      gap:.5rem;
    }
  }
  .center {
    margin: auto;
  }
  .mg-y-5 {
    margin: 5% auto;
  }
  .info {
    background:
      linear-gradient(160deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.01)),
      rgba(12, 14, 20, 0.66);
    -webkit-backdrop-filter: blur(16px) saturate(130%);
    backdrop-filter: blur(16px) saturate(130%);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 1.25rem;
    padding: 1.75rem;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
  }

  //media query
  @media (max-width:680px) {
    width: 98%;
  }
  @media (max-width: 768px) {
    width: calc(100% - 2rem);
    .info {
      padding: 0.75rem 1.1rem;
      border-radius: 1.25rem;
    }
  }

  @media (max-width: 1000px) {
    .top-right-col {
      margin: 4% auto;
    }
  }

`;

const SameLine = styled.div`
  display:flex;
  align-items:center;
  gap: 0.5rem;

  .highlight {
    color: ${styles.colors.theme_default};
    text-align: center;
    font-size: 2rem;
    text-transform: uppercase;
  }

`

const Divider = styled.div`
  margin: 6% auto;
  width: min(40%, 360px);
  height: 1px;
  background: linear-gradient(90deg, rgba(254, 226, 99, 0), rgba(254, 226, 99, 0.65), rgba(254, 226, 99, 0));
`
const LeftCol = styled.div`
  flex:1;
  margin-top: 3rem;
  .top-content-col {
    justify-content: center;
  }
  @media (max-width: 780px) {
    .mob-center {
      /* align-items: baseline; */
      align-items: center ;
      flex-direction: column;
      svg {
        align-self: center;
      }
    }
  }
  @media (max-width: 768px) {
    margin-top: 0;
    .mob-center {
      flex-direction: row;
      align-items: flex-start;
      gap: 0.85rem;
      padding: 0.35rem 0;

      > div:first-child {
        flex: none;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        margin-top: 0.75rem;
        border-radius: 10px;
        color: ${styles.colors.theme_default};
        background: rgba(254, 226, 99, 0.1);
        border: 1px solid rgba(254, 226, 99, 0.25);
      }
      svg {
        width: 15px;
        height: 15px;
      }
      p {
        margin: 0.7rem 0;
        line-height: 1.6;
      }
    }
    .mob-center + .mob-center {
      border-top: 1px solid rgba(255, 255, 255, 0.07);
    }
  }
`
const RightCol = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex:1;
`

const IconWrapper = styled.div`
  display: inline-block;
  perspective: 300px;
  padding: 1rem;
`;

const StyledProfileIcon = styled(ProfileIcon)`
  width: 200px; 
  height: 200px;
  transform-style: preserve-3d; 
  @media (max-width:780px) {
    width: 25vw;
    height: 25vw;
  }
`;

const AvatarContainer = styled.div`
  border-radius: 1rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.02));
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 1rem;
  width: min-content;
  margin: 1rem auto;

`

const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(255,255,255,.25);
  border-radius:.1rem;
  margin: 2rem auto;
`

const Card = styled.div`
  background:
    linear-gradient(160deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.01)),
    rgba(12, 14, 20, 0.66);
  -webkit-backdrop-filter: blur(16px) saturate(130%);
  backdrop-filter: blur(16px) saturate(130%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
  padding: 20px;
  border-radius: 1.25rem;
  width: 300px;
  text-align: center;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);

  @media (max-width: 768px) {
    width: 100%;
    max-width: 480px;
    box-sizing: border-box;
    padding: 1.25rem;
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 1rem;
    align-items: center;
    text-align: left;

    > * {
      grid-column: 1 / -1;
    }
    /* avatar | name + role */
    > :nth-child(1) {
      grid-column: 1;
      grid-row: 1 / span 2;
      margin: 0;
      padding: 0.6rem;
    }
    > :nth-child(1) img {
      width: 64px;
      height: 64px;
      display: block;
    }
    > :nth-child(2) {
      grid-column: 2;
      align-self: end;
      margin: 0 0 0.35rem;
    }
    > :nth-child(3) {
      grid-column: 2;
      align-self: start;
      justify-self: start;
    }
    > :nth-child(4) {
      margin: 1.1rem 0 0.4rem;
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
`;

const Avatar = styled.img`
  width: 80px;
  height: 80px;
  background: gray;
  border-radius: 50%;
  margin: 0 auto;
`;

const StatusIndicator = styled.div`
  /* width: 12px;
  height: 12px;
  background: green;
  border-radius: 50%;
  position: absolute;
  right: 10px;
  top: 10px; */
  width: 12px;
  height: 12px;
  background: green;
  border-radius: 50%;
  position: absolute;
  right: 10px;
  top: 10px;
  animation: ${pulse} 1.5s infinite ease-in-out;
`;

const Name = styled.h2`
  margin: 10px 0;
  font-size: 20px;
`;

const Role = styled.div`
  background: rgba(254, 226, 99, 0.1);
  border: 1px solid rgba(254, 226, 99, 0.3);
  color: ${styles.colors.theme_default};
  display: inline-block;
  padding: 5px 12px;
  border-radius: 999px;
  font-size: 14px;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  font-size: 14px;
  
`;

const Icon = styled.div`
  margin-right: 10px;
  color: ${styles.colors.theme_default};
`;

const SocialIcons = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  gap: 10px;
  font-size: 18px;
`;



export default Home;