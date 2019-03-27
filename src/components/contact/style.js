import styled from 'styled-components'

export const MainWrapper = styled.div`
display: flex;
flex-wrap: wrap;
jutify-content: space-around;
@media(max-width: 767px){
    width: 100%;
    
}

`;
export const Wrapper = styled.div`
    background: #2E323B;
    color: white;
    padding: 3% 3%;
    @media(max-width: 440px){
        width: 100%;
        
    }

    h1{
        font-size:4rem;
    }
        h2{a
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
export const ContactWrapper = styled.div`
        padding: 5%;
        // background: red;
        @media(max-width: 440px){
            width: 100%;
            
        }
        @media(min-width: 767px){
            width: 60%;
        }
        input[type=text]{
            width: 100%;
            display: inline-block;
            margin: 2%;
            border: none;
            border-bottom: 2px solid red;
        }
        input[type=email]{
            width: 100%;
            display: inline-block;
            margin: 2%;
            border: none;
            border-bottom: 2px solid red;
        }
        textarea{
            width: 100%;
            display: inline-block;
            margin: 2%;
            border: none;
            border-bottom: 2px solid red;
        }
          button{
            background-color: red;
            width: 15%;
            color: white;
            padding: 12px 20px;
            border: none;
            border-radius: 10px;
            cursor: pointer;   
          }
          
`;