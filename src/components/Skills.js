import styled, { css } from "styled-components"
import { FaStar, FaSyncAlt, FaChalkboardTeacher, FaGlobeAmericas, FaPuzzlePiece, FaUsers, FaRegClock } from "react-icons/fa"
import { SiGoogle, SiGraphql, SiRedux, SiAxios, SiGooglemaps, SiAppstore, SiXcode } from "react-icons/si"
import { TbPlugConnected, TbApi } from "react-icons/tb"
import { VscJson } from "react-icons/vsc"
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
import OpenAiIcon from '../assets/icons/openai-icon.svg'
import GeminiIcon from '../assets/icons/gemini-icon.svg'
import VsCodeIcon from '../assets/icons/vscode-icon.svg'
import { GlassTitle } from './GlassTitle'

const SOFT = '#cbd5e1'

/*
  Sections are ordered by what teams are hiring for right now, and
  `hot: true` marks the skills most requested in current job posts.
  `icon` is either an imported SVG (string) or a react-icons component.
*/
const sections = [
    {
        title: "Mobile & Web Core",
        subtitle: "The stack I build production apps with every day",
        items: [
            { name: "React Native", icon: ReactNativeIcon, hot: true },
            { name: "TypeScript", icon: TsIcon, hot: true },
            { name: "React.js", icon: ReactJsIcon, hot: true },
            { name: "JavaScript (ES6+)", icon: JsIcon },
            { name: "HTML5", icon: HtmlIcon },
            { name: "CSS3 & Styled Components", icon: CssIcon },
        ],
    },
    {
        title: "AI & Native Features",
        subtitle: "Smart and device-level features that set apps apart",
        items: [
            { name: "OpenAI / ChatGPT API", icon: OpenAiIcon, hot: true },
            { name: "Gemini API", icon: GeminiIcon, hot: true },
            { name: "Native Modules & Bridging", icon: TbPlugConnected, color: '#61DAFB', hot: true },
            { name: "Google ML Kit", icon: SiGoogle, color: '#4285F4' },
        ],
    },
    {
        title: "APIs, Data & State",
        subtitle: "Reliable data flow between apps and servers",
        items: [
            { name: "GraphQL", icon: SiGraphql, color: '#E10098', hot: true },
            { name: "Redux", icon: SiRedux, color: '#9B6DEB', hot: true },
            { name: "REST APIs", icon: TbApi, color: '#38BDF8' },
            { name: "Axios", icon: SiAxios, color: '#8B7BFF' },
            { name: "Google Maps & APIs", icon: SiGooglemaps, color: '#34A853' },
            { name: "JSON", icon: VscJson, color: '#F5C542' },
        ],
    },
    {
        title: "Backend & Cloud",
        subtitle: "Backends, databases and hosting I ship on",
        items: [
            { name: "Firebase", icon: FirebaseIcon },
            { name: "Supabase", icon: SupabaseIcon },
            { name: "MongoDB", icon: MongoIcon },
            { name: "Vercel", icon: VercelIcon },
            { name: "Netlify", icon: NetlifyIcon },
        ],
    },
    {
        title: "Shipping & Tooling",
        subtitle: "From design hand-off to App Store release",
        items: [
            { name: "App Store & Play Store Releases", icon: SiAppstore, color: '#0D96F6', hot: true },
            { name: "Git & GitHub", icon: GithubIcon },
            { name: "Xcode", icon: SiXcode, color: '#147EFB' },
            { name: "Postman", icon: PostmanIcon },
            { name: "Figma", icon: FigmaIcon },
            { name: "VS Code", icon: VsCodeIcon },
        ],
    },
    {
        title: "Professional Skills",
        subtitle: "How I work with teams and clients",
        items: [
            { name: "Agile Workflow", icon: FaSyncAlt, color: SOFT, hot: true },
            { name: "Mentoring & Tech Interviews", icon: FaChalkboardTeacher, color: SOFT, hot: true },
            { name: "International Clients", icon: FaGlobeAmericas, color: SOFT },
            { name: "Problem Solving", icon: FaPuzzlePiece, color: SOFT },
            { name: "Team Collaboration", icon: FaUsers, color: SOFT },
            { name: "Time Management", icon: FaRegClock, color: SOFT },
        ],
    },
];

const SkillIcon = ({ icon: Icon, color }) => (
    <IconBox>
        {typeof Icon === 'string'
            ? <img src={Icon} width={28} height={28} alt="" />
            : <Icon size={24} color={color} aria-hidden="true" />}
    </IconBox>
)

