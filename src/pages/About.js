import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { styles } from '../utils/commonStyles';
import { constants } from '../utils/constants';
import aboutAnimation from '../assets/json/about-dev.json'
import { FaCss3Alt, FaGit, FaReact, FaHtml5, FaGithub } from "react-icons/fa";
import { RiGeminiFill, RiOpenaiFill, RiReactjsFill, RiSupabaseFill } from "react-icons/ri";
import { SiAdobephotoshop, SiMacos, SiPostman, SiRedux, SiTypescript } from "react-icons/si";
import { IoLogoFirebase, IoLogoJavascript, IoLogoVercel } from "react-icons/io5";
import Lottie from 'react-lottie';
import { handleLink } from '../utils/helpers';
import { BiLogoFigma, BiLogoNetlify } from 'react-icons/bi';
import { VscVscodeInsiders } from 'react-icons/vsc';
import { GridComponent } from '../components/GridComponent';
import { TbBrandReactNative } from 'react-icons/tb';
import { FcLinux } from 'react-icons/fc';
import { GitHubGraph } from '../components/GithubGraph';
import { Helmet } from 'react-helmet';

export default function About() {

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: aboutAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  const skills = [
    { name: "React Native", icon: <TbBrandReactNative size={24} /> },
    { name: "React.js", icon: <RiReactjsFill size={24} /> },
    { name: "Javascript", icon: <IoLogoJavascript size={24} /> },
    { name: "Typescript", icon: <SiTypescript size={24} /> },
    { name: "HTML", icon: <FaHtml5 size={24} /> },
    { name: "CSS", icon: <FaCss3Alt size={24} /> },
    { name: "Redux", icon: <SiRedux size={24} /> },
  ];

  const tools = [
    { name: "Git", icon: <FaGit size={24} /> },
    { name: "Github", icon: <FaGithub size={24} /> },
    { name: "MacOS", icon: <SiMacos size={24} /> },
    { name: "ChatGPT", icon: <RiOpenaiFill size={24} /> },
    { name: "GeminiAI", icon: <RiGeminiFill size={24} /> },
    { name: "Firebase", icon: <IoLogoFirebase size={24} /> },
    { name: "Netlify", icon: <BiLogoNetlify size={24} /> },
    { name: "Vercel", icon: <IoLogoVercel size={24} /> },
    { name: "Postman", icon: <SiPostman size={24} /> },
    { name: "Figma", icon: <BiLogoFigma size={24} /> },
    { name: "Photoshop", icon: <SiAdobephotoshop size={24} /> },
    { name: "VSCode", icon: <VscVscodeInsiders size={24} /> },
    { name: "Linux", icon: <FcLinux size={24} /> },
    { name: "Supabase", icon: <RiSupabaseFill size={24} /> },
  ]
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleScroll = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

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
          <Col className='left-col'>
            <Title>Know who <TitleHighlight>I AM</TitleHighlight></Title>

            <Info>👋 Hey, I’m Ayush Raikwar, a tech geek from Bhopal with 3+ years in React Native & React.js. I build <Highlight>high-performance</Highlight> apps, integrate <Highlight>Google APIs</Highlight>, and explore <Highlight>native bridging</Highlight>.<br /><br />
              Always up for a challenge—let’s build something epic! 🚀</Info><br /><br />
            <Info>Here are some of my hobbies -</Info>
            <DataPoint>
              <FaReact color='cyan' />
              <p>Gaming</p>
            </DataPoint>
            <DataPoint onClick={() => handleLink('photography')}>
              <FaReact color='cyan' />
              <p className='hover-effect'>Photography</p>
            </DataPoint>
            <DataPoint onClick={() => handleLink('yt')}>
              <FaReact color='cyan' />
              <p className='hover-effect'>Vlogging</p>
            </DataPoint>
            <DataPoint>
              <FaReact color='cyan' />
              <p>Off-roading</p>
            </DataPoint>
            <DataPoint>
              <FaReact color='cyan' />
              <p>Swimming/Free diving</p>
            </DataPoint>

          </Col>
          <Col className='p-0'>
            <Lottie options={lottieOptions}
              height={screenWidth > 800 ? 400 : 320}
              width={screenWidth > 800 ? 400 : 320}
            />
          </Col>
        </TopSection>
        <BottomSection>
          <Title>Professional <TitleHighlight>Skillset</TitleHighlight></Title>
          <GridComponent data={skills} />

          <Title>Tools <TitleHighlight>I use</TitleHighlight></Title>
          <GridComponent data={tools} />
        </BottomSection>

        <GitHubGraph />
        <Divider />

      </Container>
    </>
  )
}

const Divider = styled.div`
  margin: 7% auto;
  background-color: #fff;
  width: 20%;
  height: 1px;
`
const TitleHighlight = styled.span`
  font-weight: 500;
  color: ${styles.colors.theme_default};
`
const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 300;
`

const DataPoint = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  gap:.45rem;
  margin-left: 1rem;
  margin-top: .5rem;

  p{
    margin: 0;
  }
  .hover-effect {
    cursor: pointer;
    &:hover {
      color: ${styles.colors.theme_default};
      transform:scale(1.05)
    }
    transition: transform .05s;
  }
`

const Container = styled.div`
  color: ${styles.colors.white};
  background-image: url(${constants.images.bg_image});  
  background-size: cover;  
  background-position: center;  
  background-repeat: repeat;
  padding-bottom: 2rem;

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

const TopSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 5rem;

  width: 70%;
  margin: auto;

  .left-col {
    align-items: end;
  }
  
  @media (max-width:1100px) {
    width: 90%;
    .p-0 {
      padding: 0;
    }
  }
  @media (max-width:800px) {
    width: 98%;
    flex-direction: column;
  }

`
const BottomSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
  margin: auto;
`


const Highlight = styled.span`
  color: ${styles.colors.theme_default};
`
const Col = styled.div`
  flex:1;
  justify-content: center;
  padding: 1rem;
  text-align: center;
`
const Info = styled.p`
  text-align: left;
  /* width: 60%; */
  margin: auto;
`