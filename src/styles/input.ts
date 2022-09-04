import styled from 'styled-components';


export const Input = styled.input`
    border-radius:3px;
    border:1px solid lightgray;
    padding:10px;
    border:none;
    background:#F5F5F5;
    &:focus{
        outline:1px solid #E26F6F;
    }
`;
export const CheckBox = styled.input.attrs({type:'checkbox'})`
    position:absolute;
        opacity: 0;
        width:0;
        height:0;
   
`;
export const CheckBoxContainer  = styled.div`
    > label:before {
        content:"";
        display:inline-flex;
        width: 15px;;
        height:15px;
        border:1px solid black;
        border-radius:2px;
        cursor:pointer;
    }
    > label > svg {
        width: 13px;
        height: 13px;
        margin-left: 2px;
        margin-top: -1px;
        cursor:pointer;
        position:absolute;
        opacity:0;
    }
    > label > input:checked + svg {
        opacity:1;
    }
`;