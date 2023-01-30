import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Examples } from "./components/pages/Examples";
import { Notes } from "./components/pages/Notes";
import { ThemeContext } from "styled-components";
import theme from "./components/atoms/theme";
import { useState } from "react";
import { StyledApp, StyledContainer } from "./styles.js";
import './App.css'
import { Home } from "./components/pages/Home/Home";
function App() {
  const [darkmode, setDarkmode] = useState(false)
  //--start animate darkmodeChange
  const toggleDarkMode = () => {
    let styleBlock= document.getElementById("hide-block").style  
    styleBlock.display = 'block';
    styleBlock.opacity = '1';
    setTimeout(() => {
      styleBlock.opacity = '0';
      setTimeout(() => {styleBlock.display = 'none';}, 300)},300);
    setDarkmode(!darkmode)
  }
  //--end animate darkmodeChange
  return (
    <ThemeContext.Provider value={{ ...theme(darkmode), toggleDarkMode }}>
      <StyledApp >
        <StyledContainer>
          <Router>
            <Routes>
              <Route path="/NoteApp/" element={<Home />}></Route>
              <Route path="/NoteApp/notes" element={<Notes />}></Route>
              {/* <Route path="settings" element={<Settings />}></Route> */}
              <Route path="/NoteApp/examples" element={<Examples />}></Route>
            </Routes>
          </Router>
        </StyledContainer>
      </StyledApp>
      <div id="hide-block"></div>
    </ThemeContext.Provider>
  );
}

export default App;
