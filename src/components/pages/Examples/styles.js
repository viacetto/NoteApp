import styled from "styled-components"
export const StyledContainer = styled.div`
.sample-btn-wrapper  {
    display: flex!important;
    flex-direction: row;
}    
    
    & > * {
        display: inline-block;
        display:flex;
        align-items:flex-start;
    }
    .palette-sample {
        width: 10rem;
        height: 10rem;
        border-radius: 100px;
        margin: 2.5rem;
    }
    .palette-sample-wrapper{
        display: flex;
        flex-wrap:wrap;
    } 
    & .fs-header {
        display:flex;
        flex-direction: column-reverse;
        align-items: center;
    }
    
    & .sample-btn-wrapper span {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
    .direct-container{
        width: 11.1rem;
        margin: 2rem;
    }
    .sample-btn-wrapper{
        display:flex;
        flex-wrap:wrap;
    }
    .btn-text{
        margin-top:1rem;
    }
    
`