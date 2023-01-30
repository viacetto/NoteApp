import styled from "styled-components"
export const StyledContainer = styled.div`
box-shadow: ${({ theme }) => theme.colors.boxShadows.out};
border-radius: ${({ theme }) => theme.border.radius};
display:flex;
justify-content:center;
align-items: center;
margin-bottom: 2rem;
transition: ${({ theme }) => theme.colors.animation};
& > * {
    transition: ${({ theme }) => theme.colors.animation};
    display: flex;
    padding:0.5rem;
    @media (max-width: 426px) {
        padding:0;
    }
    margin: 1rem;
    justify-content: center;
    align-items:center;
    width: 5rem;
    height: 5rem;
    border-radius: ${({ theme }) => theme.border.radius};
    &:hover {
        transition: ${({ theme }) => theme.colors.animation};
        box-shadow: ${({ theme }) => theme.colors.boxShadows.in};
    };
};
.active {
    transition: ${({ theme }) => theme.colors.animation};
    box-shadow: ${({ theme }) => theme.colors.boxShadows.out};
    color: ${({ theme }) => theme.colors.special[300]}!important;
}
`