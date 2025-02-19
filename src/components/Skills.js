import styled from "styled-components"
import ReactNativeIcon from '../assets/icons/react-native-logo.svg'
import ReactJsIcon from '../assets/icons/react-js.svg'
import JsIcon from '../assets/icons/js-icon.svg'
import TsIcon from '../assets/icons/ts-icon.svg'
import HtmlIcon from '../assets/icons/html-icon.svg'
import CssIcon from '../assets/icons/css-icon.svg'
import FirebaseIcon from '../assets/icons/firebase-icon.svg'
import VercelIcon from '../assets/icons/vercel-icon.svg'
import NetlifyIcon from '../assets/icons/netlify-icon.svg'
import SupabaseIcon from '../assets/icons/supabase-icon.svg'
import MongoIcon from '../assets/icons/mongodb-icon.svg'
import GithubIcon from '../assets/icons/github-icon.svg'
import PostmanIcon from '../assets/icons/postman-icon.svg'
import FigmaIcon from '../assets/icons/figma-icon.svg'
import InvisionIcon from '../assets/icons/invision-icon.svg'
import OpenAiIcon from '../assets/icons/openai-icon.svg'
import GeminiIcon from '../assets/icons/gemini-icon.svg'
import VsCodeIcon from '../assets/icons/vscode-icon.svg'

export const Skills = () => {

    const sections = [
        {
            title: "Core Technologies",
            subtitle: "Primary technologies I use for building modern web applications",
            items: ["React Native", "React.js", "Javascript", "TypeScript", "HTML", "CSS"],
            icons: [ReactNativeIcon, ReactJsIcon, JsIcon, TsIcon, HtmlIcon, CssIcon]
        },
        {
            title: "Cloud",
            subtitle: "Technologies for cloud services",
            items: ["Firebase", "Vercel", "Netlify", "Supabase", "MongoDB",],
            icons: [FirebaseIcon, VercelIcon, NetlifyIcon, SupabaseIcon, MongoIcon]
        },
        {
            title: "Development Tools",
            subtitle: "Essential tools for development workflow and deployment",
            items: ["GitHub", "Postman", "REST APIs", "Figma", "Invision", "ChatGPT", "Gemini AI", "VS Code"],
            icons: [GithubIcon, PostmanIcon, null, FigmaIcon, InvisionIcon, OpenAiIcon, GeminiIcon, VsCodeIcon]
        },
        {
            title: "Professional Skills",
            subtitle: "Soft skills and professional competencies that enhance technical work",
            items: ["Problem Solving", "Team Collaboration", "Time Management"],
            icons: []
        },
    ];
    const handleMouseMove = (e) => {
        const { left, top } = e.target.getBoundingClientRect();
        e.target.style.setProperty('--x', `${e.clientX - left}px`);
        e.target.style.setProperty('--y', `${e.clientY - top}px`);
    };

    return (
        // <Container>
        //     <Title>Skills</Title>
        // </Container>

        <Container>
            <Title>Tools & Skills</Title>
            <Subtitle>
                My expertise combines technical proficiency with professional skills, enabling me to deliver comprehensive solutions while effectively collaborating with teams and stakeholders.
            </Subtitle>
            <Grid>
                {/* {sections.map((section, index) => (
                    <Section key={index}>
                        <SectionTitle>{section.title}</SectionTitle>
                        <SectionSubtitle>{section.subtitle}</SectionSubtitle>
                        <ItemGrid>
                            {section.items.map((item, idx) => (
                                <Item key={idx} onMouseMove={handleMouseMove}>
                                    {item}
                                </Item>
                            ))}
                        </ItemGrid>
                    </Section>
                ))} */}
                {sections.map((section, index) => (
                    <Section key={index}>
                        <SectionTitle>{section.title}</SectionTitle>
                        <SectionSubtitle>{section.subtitle}</SectionSubtitle>
                        <ItemGrid>
                            {section.items.map((item, idx) => (
                                <Item key={idx} onMouseMove={handleMouseMove}>
                                    {section.icons[idx] &&
                                        <img src={section.icons[idx]} width={30} height={30} />}
                                    {item}
                                </Item>
                            ))}
                        </ItemGrid>
                    </Section>
                ))}
            </Grid>
        </Container>
    )
}

// const Container = styled.section`
//     padding: 4rem 0;
//     background: linear-gradient(135deg, #0a0f1a, #16213e);
//     text-align: center;
//     color: white;
//     position: relative;
//     overflow: hidden;
//     &:before {
//         content: "";
//         position: absolute;
//         top: 0;
//         left: 0;
//         width: 100%;
//         height: 100%;
//         background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0) 70%);
//     }
// `

// const Title = styled.h2`
//   font-size: 2rem;
//   font-weight: bold;
//   color: #fff;
//   margin-bottom: 2rem;
// `;

const Container = styled.div`
  background: black;
  color: white;
  min-height: 100vh;
  padding: 2.5rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  color: gray;
  margin-top: 1rem;
  max-width: 48rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const Section = styled.div``;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
`;

const SectionSubtitle = styled.p`
  color: gray;
  margin-bottom: 1rem;
`;

const ItemGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;


  @media (max-width:440px) {
    grid-template-columns: repeat(1,1fr);
  }

`;

const Item = styled.div`
  background: #1a1a1a;
  padding: 1rem;
  border-radius: 0.5rem;
  text-align: center;
  border: 1px solid #2a2a2a;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  gap: 1rem;

  &::before {
    content: "";
    position: absolute;
    top: var(--y, 50%);
    left: var(--x, 50%);
    width: 0;
    height: 0;
    background: radial-gradient(circle, rgba(255,140,0,0.4) 0%, rgba(0,0,0,0) 60%);
    transform: translate(-50%, -50%);
    transition: width 0.3s ease-in-out, height 0.3s ease-in-out;
  }
  
  &:hover::before {
    width: 80px;
    height: 80px;
  }
`;