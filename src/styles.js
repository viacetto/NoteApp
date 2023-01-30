import styled from "styled-components";
export const StyledApp = styled.div`
font-size: 4rem;
overflow-wrap: break-word;
min-height: 100vh;
transition: ${({ theme }) => theme.colors.animation};
color:  ${({ theme }) => theme.colors.special[300]};
background: ${({ theme }) => theme.colors.primary[500]};
& ::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
    font-weight: bold;
}
& ::selection {
    background: ${({ theme }) => theme.colors.selection.background};
    color: ${({ theme }) => theme.colors.selection.color};
}
& input:focus-visible {
    outline:none;
    box-shadow: ${({ theme }) => theme.colors.boxShadows.out};
}
& a:focus-visible {
    outline:none;
    box-shadow: ${({ theme }) => theme.colors.boxShadows.in};
}
& button:focus-visible {
    outline:none;
    box-shadow: ${({ theme }) => theme.colors.boxShadows.in};
}
`

export const StyledContainer = styled.div`
width: 80vw;
margin: 0 auto;
padding: 2rem 0;
@media (max-width: 426px) {
    width: 90vw;
  }
`
