import React from 'react'
import styled from 'styled-components'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { handleLink } from '../utils/helpers';


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
                <FaGithub size={20} className='icon' onClick={()=>handleLink('github')} />
                <FaLinkedin size={20} className='icon' onClick={()=>handleLink('linkedin')} />
                <RiInstagramFill size={20} className='icon' onClick={()=>handleLink('ig')} />
                <MdEmail size={20} className='icon' onClick={()=>handleLink('email')} />
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

  @media (max-width: 768px) {
    gap: 0.6rem;
    padding: 2rem 1.25rem 1.5rem;
    background:
      radial-gradient(30rem 12rem at 50% 0%, rgba(254, 226, 99, 0.06), rgba(254, 226, 99, 0) 70%),
      rgba(7, 11, 20, 0.92);
    border-top: 1px solid rgba(255, 255, 255, 0.08);

    .icon {
      padding: 10px;
      border-radius: 14px;
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
  }

  /* leave room for the floating mobile tab bar */
  @media (orientation: portrait) {
    padding-bottom: calc(100px + env(safe-area-inset-bottom, 0px));
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

    @media (max-width: 768px) {
        gap: 0.9rem;
        order: -1;
        margin-bottom: 0.5rem;
    }

    .icon {
        transition: box-shadow 0.3s ease, transform 0.3s ease;
        &:hover {
            box-shadow: 0 0 10px 2px white;
            transform: scale(1.15);
            border-radius: 25%;
            cursor: pointer;
        }
    }
`
const Copyrights = styled.p`
    font-size: .75rem;
`