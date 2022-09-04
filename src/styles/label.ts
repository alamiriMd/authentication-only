import styled from 'styled-components';

type propsType = {
    passwordRemember?:boolean
}

export const Label = styled.label<propsType>`
    color:black;
    padding: ${props => props.passwordRemember?'10px':'0px'};
`;
export const CheckBoxLabel = styled.label`
   display:flex;
   justify-content:flex-start;
   gap:5px;
   align-items:center;
`;