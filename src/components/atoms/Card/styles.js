import styled from "styled-components"
export const StyledWrapper = styled.div`
word-break: break-word;
transition: ${({ theme }) => theme.colors.animation};
padding:2rem;
display:flex;
flex-direction: column;
justify-content: space-between;
margin:1rem 0;
box-shadow: ${({ theme }) => theme.colors.boxShadows.out};
border-radius: ${({ theme }) => theme.border.radiusSlight};
`