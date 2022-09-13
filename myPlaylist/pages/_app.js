//Clase app del proyecto

import '../styles/globals.css'
import { darkTheme, lightTheme } from '../styles/theme'
import styled, { ThemeProvider } from "styled-components";
import { useState } from "react";

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`;

function MyApp({ Component, pageProps }) {
    const [darkMode, setDarkMode] = useState(true);
    return (
        <ThemeProvider theme={setDarkMode ? darkTheme : lightTheme}>
            <Container darkMode={darkMode} setDarkMode={setDarkMode}>
                <Main>
                    <Component {...pageProps} />
                </Main>
        </Container>
        </ThemeProvider>
  )
}
export default MyApp
