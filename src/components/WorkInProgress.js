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
    
`
const Gif = styled.img`

`