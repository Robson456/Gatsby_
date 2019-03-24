import styled from 'styled-components'

export const MainWrapper = styled.div`
    background: #2E323B;
    display: flex;
    justify-content: space-around;
    width: 40%;
    padding: 3% 0;
    
    @media(max-width: 767px){
        width: 100%;
        
    }
    `;
    export const Wrapper = styled.div`
    color: white;
        h1{
            font-size:4rem;
        }
        h2{
            font-size:2.5rem;
            color: grey;
        }
        h3{
            font-size: 2rem;
            color: grey;
        }
        p{
            font-size: 1.5rem;
        }

`;