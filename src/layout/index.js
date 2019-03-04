import React from 'react';
import styled, { createGlobalStyle, ThemeProvider} from 'styled-components';
import { theme } from '../utils/theme';
import Header from '../components/header/index'


const GlobalStyle = createGlobalStyle`
body {
  padding; 0;
  margin: 0;
  font-family: 'Montserrat';
  // color: black;
}
`;
const StyledWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  position: relative;
  
`;


const Layout = ({children}) => (
     <ThemeProvider theme={theme}>
        <>
            <Header/>
            <GlobalStyle/>
            <StyledWrapper>
              {children}

            </StyledWrapper>
            
            
        </>
    </ThemeProvider>

);

export default Layout;