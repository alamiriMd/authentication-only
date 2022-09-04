import React, { useEffect } from 'react';
import { FixedContainer } from '../styles/fixedContainer';
import { CentralContainer, UserEmailContainer } from '../styles/centralContainer';
import { Logo } from '../styles/logo';
import { Button } from '../styles/button';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { useNavigate } from 'react-router-dom';
import { LOGOUT } from '../redux/reducers/authenication';

function ProfilePage (){
    const authentication = useAppSelector(state => state.authentication.value);
    const user = useAppSelector(state => state.authentication.user);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
        if(!authentication)navigate('/login');
    }, [authentication, navigate]);

    return (<FixedContainer>
                <CentralContainer>
                    <Logo>ONLY.</Logo>
                    <div>
                        <UserEmailContainer>Здравствуйте, <strong>{user.email}</strong></UserEmailContainer>
                        <CentralContainer>
                            <Button onClick={()=> dispatch(LOGOUT())} type='submit'>Войти</Button>
                        </CentralContainer>
                    </div>
                </CentralContainer>
        </FixedContainer>)
};

export default ProfilePage;