import React from 'react'
import styled from 'styled-components';
import { FaDownload, FaEnvelope, FaLinkedin, FaCalendarAlt, FaMobileAlt, FaGlobeAmericas, FaUserTie } from 'react-icons/fa';
import { styles } from '../utils/commonStyles';
import { constants } from '../utils/constants';
import { Footer } from '../components/Footer';
import { Helmet } from 'react-helmet';
import { GlassTitle } from '../components/GlassTitle';
import { PrimaryButton, GhostButton } from '../components/Buttons';
import { nowFonts, starryBackground, glassCard } from '../utils/pageStyles';

const RESUME_PDF_URL = "https://drive.google.com/file/d/1D7bmr3Q9Y61lLYCdpi-sjqqNgFs0ki58/view?usp=sharing";

const RESUME_PAGES = [
    'https://github.com/Ayush-raikwar/resume/blob/main/resume170425/AyushRaikwar_ReactNative_Resume_page-0001.jpg?raw=true',
    'https://github.com/Ayush-raikwar/resume/blob/main/resume170425/AyushRaikwar_ReactNative_Resume_page-0002.jpg?raw=true',
];

const HIGHLIGHTS = [
    { icon: FaCalendarAlt, text: 'Building with React since 2021' },
    { icon: FaMobileAlt, text: 'Android & iOS apps in production' },
    { icon: FaGlobeAmericas, text: 'Clients in the USA, Mexico & Germany' },
    { icon: FaUserTie, text: '15+ technical interviews taken' },
];

export const Resume = () => {

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
                <Section>
                    <GlassTitle as="h1">Resume</GlassTitle>
                    <Subtitle>React Native & React developer building fast, polished apps for Android, iOS and the web.</Subtitle>

                    <Highlights>
                        {HIGHLIGHTS.map(({ icon: Icon, text }) => (
                            <Highlight key={text}><Icon /> {text}</Highlight>
                        ))}
                    </Highlights>

                    <Actions>
                        <PrimaryButton href={RESUME_PDF_URL} target="_blank" rel="noopener noreferrer"><FaDownload /> Download PDF</PrimaryButton>
                        <GhostButton href={constants.social_links.mail}><FaEnvelope /> Email me</GhostButton>
                        <GhostButton href={constants.social_links.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</GhostButton>
                    </Actions>

                    <Row>
                        {RESUME_PAGES.map((src, i) => (
                            <PageFrame key={src} href={src} target="_blank" rel="noopener noreferrer" title="Open full size">
                                <ResumeImg src={src} alt={`Ayush Raikwar resume, page ${i + 1}`} loading="lazy" />
                                <PageLabel>Page {i + 1}</PageLabel>
                            </PageFrame>
                        ))}
                    </Row>
                </Section>
            </Container>
            <Footer />
        </>
    )
}

const Container = styled.div`
    ${nowFonts}
    ${starryBackground}
    color: ${styles.colors.white};
`

const Section = styled.section`
    min-height: 100vh;
    box-sizing: border-box;
    padding: 8rem 1.5rem 6rem;
    display: flex;
    align-items: center;
    flex-direction: column;

    @media (max-width: 600px) {
        padding: 6rem 1rem 4rem;
    }
    /* portrait phones use the bottom tab bar, so no top-nav gap */
    @media (max-width: 768px) and (orientation: portrait) {
        padding-top: calc(1.5rem + env(safe-area-inset-top, 0px));
    }
`

const Subtitle = styled.p`
    font-family: 'Now-font-reg';
    font-size: 1.1rem;
    line-height: 1.6;
    color: #b8c0cc;
    text-align: center;
    max-width: 36rem;
    margin: -1rem auto 2rem;
`

const Highlights = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.7rem;
    max-width: 60rem;

    /* phones: tidy 2 x 2 grid of highlight tiles */
    @media (max-width: 600px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.6rem;
        width: 100%;
    }
`

const Highlight = styled.span`
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: 999px;
    font-size: 0.92rem;
    color: #f3f4f6;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.14);
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);

    svg {
        color: ${styles.colors.theme_default};
    }

    @media (max-width: 600px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.45rem;
        padding: 0.8rem 0.85rem;
        border-radius: 14px;
        font-size: 0.82rem;
        line-height: 1.35;

        svg {
            font-size: 1rem;
        }
    }
`

const Actions = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.85rem;
    margin: 2rem 0 3.5rem;

    @media (max-width: 480px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.65rem;
        width: 100%;
        margin: 1.5rem 0 2.25rem;

        > :first-child {
            grid-column: 1 / -1;
        }
        > * {
            padding-left: 0.5rem;
            padding-right: 0.5rem;
        }
    }
`

const Row = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;
    width: 100%;

    @media (max-width: 1100px) {
        flex-direction: column;
        align-items: center;
    }
`

const PageFrame = styled.a`
    ${glassCard}
    display: block;
    padding: 0.75rem 0.75rem 0.5rem;
    border-radius: 1.25rem;
    text-decoration: none;
    color: inherit;
    transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-6px);
        border-color: rgba(254, 226, 99, 0.45);
        box-shadow: 0 28px 70px rgba(0, 0, 0, 0.5);
    }

    @media (max-width: 560px) {
        width: 100%;
        box-sizing: border-box;
    }
`

const ResumeImg = styled.img`
    display: block;
    width: 500px;
    max-width: 100%;
    margin: 0 auto;
    height: auto;
    /* reserve A4-ish space while the image loads */
    aspect-ratio: auto 1 / 1.414;
    border-radius: 0.75rem;
    background: rgba(255, 255, 255, 0.92);
`

const PageLabel = styled.span`
    display: block;
    padding: 0.55rem 0 0.15rem;
    font-size: 0.8rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    text-align: center;
    color: #9ca3af;
`
