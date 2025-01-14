// src/components/Navbar.js

import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { IoIosHome } from "react-icons/io";
import { MdOutlinePermDeviceInformation } from "react-icons/md";
import { GoProjectRoadmap } from "react-icons/go";
import { FcDocument } from "react-icons/fc";
import { MdContactPage } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { styles } from '../utils/commonStyles';


export const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    const handleResize = () => {
      setIsMobile(window.innerWidth <= window.innerHeight); 
    };

    handleScroll();
    handleResize();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleDrawerPress = () => {
    setIsMenuOpen(true)
  }
  const handleDrawerClose = () => {
    setIsMenuOpen(false)
  }
  const renderHamburger = () => (
    <>
    {!isMenuOpen&&
      <BurgerIconContainer onClick={handleDrawerPress}>
        <GiHamburgerMenu size={40} color='white'/>
      </BurgerIconContainer>}

      <HamburgerMenu isOpen={isMenuOpen}>
        <IoCloseSharp onClick={handleDrawerClose} size={40} color={styles.colors.white}/>
        <HamLink onClick={()=>setIsMenuOpen(false)} to="/" isActive={location.pathname === "/"}><IoIosHome /> Home</HamLink>
        <HamLink onClick={()=>setIsMenuOpen(false)} to="/about" isActive={location.pathname === "/about"}><MdOutlinePermDeviceInformation /> About</HamLink>
        <HamLink onClick={()=>setIsMenuOpen(false)} to="/projects" isActive={location.pathname === "/projects"}><GoProjectRoadmap /> Projects</HamLink>
        <HamLink onClick={()=>setIsMenuOpen(false)} to="/resume" isActive={location.pathname === "/resume"}><FcDocument /> Resume</HamLink>
        <HamLink onClick={()=>setIsMenuOpen(false)} to="/contact" isActive={location.pathname === "/contact"}><MdContactPage /> Contact</HamLink>
      </HamburgerMenu>
    </>
  )
  const renderTabs = ()=>(
    <NavbarContainer isScrolled={isScrolled}>
      <NavLink to="/" isActive={location.pathname === "/"}><IoIosHome />Home</NavLink>
      <NavLink to="/about" isActive={location.pathname === "/about"}><MdOutlinePermDeviceInformation />About</NavLink>
      <NavLink to="/projects" isActive={location.pathname === "/projects"}><GoProjectRoadmap />Projects</NavLink>
      <NavLink to="/resume"><FcDocument/>Resume</NavLink>
      <NavLink to="/contact" isActive={location.pathname === "/contact"}><MdContactPage/>Contact</NavLink>
    </NavbarContainer>
  )

  return(
    <Container>
      {isMobile?renderHamburger():renderTabs()}
    </Container>
  );
} 
const NavbarContainer = styled.nav`
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  z-index:10;
  justify-content: right;
  background-color: ${({ isScrolled }) => (isScrolled ? 'rgba(7, 11, 20, 0.2)' : 'transparent')};
  backdrop-filter: ${({ isScrolled }) => isScrolled ? 'blur(5px)' : 'none'};
  padding: 1rem;
  padding-right: 10%;
  gap: 2rem;
  transition: background-color 0.3s ease, backdrop-filter 0.3s ease;
  a:last-of-type {
    margin-right:10%;
  }
  `;

const NavLink = styled(Link)`
  position: relative;
  color: ${({isActive})=>isActive?styles.colors.theme_default:styles.colors.white};
  text-decoration: none;
  margin: 0 15px;
  font-size: 1.2rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #ddd;
  }
  
  svg {
    margin-right: 0.35rem;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px; 
    left: 0;
    width: ${({ isActive }) => (isActive ? '100%' : '0')};
    height: 4px; 
    background-color: ${styles.colors.theme_default}; 
    transition: width 0.5s ease;
  }
  
  &:hover{
    color: ${styles.colors.theme_default};
  }
  
  &:hover::after {
    width: 100%;
  }
  `;

const HamburgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 1rem; */
  background-color: rgba(7, 11, 20, 0.2);
  backdrop-filter: blur(5px);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9;
  /* width: 200px;
  height: 400px; */
  padding: 1.5rem;
  min-width: 40vw;
  left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  transition: left 0.3s ease-in-out;

`
const HamLink = styled(Link)`
  color: ${({isActive})=>isActive?styles.colors.theme_default:styles.colors.white};
  font-size: 1rem;
  margin: 1.25rem;
  text-decoration: none;
`
const BurgerIconContainer = styled.div`
    margin-right:auto;
    position:fixed;
    padding: 1rem;
    background-color: rgba(7, 11, 20, 0.2);
    backdrop-filter: blur(5px);
    z-index: 99;
`
const Container = styled.div`
  
`