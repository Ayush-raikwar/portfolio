import React from 'react'
import { Document, Page, pdfjs } from 'react-pdf';
import styled from 'styled-components';
import { styles } from '../utils/commonStyles';
import { constants } from '../utils/constants';
import { Footer } from '../components/Footer';
import pdfFile from '../assets/docs/cv_ayush.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

export const Resume = () => {

    function downloadPDF() {
        const pdfUrl = "https://drive.google.com/file/d/12IKPcyW5kpVM9KKQjULrtZ_hjfb_YIBF/view?usp=sharing";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.setAttribute("download", "sample.pdf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <Container>
            <Section>
                <ResumeImg
                    src='https://github.com/Ayush-raikwar/resume/blob/main/CV_Ayush%20Raikwar_React%20Native%20Developer.pdf%20(2)%20(1)_page-0001%20(1).jpg?raw=true'
                    alt='resume-img'
                />
                <button onClick={downloadPDF}>Download</button>
            </Section>
            <Footer />
        </Container>
    )
}


const Container = styled.div`
    color: ${styles.colors.white};
    background-image: url(${constants.images.bg_image});  
    background-size: cover;  
    background-position: center;  
    background-repeat: repeat;
    
`
const Section = styled.section`
    height: 100vh;
    padding-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;

    button {
        position: absolute;
        border: 1px solid grey;
        border-radius: 0.5rem;
        padding: 0.5rem;
        background-color: ${styles.colors.white};
        cursor: pointer;
        top: 11%;
        text-transform: uppercase;
    }
`

const ResumeImg = styled.img`
    width: 500px;
    @media (max-width: 540px) {
        width: 95%;
    }
`