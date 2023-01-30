import { Fs } from "../../atoms/FontStyles/Hs"
import styled from "styled-components"
export const StyledHeader = styled(Fs)`
align-self:center;
`
export const StyledDescription = styled(Fs)`
margin-top:1rem;

`
export const HeaderWrapper = styled.div`
display:flex;
justify-content:space-between;
align-items:flex-start;
width:100%;
`
export const ButtonsWrapper = styled.div`
display:flex;
align-items:center;
& .card-btn {
    margin-left:1rem;
}
`