import styled, { keyframes, css }  from 'styled-components';

const opacity_keyframe = keyframes` 
     0% {
            opacity:1;
        }
    70% {
        opacity:1;
        }
    100% {
        opacity:0;
    }
`;

const animation = css`
    animation:${opacity_keyframe} 3s linear 1
`;

export const MessagesError = styled.div<{primary?:boolean, userNotFound?:string}>`
    padding:${props => props.primary?'15px':'1px'};
    font-size:14px;
    color:${props=> props.primary?"black":"#E26F6F"};
    border:${props => props.primary?'1px solid #E26F6F':'none'};
    border-radius:${props => props.primary?'8px':'1px'};
    background:${props => props.primary?"#F5E9E9":"inherit"};
    margin-bottom:${props => props.primary?"10px":"0" };
    display: flex;
    gap:10px;
    align-items: center;
    ${props=>props.userNotFound==='true'?animation:null};  
    opacity:${props=>props.userNotFound?"0":"1"};
    > svg {
        border-radius:50%;
        padding:2px;
        background:#FFC8C8;

    }
    @media(max-width: 800px){
        font-size:11px;
    }
`;