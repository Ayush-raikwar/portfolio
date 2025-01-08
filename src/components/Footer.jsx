import React from 'react'
import styled from 'styled-components'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";


export const Footer = () => {
    return (
        <FooterContainer>
            <Row>
                <Description>Designed & Developed by Ayush Raikwar</Description>
            </Row>  
            <Row>
                <Copyrights>Copyright © 2025</Copyrights>
            </Row>
            <RowCenterApart>
                <FaGithub size={20} />
                <FaLinkedin size={20} />
                <RiInstagramFill size={20} />
                <MdEmail size={20} />
            </RowCenterApart>
        </FooterContainer>
    )
}

const FooterContainer = styled.footer`
  background-color: rgba(7, 11, 20, 0.8);
  color: #ffffff;
  padding: 1rem 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    flex-direction: column;
    gap:1rem;
    text-align: center;
  }

`;
const Description = styled.p`
    font-size:1rem;
    margin: 0;
`
const Row = styled.div`
    flex:1;
`
const RowCenterApart = styled.div`
    display: flex;
    gap:2rem;
`
const Copyrights = styled.p`
    font-size: .75rem;
`