import styled from "styled-components"

export const StyledInput = styled.input`
transition: ${({ theme }) => theme.colors.animation};
padding:2rem;
display:flex;
flex-direction: column;
justify-content: space-between;
margin:1rem 0;
box-shadow: ${({ theme }) => theme.colors.boxShadows.in};
border-radius: ${({ theme }) => theme.border.radiusSlight};
border: none;
font-weight: bold;
color: ${({ theme }) => theme.colors.secondary[500]};
background:${({ theme }) => theme.colors.primary[500]};
@media (max-width: 426px) {
    padding: 1rem;
  }
`