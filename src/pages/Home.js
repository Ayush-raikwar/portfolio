import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components';
import Lottie from 'react-lottie';
import { TypeAnimation } from 'react-type-animation';
import devAnimation from '../assets/json/dev_animation.json'
import hiDevAnimation from '../assets/json/hello_dev.json'
import showerAnimation from '../assets/json/shower.json'
import { ReactComponent as ProfileIcon } from '../assets/icons/programmer.svg'
import { FaCode } from "react-icons/fa";
import { styles } from '../utils/commonStyles';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { constants } from '../utils/constants';

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

  useEffect(() => {
    const handleScroll = () => {
      setScreenWidth(window.innerWidth); 
    };

    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left; 
    const y = e.clientY - top;  

    const rotateX = ((y / height) - 0.5) * 60; 
    const rotateY = ((x / width) - 0.5) * -60; 

    setTransform(`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  };

  const handleMouseLeave = () => {
    setTransform("rotateX(0deg) rotateY(0deg)"); 
  };
  const handleLink = (type) => {
    if (type === 'github') {
      window.open(constants.social_links.github)
    } else if (type === 'linkedin') {
      window.open(constants.social_links.linkedin)
    } else if (type === 'instagram') {
      window.open(constants.social_links.instagram)
    }
  }

  return (
    <Container>
      <Lottie options={showerLottieOptions}
        height={styles.sizes.height}
        width={styles.sizes.width}
        style={{ position: 'absolute', width: '100%', opacity: .1 }}
      />
      <TopContent id='top-section'>
        <Row className='top-sec-row'>
          <LeftCol>
            <SameLine className='top-content-col'>
              <WelcomeMessage>Hello!</WelcomeMessage>
              <div>
                <Lottie options={hiLottieOptions}
                  height={66}
                  width={60}
                />
              </div>
            </SameLine>
            <SubText>I'M <Name>Ayush Raikwar</Name></SubText>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom:'2rem' }}>
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
                style={{ fontSize: '2rem', display: 'inline-block' }}
                repeat={Infinity}
              />
            </div>
          </LeftCol>
          <RightCol className='top-right-col'>
            <Lottie options={devLottieOptions}
              height={screenWidth>900?screenWidth * .35:screenWidth*.7}
              width={screenWidth>900?screenWidth * .35:screenWidth*.7}
            />
          </RightCol>
        </Row>
      </TopContent>
      <Divider />
      <BottomContent id='bottom-section'>
        <Row className='bottom-sec-row'>
          <LeftCol>
            <SameLine className='bottom-left-col-heading'>
              <Heading>Let me</Heading>
              <p className='highlight'>Introduce</p>
              <Heading>myself</Heading>
            </SameLine>
            <SameLine className='mob-center'>
              <FaCode size={20} /><DataPoint>I fell in love with programming since 2020 & brushing up my skills since then!<br /></DataPoint>
            </SameLine>
            <SameLine className='mob-center'>
              <FaCode size={20} /><DataPoint>I'm fluent with classics like <Highlight>JAVASCRIPT</Highlight>, with good grip in <Highlight>React & React Native</Highlight>.<br /></DataPoint>
            </SameLine>
            <SameLine className='mob-center'>
              <FaCode size={20} /><DataPoint>Developed multiple <Highlight>cross-platform</Highlight> Mobile apps on React Native for both Android & iOS.</DataPoint>
            </SameLine>
            <SameLine className='mob-center'>
              <FaCode size={20} /><DataPoint>Worked with <Highlight>Firebase tools</Highlight>, <Highlight>Google ML kit</Highlight>, <Highlight>Native Bridging</Highlight>, etc. <br /></DataPoint>
            </SameLine>
            <SameLine className='mob-center'>
              <FaCode size={20} /><DataPoint>Expertise in <Highlight>Pixel perfect</Highlight> App development on React Native.<br /></DataPoint>
            </SameLine>
          </LeftCol>
          <RightCol>
            <IconWrapper onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
              <StyledProfileIcon style={{ transform }} />
            </IconWrapper>
          </RightCol>
        </Row>

        <Divider />

        <Heading className='center mg-y-5'>FIND ME HERE</Heading>

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

          <IconContainer onClick={() => handleLink('instagram')}>
            <RiInstagramFill
              fill='#163440'
            />
          </IconContainer>
        </Socials>

      </BottomContent>
    </Container>
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

const Container = styled.div`
  color: ${styles.colors.white};
  background-image: url(${constants.images.bg_image});  
  background-size: cover;  
  background-position: center;  
  background-repeat: repeat;
`;
const TopContent = styled.section`
  width: 100%;
  padding-top: 12%;

  @media (max-width: 1300px) {
    .top-sec-row {
      flex-direction:column;
    }
  }

`
const BottomContent = styled.section`
  @media (max-width: 1100px) {
    .bottom-sec-row {
      flex-direction:column;
    }
    .bottom-left-col-heading {
      justify-content: center;
      flex-direction: column;
      margin-bottom: 2rem;
      p{
        margin: 0;
      }
    }
  }
`
const Socials = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap:2rem;
  padding-bottom: 5rem;
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
`

const WelcomeMessage = styled.p`
  font-size: 2rem;
  animation: ${fadeIn} 3s ease-in-out;
`;
const SubText = styled.p`
  font-size: 2.5rem;
  animation: ${fadeIn} 5s ease-in-out;
  animation-delay: 2s;
  text-align: center;
`;
const Name = styled.span`
  font-size: 2.2rem;
  color:${styles.colors.theme_default};
  text-transform: uppercase; 
  font-family: "Sixtyfour", serif;
  font-optical-sizing: auto;
  font-weight: 400;
`
const Heading = styled.p`
 text-align: center;
 font-size: 2rem;
`
const Highlight = styled.span`
  color: ${styles.colors.theme_default};
  text-align: center;
  font-style: italic;
`
const DataPoint = styled.p`
  font-family: 'Lato';
  font-size: 1.25rem;
`

const Row = styled.div`
  width: 80%;
  margin: auto;
  display:flex;
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

  @media (max-width:680px) {
    width: 95%;
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
  margin: 7% auto;
  background-color: #fff;
  width: 20%;
  height: 1px;
`
const LeftCol = styled.div`
  flex:1;
  margin-top: 3rem;
  .top-content-col {
    justify-content: center;
  }
  @media (max-width: 780px) {
    .mob-center {
      text-align: justify;
      align-items: baseline;
      flex-direction: column;
      svg {
        align-self: center;
      }
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


export default Home;