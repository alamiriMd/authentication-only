import React, { useEffect } from 'react';
import { FixedContainer } from '../styles/fixedContainer';
import { CentralContainer, UserEmailContainer } from '../styles/centralContainer';
import { Logo } from '../styles/logo';
import { Button } from '../styles/button';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { useNavigate } from 'react-router-dom';
import { LOGOUT } from '../redux/reducers/authenication';

function ProfilePage (){
    const authentication = useAppSelector(state => state.authentication);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
        if(!authentication.loginStatus)navigate('/login');
    }, [authentication, navigate]);

    return (<FixedContainer>
                <CentralContainer $profile >
                    <Logo>ONLY.</Logo>
                    <div>
                        <UserEmailContainer>Здравствуйте, <strong>{authentication.email}</strong></UserEmailContainer>
                        <CentralContainer>
                            <Button onClick={()=> dispatch(LOGOUT())} type='submit'>Выйти</Button>
                        </CentralContainer>
                    </div>
                </CentralContainer>
        </FixedContainer>)
};

export default ProfilePage;