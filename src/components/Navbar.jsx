// src/components/Navbar.js

import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { IoIosHome } from "react-icons/io";
import { MdOutlinePermDeviceInformation } from "react-icons/md";
import { GoProjectRoadmap } from "react-icons/go";
import { FcDocument } from "react-icons/fc";
import { MdContactPage } from "react-icons/md";
import { styles } from '../utils/commonStyles';




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
  color: #fff;
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

  /* &::after {
    content: '';
    position: absolute;
    bottom: -8px; 
    left: 0;
    width: 0;
    height: 4px; 
    background-color: ${styles.colors.theme_default}; 
    transition: width 0.5s ease;
  } */

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

export const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return(
    <NavbarContainer isScrolled={isScrolled}>
      <NavLink to="/" isActive={location.pathname === "/"}><IoIosHome />Home</NavLink>
      <NavLink to="/about" isActive={location.pathname === "/about"}><MdOutlinePermDeviceInformation />About</NavLink>
      <NavLink to="/projects" isActive={location.pathname === "/projects"}><GoProjectRoadmap />Projects</NavLink>
      <NavLink to="/resume"><FcDocument/>Resume</NavLink>
      <NavLink to="/contact" isActive={location.pathname === "/contact"}><MdContactPage/>Contact</NavLink>
    </NavbarContainer>
  );
} 

