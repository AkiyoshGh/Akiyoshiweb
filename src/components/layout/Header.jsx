import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(5px);
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: var(--breakpoint-desktop);
  width: 100%;
  height: 80px;
  padding: 0 var(--spacing-lg);

  @media (max-width: 768px) {
    padding: 0 var(--spacing-md);
  }
`;

const Logo = styled(Link)`
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;

  .logo-image {
    width: 45px;
    height: 45px;
  }

  .logo-text {
    display: flex;
    align-items: center;
    gap: 0rem;
  }

  .logo-main {
    font-size: 1.2rem;
    color: #333;
  }

  .logo-separator {
    color: #666;
    margin: 0 0.2rem;
  }

  .logo-sub {
    font-size: 1.2rem;
    color: #666;
  }
`

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  margin-left: auto;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const NavLink = styled(motion(Link))`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  position: relative;
  text-align: center;
  
  .nav-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1px;
  }

  .nav-text-en {
    font-size: 0.75em;
    color: #666;
    font-weight: 400;
  }
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: #C4181F;
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
`;


const Header = () => {
  const handleNavClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/" onClick={handleNavClick}>
          <img src="/images/logo-stamp.svg" alt="Akiyoshi Logo" className="logo-image" />
          <div className="logo-text">
            <span className="logo-main">Akiyoshi Studio</span>
            <span className="logo-separator">|</span>
            <span className="logo-sub">秋吉工作室</span>
          </div>
        </Logo>
        <NavLinks>
          <NavLink
            to="/"
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
            onClick={handleNavClick}
          >
            <div className="nav-text">
              <span>首页</span>
              <span className="nav-text-en">Home</span>
            </div>
          </NavLink>
          <NavLink
            to="/portfolio"
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
            onClick={handleNavClick}
          >
            <div className="nav-text">
              <span>作品集</span>
              <span className="nav-text-en">Portfolio</span>
            </div>
          </NavLink>
          <NavLink
            to="/blog"
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
            onClick={handleNavClick}
          >
            <div className="nav-text">
              <span>博客</span>
              <span className="nav-text-en">Blog</span>
            </div>
          </NavLink>
          <NavLink
            to="/about"
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
            onClick={handleNavClick}
          >
            <div className="nav-text">
              <span>关于</span>
              <span className="nav-text-en">About</span>
            </div>
          </NavLink>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;