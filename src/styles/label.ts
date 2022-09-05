import styled from 'styled-components';

type propsType = {
    passwordRemember?:boolean
}

export const Label = styled.label<propsType>`
    color:black;
    font-size:16px;
    font-weight: 400;
    @media(max-width: 500px){
        font-size:12px;
    }
`;
export const CheckBoxLabel = styled.label`
   display:flex;
   justify-content:flex-start;
   gap:5px;
   align-items:center;
   font-size:16px;
   @media(max-width: 500px){
        font-size:12px;
    }
`;