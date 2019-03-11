import styled from 'styled-components'
import { Link } from 'gatsby'

export const MainWrapper = styled.div`

`;
export const Wrapper = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #000000;
    background: #ffffff;
`;
export const Nav = styled.div`
    @media(max-width: 768px){
        display: none;
    }
`;
export const Logo = styled.div`
    font-size: 2rem;
`;
export const StyledLink = styled(Link)`
text-decoration: none;
  color: #000000;
  margin: 10px;
  font-size: 1.5rem;
 
   
`;

export const HamburgerMenu = styled.div`
    position: absolute;
    
    right: 2rem;
  & > div {
    width: 30px;
    height: 5px;
    border-radius: 5px;
    transition: 0.4s;
    background-color: #000000;
    &:first-child,
    &:last-child {
      margin: 4px 0;
    }
  }
  &.isOpen {
    div:nth-child(2) {
      margin-top: -9px;
      transform: rotate(135deg);
    }
    div:first-child {
      transform: rotate(45deg);
    }
    div:last-child {
      display: none;
    }
  }
  @media (min-width: 769px) {
    display: none;
  }
`;

export const Mobile = styled.div`  
    
    height: 100%;
    display: flex;
    opacity: ${props => props.isVisible ? '1'  : '0'};
    flex-direction: column;
    visibility: ${props => props.isVisible ? 'visible'  : 'hidden'};
    height: ${props => props.isVisible ? '200px'  : '0px'};
    transition: height 0.5s ease, visibility 0s;
`;