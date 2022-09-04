import styled from 'styled-components';

export const MessagesError = styled.div<{primary?:boolean, userNotFound?:string}>`
    @keyframes OPACITY {
        0% {
            opacity:1;
        }
        70% {
            opacity:1;
        }
        100% {
            opacity:0;
        }
    }
    padding:${props => props.primary?'15px':'1px'};
    font-size:14px;
    color:${props=> props.primary?"black":"#E26F6F"};
    border:${props => props.primary?'1px solid #E26F6F':'none'};
    border-radius:${props => props.primary?'8px':'1px'};
    background:${props => props.primary?"#F5E9E9":"inherit"};
    margin-bottom:${props => props.primary?"10px":"0" };
    animation:${props=>props.userNotFound==='true'?"OPACITY 3s linear 1":'none'};  
    opacity:${props=>props.userNotFound?"0":"1"};
`;