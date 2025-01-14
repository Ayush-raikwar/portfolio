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

    return (
        <Container>
            <Section>
                <PdfContainer
                    file={pdfFile}>
                    <Page
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                        pageNumber={1}
                    />
                </PdfContainer>
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
`

const PdfContainer = styled(Document)`
    margin: auto;
    div{
        width: 95%;    
        margin: auto !important;
        @media (max-width: 600px) {
            canvas{
                width: 100% !important;
                height: 80% !important;
            }
        }
    }
`