import styled from 'styled-components';

export const MainWrapper = styled.div`
    display: flex; 
    align-items: center;
    margin: 5% 5%;
    @media(max-width: 768px){
        dispaly: flex;
        flex-direction: column;
        // margin: 0 10%;
    }
    
    `;
export const Image = styled.div`
    width: 100%;   
    box-shadow: 
        11px -11px 0 -1px white,
        12px -12px 0 2px black;
`;  
export const ButtonWrapper = styled.div`
    justify-content: center;
    display: flex;
    flex-direction: row;
    margin: 0 0 5% 0;
    
    button{
        font-size: 2rem;
        background: white;
        // border-radius: 25px;
        border-style: solid;
        border-color: #000000;
        width: 200px;
        height: 50px;
        cursor: pointer;
        
        :hover{
            border: 0px #fff solid;
            -webkit-transform: scale(1.05,1.05);
            -webkit-transition: border 0.3s ease-out;
            -webkit-transition: transform 250ms cubic-bezier(0.680, -0.550, 0.265, 1.550); 
        }
    }
`;
export const Text = styled.div`
    font-size: 1.5rem;
    width: 50%;
    justify-content: flex-start;
    // text-align: center;
    margin: 0 3%;
    p{
        text-indent: 5%;
        margin: 0rem 1rem;
        
    }

`;
