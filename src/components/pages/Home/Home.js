import { Navbar } from "../../organisms/Navbar"
import { Fs } from '../../atoms/FontStyles/Hs'
import { FontHighlight } from "../../atoms/FontStyles/FontHighlight"
import { StyledDiv } from "./styles"

export const Home = () => {
    return (
        <>
            <Navbar />
            <StyledDiv className="greetings"> <Fs className="greetings-header" styling={2}>Hello,</Fs>
                <Fs className="greetings-name" styling={2}>John Smith.</Fs>
                <Fs className="greetings-comment1" d={"inline-block"} styling={3}>Are you ready for Your&nbsp;</Fs>
                <FontHighlight className="greetings-highlight" styling={3} weight={800} pre>productive&nbsp;</FontHighlight>
                <Fs className="greetings-comment2" d={"inline-block"} styling={3}>day?</Fs>
            </StyledDiv>
        </>
    )
}