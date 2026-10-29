import styled from "styled-components"
import { constants } from "../utils/constants"
import { styles } from "../utils/commonStyles"

export const WorkInProgress = () => {
    return (
        <Container>
            <Heading>Work in Progress!</Heading>
            <Gif src={constants.images.coming_soon} />
        </Container>
    )
}


const Container = styled.div`
    color: ${styles.colors.white};
    background-image: url(${constants.images.bg_image});  
    background-size: cover;  
    background-position: center;  
    height: 100vh;
    * {
        margin: 0 !important;
    }

    /* temp */
    display: flex;
    flex-direction: column;
    gap:2rem;
    justify-content: center;
    align-items: center;
`
const Heading = styled.h1`
    @media (max-width: 768px) {
        font-size: 1.6rem;
    }
`
const Gif = styled.img`
    @media (max-width: 768px) {
        width: min(80vw, 320px);
        border-radius: 1.25rem;
        border: 1px solid rgba(255, 255, 255, 0.12);
        box-shadow: 0 24px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(254, 226, 99, 0.12);
    }
`