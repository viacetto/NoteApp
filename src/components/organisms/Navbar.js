import { useContext } from "react";
import { ThemeContext } from "styled-components"
import { StyledContainer } from "./styles";
import { ButtonCircle } from "../atoms/ButtonCircle/ButtonCircle";
import { NavbarItem } from "../molecules/NavbarItem"

export const Navbar = () => {
    const {toggleDarkMode} = useContext(ThemeContext)
    const path = window.location.pathname;
    return (
        <StyledContainer>
            <NavbarItem className={path === "/NoteApp/" ? "active" : null} to="/NoteApp/" icon={"home"}></NavbarItem>
            <NavbarItem className={path === "/NoteApp/notes" ? "active" : null} to="/NoteApp/notes" icon={'assignment'}></NavbarItem>
            {/* <NavbarItem className={path === "/settings" ? "active" : null} to="/settings" icon={"settings"}></NavbarItem> */}
            <NavbarItem className={path === "/NoteApp/examples" ? "active" : null} to="/NoteApp/examples" icon={"token"}></NavbarItem>
            <ButtonCircle isDarkmode={true} onClick={toggleDarkMode} size="s" boxShadow="none" type={'lightbulb'}></ButtonCircle>
        </StyledContainer>
    )
}