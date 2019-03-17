import styled from 'styled-components'

export const MainWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between; 
    background: #2E323B;
    // margin: 5% 0;

    @media(max-width: 769px){
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;
export const Text = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    margin: 10% 2%;

    h1{
        font-size: 3rem;
    }

    p{
        font-size: 1.7rem;

        
    }
    

`;
export const CarouselImage = styled.div`
    width: 80%;
    margin: 2% 5%;
    
`;

export const CarouselItem = styled.div`
    
`;