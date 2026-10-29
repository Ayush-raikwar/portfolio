// src/components/Navbar.js

import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { IoIosHome } from "react-icons/io";
import { MdOutlinePermDeviceInformation } from "react-icons/md";
import { GoProjectRoadmap } from "react-icons/go";
import { FcDocument } from "react-icons/fc";
import { MdContactPage } from "react-icons/md";
import { TbHome, TbHomeFilled, TbUser, TbUserFilled, TbLayoutGrid, TbLayoutGridFilled, TbFileCv, TbMessageCircle, TbMessageCircleFilled } from "react-icons/tb";
import { styles } from '../utils/commonStyles';


/* Bottom tab bar items (portrait / mobile only) */
const TABS = [
  { to: '/', label: 'Home', icon: TbHome, activeIcon: TbHomeFilled },
  { to: '/about', label: 'About', icon: TbUser, activeIcon: TbUserFilled },
  { to: '/projects', label: 'Projects', icon: TbLayoutGrid, activeIcon: TbLayoutGridFilled },
  { to: '/resume', label: 'Resume', icon: TbFileCv, activeIcon: TbFileCv },
  { to: '/contact', label: 'Contact', icon: TbMessageCircle, activeIcon: TbMessageCircleFilled },
];

export const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hideBar, setHideBar] = useState(false);
  const lastY = useRef(0);
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 0);
      // mobile tab bar: slide away while scrolling down, come back on scroll up
      const nearBottom = window.innerHeight + y >= document.documentElement.scrollHeight - 80;
      if (nearBottom || y < 160 || y < lastY.current - 8) setHideBar(false);
      else if (y > lastY.current + 8) setHideBar(true);
      lastY.current = y;
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

  const renderBottomNav = () => (
    <BottomBar $hidden={hideBar} aria-label="Main">
      {TABS.map(({ to, label, icon: Icon, activeIcon: ActiveIcon }) => {
        const active = location.pathname === to;
        return (
          <Tab
            key={to}
            to={to}
            $active={active}
            aria-current={active ? 'page' : undefined}
            onClick={() => window.scrollTo({ top: 0, behavior: active ? 'smooth' : 'auto' })}
          >
            {active ? <ActiveIcon /> : <Icon />}
            <span>{label}</span>
          </Tab>
        );
      })}
    </BottomBar>
  )
  const renderTabs = ()=>(
    <NavbarContainer isScrolled={isScrolled}>
      <NavLink to="/" isActive={location.pathname === "/"}><IoIosHome />Home</NavLink>
      <NavLink to="/about" isActive={location.pathname === "/about"}><MdOutlinePermDeviceInformation />About</NavLink>
      <NavLink to="/projects" isActive={location.pathname === "/projects"}><GoProjectRoadmap />Projects</NavLink>
      <NavLink to="/resume" isActive={location.pathname === "/resume"}><FcDocument/>Resume</NavLink>
      <NavLink to="/contact" isActive={location.pathname === "/contact"}><MdContactPage/>Contact</NavLink>
    </NavbarContainer>
  )

  return(
    <Container>
      {isMobile?renderBottomNav():renderTabs()}
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

/* ---------- mobile: floating glass tab bar ---------- */
const BottomBar = styled.nav`
  position: fixed;
  left: 50%;
  bottom: calc(12px + env(safe-area-inset-bottom, 0px));
  z-index: 50;
  box-sizing: border-box;
  width: min(440px, calc(100% - 24px));
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 6px;
  border-radius: 24px;
  background:
    linear-gradient(160deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.03)),
    rgba(10, 13, 22, 0.72);
  -webkit-backdrop-filter: blur(18px) saturate(160%);
  backdrop-filter: blur(18px) saturate(160%);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.08);
  transform: translate(-50%, ${({ $hidden }) => ($hidden ? 'calc(100% + 40px)' : '0')});
  transition: transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
`

const Tab = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  height: 54px;
  border-radius: 18px;
  text-decoration: none;
  font-size: 10.5px;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: ${({ $active }) => ($active ? styles.colors.theme_default : '#9aa3b2')};
  -webkit-tap-highlight-color: transparent;
  transition: color 0.25s ease;

  /* glowing pill behind the active tab */
  &::before {
    content: "";
    position: absolute;
    inset: 3px 4px;
    border-radius: 16px;
    background: rgba(254, 226, 99, 0.12);
    border: 1px solid rgba(254, 226, 99, 0.25);
    box-shadow: 0 0 18px rgba(254, 226, 99, 0.18);
    opacity: ${({ $active }) => ($active ? 1 : 0)};
    transform: scale(${({ $active }) => ($active ? 1 : 0.6)});
    transition: opacity 0.3s ease, transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  svg {
    position: relative;
    font-size: 22px;
    transform: ${({ $active }) => ($active ? 'translateY(-1px) scale(1.08)' : 'none')};
    transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
    filter: ${({ $active }) => ($active ? 'drop-shadow(0 0 6px rgba(254, 226, 99, 0.55))' : 'none')};
  }
  span {
    position: relative;
  }

  &:active svg {
    transform: scale(0.88);
  }
`

const Container = styled.div`
  
`