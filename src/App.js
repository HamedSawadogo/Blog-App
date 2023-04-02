import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/Navbar";
import Blog from "./pages/blog";
import { createGlobalStyle } from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
function App() {
  const { theme } = useContext(ThemeContext);
  console.log(theme);
  const GlobalStyled = createGlobalStyle`
    body{
      background:${({ color }) => (color === "dark" ? "#2F2E41" : "white")};
      transition:0.2s ease;
    }
  `;
  const ContextGlobalStyled = () => {
    return <GlobalStyled theme={theme} />;
  };
  return (
    <BrowserRouter>
      <GlobalStyled color={theme} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
