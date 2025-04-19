import React from 'react'
import { Document, Page, pdfjs } from 'react-pdf';
import styled from 'styled-components';
import { styles } from '../utils/commonStyles';
import { constants } from '../utils/constants';
import { Footer } from '../components/Footer';
import pdfFile from '../assets/docs/cv_ayush.pdf'
import { Helmet } from 'react-helmet';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

export const Resume = () => {

    function downloadPDF() {
        const pdfUrl = "https://drive.google.com/file/d/1D7bmr3Q9Y61lLYCdpi-sjqqNgFs0ki58/view?usp=sharing";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.setAttribute("download", "sample.pdf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

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
                    <h1>Resume</h1>
                    <button onClick={downloadPDF}>Download</button>
                    <Row>

                        <ResumeImg
                            src='https://github.com/Ayush-raikwar/resume/blob/main/resume170425/AyushRaikwar_ReactNative_Resume_page-0001.jpg?raw=true'
                            alt='resume-img'
                        />
                        <ResumeImg
                            src='https://github.com/Ayush-raikwar/resume/blob/main/resume170425/AyushRaikwar_ReactNative_Resume_page-0002.jpg?raw=true'
                            alt='resume-img'
                        />
                    </Row>
                </Section>
                <Footer />
            </Container>
        </>
    )
}

const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    gap:1.5rem;

    @media (max-width:1100px) {
        padding-bottom: 10%;
        flex-direction: column;
    }
`
const Container = styled.div`
    color: ${styles.colors.white};
    background-image: url(${constants.images.bg_image});  
    background-size: cover;  
    background-position: center;  
    background-repeat: repeat;
    
`
const Section = styled.section`
    min-height: 100vh;
    padding-top: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    button {
        /* position: absolute; */
        border: 1px solid grey;
        border-radius: 0.5rem;
        padding: 0.5rem;
        background-color: ${styles.colors.white};
        cursor: pointer;
        text-transform: uppercase;
        margin-bottom: 2rem;
    }

    @media (max-width:1100px) {
        padding-top: 22%;
        padding-bottom: 10%;
        flex-direction: column;
    }

`

const ResumeImg = styled.img`
    width: 500px;
    @media (max-width: 540px) {
        width: 95%;
    }
`