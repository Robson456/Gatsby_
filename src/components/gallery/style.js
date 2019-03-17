import styled from 'styled-components';

export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    align-text: center;
    background: #E4E6E9;
`;
export const Image = styled.div`
    width: 50%;
    margin: 5% 0;
    @media(max-width: 768px){
        width: 90%;
        margin: 15% 0;
    }
    box-shadow: 
    11px -11px 0 -1px #E4E6E9,
    12px -12px 0 2px black;
`;
export const Text = styled.div`
    margin: 0 20% 5% 20%;
    text-indent: 5%;
    line-height: 1.6;
`;