export const Skills = () => {

    const handleMouseMove = (e) => {
        const el = e.currentTarget;
        const { left, top } = el.getBoundingClientRect();
        el.style.setProperty('--x', `${e.clientX - left}px`);
        el.style.setProperty('--y', `${e.clientY - top}px`);
    };

    return (
        <Container>
            <GlassTitle>Tools & Skills</GlassTitle>
            <Subtitle>
                My toolkit, ordered by what teams are hiring for today: TypeScript-first mobile apps, AI-powered features and smooth App Store & Play Store releases.
            </Subtitle>
            <Legend><FaStar aria-hidden="true" /> Most requested in today's job posts</Legend>
            <Grid>
                {sections.map((section) => (
                    <Section key={section.title}>
                        <SectionTitle>{section.title}</SectionTitle>
                        <SectionSubtitle>{section.subtitle}</SectionSubtitle>
                        <ItemGrid>
                            {section.items.map((item) => (
                                <Item key={item.name} $hot={item.hot} onMouseMove={handleMouseMove}>
                                    <SkillIcon icon={item.icon} color={item.color} />
                                    <span>{item.name}</span>
                                    {item.hot && <HotBadge title="In demand"><FaStar /></HotBadge>}
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
  position: relative;
  color: white;
  padding: 5rem 2.5rem 5.5rem;
  background:
    radial-gradient(42rem 30rem at 12% 6%, rgba(254, 226, 99, 0.09), rgba(254, 226, 99, 0) 70%),
    radial-gradient(46rem 32rem at 92% 58%, rgba(72, 112, 255, 0.11), rgba(72, 112, 255, 0) 70%),
    #05070c;

  @media (max-width: 600px) {
    padding: 4rem 1.25rem 4.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  color: #a3abb8;
  margin: -1rem auto 0;
  max-width: 48rem;
  text-align: center;
`;

const Legend = styled.p`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: fit-content;
  margin: 1.5rem auto 0;
  padding: 0.4rem 1rem;
  border-radius: 999px;
  font-size: 0.9rem;
  color: #e2e8f0;
  background: rgba(254, 226, 99, 0.08);
  border: 1px solid rgba(254, 226, 99, 0.25);

  svg {
    color: rgb(254, 226, 99);
    font-size: 0.8rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 340px), 1fr));
  gap: 3rem 2.5rem;
  max-width: 1300px;
  margin: 3rem auto 0;

  @media (max-width: 768px) {
    gap: 2.25rem;
    margin-top: 2.25rem;
  }
`;

const Section = styled.div``;

const SectionTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 0.5rem;

  &::before {
    content: "";
    flex: none;
    width: 4px;
    height: 1.1em;
    border-radius: 4px;
    background: linear-gradient(180deg, rgb(254, 226, 99), rgba(254, 226, 99, 0.15));
  }
`;

const SectionSubtitle = styled.p`
  color: #8b93a1;
  margin-top: 0;
  margin-bottom: 1.25rem;
  min-height: 2.6em;
`;

const ItemGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.85rem;


  @media (max-width: 600px) {
    gap: 0.6rem;
  }
  @media (max-width: 340px) {
    grid-template-columns: repeat(1,1fr);
  }

`;

const Item = styled.div`
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.015));
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  padding: 0.85rem 1.6rem 0.85rem 0.9rem;
  border-radius: 0.85rem;
  text-align: left;
  line-height: 1.3;
  border: 1px solid rgba(255, 255, 255, 0.08);
  position: relative;
  overflow: hidden;
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
  display: flex;
  align-items: center;
  gap: 0.85rem;

  ${({ $hot }) => $hot && css`
    border-color: rgba(254, 226, 99, 0.38);
    background: linear-gradient(160deg, rgba(254, 226, 99, 0.11), rgba(255, 255, 255, 0.02));
    box-shadow: 0 6px 22px rgba(254, 226, 99, 0.07);
  `}

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(254, 226, 99, 0.35);
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.35);
  }

  @media (max-width: 600px) {
    padding: 0.7rem 1.3rem 0.7rem 0.65rem;
    gap: 0.55rem;
    font-size: 0.88rem;
  }

  &::before {
    content: "";
    position: absolute;
    top: var(--y, 50%);
    left: var(--x, 50%);
    width: 0;
    height: 0;
    background: radial-gradient(circle, rgba(254, 226, 99, 0.3) 0%, rgba(0,0,0,0) 60%);
    transform: translate(-50%, -50%);
    transition: width 0.3s ease-in-out, height 0.3s ease-in-out;
    pointer-events: none;
  }
  
  &:hover::before {
    width: 120px;
    height: 120px;
  }
`;

const IconBox = styled.span`
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
`;

const HotBadge = styled.span`
  position: absolute;
  top: 6px;
  right: 7px;
  display: flex;
  font-size: 0.65rem;
  color: rgb(254, 226, 99);
  filter: drop-shadow(0 0 4px rgba(254, 226, 99, 0.6));
`;
