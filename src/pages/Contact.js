import React from 'react'
import styled, { keyframes } from 'styled-components';
import { styles } from '../utils/commonStyles';
import { constants } from '../utils/constants';

export default function Contact() {
  return (
    <Container>
        <Heading>Coming Soon!</Heading>
        <Gif src={constants.images.coming_soon} />
    </Container>
  )
}


const Container = styled.div`
    color: ${styles.colors.white};
    background-image: url(${constants.images.bg_image});  
    background-size: cover;  
    background-position: center;  
    background-repeat: repeat;
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