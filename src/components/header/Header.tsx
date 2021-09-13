import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../constants/routes';
import Feature from '../feature/Feature';
import { HeaderBackground, HeaderButtonLink, HeaderFrame, StyledHeaderLogo } from './Header.styled';
import logo from  '../../logo.svg';

interface Props {
  background?: boolean;
  backGroundUrl?: string;
  dontShowOnSmallViewPort?: boolean;
}

const Header: FC<Props> = ({ background = true, backGroundUrl, dontShowOnSmallViewPort }) => {
  return (
    <HeaderBackground>
      <HeaderFrame>
        <HeaderLogo to={ROUTES.home} src={logo} alt="Netflix" />
        <HeaderButtonLink to={ROUTES.signIn}>Sign In</HeaderButtonLink>
      </HeaderFrame> 
      <Feature />
    </HeaderBackground>
  );
};

export default Header;


interface HeaderLogoProps {
  to: string;
  src: string;
  alt: string;
}
const HeaderLogo: FC<HeaderLogoProps> = ({ to, src, alt }) => {
  return (
    <Link to={to}>
      <StyledHeaderLogo  src={src} alt={alt} />
    </Link>
  )
}