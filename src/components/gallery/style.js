import styled from 'styled-components';

export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    align-text: center;
`;
export const Image = styled.div`
    width: 50%;
    @media(max-width: 768px){
        width: 90%;
    }
    box-shadow: 
    11px -11px 0 -1px white,
    12px -12px 0 2px black;
`;
export const Text = styled.div`
    margin: 5% 20%;
    text-indent: 5%;
    line-height: 1.6;
`;