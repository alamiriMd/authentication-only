import styled  from "styled-components"

type propsTypes = {
    $profile?:boolean
}
export const CentralContainer = styled.div<propsTypes>`
    gap:10px;
    padding:15px;
    max-width:${props=> props.$profile?'767px':'640px'};;
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`;

export const UserEmailContainer = styled.div`
    font-size:30px;
    @media(max-width:500px) {
        font-size:15px;
        
    }
`;