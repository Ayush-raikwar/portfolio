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
                    src='https://previews.dropbox.com/p/thumb/AChyupdugkydCqXjNuSoxM2EPoU2wwNdT8rgiPWihnjZdDoYVgTEtRSKypqs3R7CyzT3uEi99rgsqyNfmEFoAVpmN91mtPfWfcQ__ujsU1gnWcAWHGhIhD5vVls6nLlTQLElRQ2nYFW-3I2ZRBHafhP2uqndLGevCqmO2DyNULDx0mGw6KJAnMmDQS0h3-jMtiEB6sN0ObGtkQMS1FJKuizemQuCJ0UjHA8xFMGKZMvaVOjPF3MLT2dtjXRXRl7-W-V86QUUjENcE3g9doGVQRNJg25aGoe1gswLKsIE79vrHWYR8rIM4oJ9aBfyBdSsnzuD-giWMfuEGsnpnPncpYmq/p.jpeg?is_prewarmed=true'
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
`