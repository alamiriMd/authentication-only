import styled  from "styled-components";

type props = {
    primary?:boolean
    loading?:boolean|string
}
export const Button = styled.button<props>`
    background: ${props => props.primary?"#4A67FF":'#F5F5F5'};
    opacity: ${props => props.loading==='true'?'0.5':'1'};
    border-radius:8px;
    padding:10px 40px;
    border:none;
    color:${props => props.primary?'white':'#000000'};
    font-size:18px;
    margin-top:30px;
    cursor:${(props)=>props.loading==='true'?"not-allowed":"pointer"};
    font-weight:700;
`;