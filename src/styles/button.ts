import styled  from "styled-components";

type props = {
    primary?:boolean
    loading?:boolean|string
}
export const Button = styled.button<props>`
    background: ${props => props.primary?"#4A67FF":'#F5F5F5'};
    opacity: ${props => props.loading==='true'?'0.5':'1'};
    border-radius:8px;
    padding:${props => props.primary?'19px 40px':'19px 70px'};
    border:none;
    color:${props => props.primary?'white':'#000000'};
    font-size:18px;
    text-align: center;
    margin-top:40px;
    cursor:${(props)=>props.loading==='true'?"not-allowed":"pointer"};
    font-weight:700;
    @media(max-width: 500px){
        font-size:14px;
        padding:10px 30px;
    }
`;