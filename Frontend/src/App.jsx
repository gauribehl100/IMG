// import styled, { ThemeProvider } from "styled-components";
// import { darkTheme, lightTheme } from "../src/Utils/Theme.js";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Navbar from "../src/Components/form/Navbar.jsx";
// import Home from "../src/Pages/Home.jsx";
// import CreatePost from "../src/Pages/CreatePost.jsx";

// const Container = styled.div`
//   width: 100%;
//   height: 160vh;
//   display: flex;
//   background: ${({ theme }) => theme.bg};
//   color: ${({ theme }) => theme.text_primary};
//   overflow-x: hidden;
//   overflow-y: hidden;
//   transition: all 0.2s ease;
// `;

// const Wrapper = styled.div`
//   height: 100%;
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   flex: 3;
// `;

// function App() {
//   return (
//     <ThemeProvider theme={darkTheme}>
//       <Container>
//         <Wrapper>
//           <BrowserRouter>
//             <Navbar />
//             <Routes>
//               <Route path="/" exact element={<Home />} />
//               <Route path="/post" exact element={<CreatePost />} />
//             </Routes>
//           </BrowserRouter>
//         </Wrapper>
//       </Container>
//     </ThemeProvider>
//   );
// }

// export default App;



import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { darkTheme, lightTheme } from "../src/Utils/Theme.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../src/Components/form/Navbar.jsx";
import Home from "../src/Pages/Home.jsx";
import CreatePost from "../src/Pages/CreatePost.jsx";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
    overflow: hidden; /* Prevent scrolling */
  }
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  overflow: hidden;
  transition: all 0.2s ease;
`;

const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 3;
  overflow: hidden;
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Container>
        <Wrapper>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/post" exact element={<CreatePost />} />
            </Routes>
          </BrowserRouter>
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
