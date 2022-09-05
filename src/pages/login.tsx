import React, { useEffect, useState } from 'react';
import { useForm,  } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FixedContainer } from '../styles/fixedContainer';
import { CentralContainer } from '../styles/centralContainer';
import { Form  } from '../styles/form';
import { Logo } from '../styles/logo';
import { CheckBox, Input, CheckBoxContainer } from '../styles/input';
import { MessagesError } from '../styles/messages';
import { Button } from '../styles/button';
import { Label, CheckBoxLabel } from '../styles/label';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { useNavigate } from 'react-router-dom';
import { LOGIN } from '../redux/reducers/authenication';
import BackendAuth from '../components/backend.auth';
import * as Yup from 'yup';
import SVG from '../components/svg';
import { Span } from '../styles/span';

type FormInputsTypes = { 
    email:string
    password:string
    rememberPassword:boolean
}

const validationSchema = Yup.object().shape({
    email:Yup.string()
        .required('Обязательное поле')
        .email('Адрес электронной почты недействителен'),
    password: Yup.string().required('Обязательное поле')
        .min(6, 'Пароль должен быть не менее 6 символов')
        .max(20, 'Пароль не должен быть длиннее 20 символов')
});

function LoginPage (){
    const { register, handleSubmit, watch, formState:{errors} } = useForm<FormInputsTypes>({
        resolver:yupResolver(validationSchema)
    });
    const [userNotFound, setUserNotFound] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const authentication = useAppSelector(state => state.authentication.loginStatus);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
        if(authentication)navigate('/profile');
    }, [authentication, loading, navigate]);

    const onSubmit = (data:FormInputsTypes) => {
        if(!loading){
            setLoading(true);
            const backend = BackendAuth(data);
            setTimeout(()=>{
                if(backend){
                    setLoading(false);
                    dispatch(LOGIN(data));
                }else{
                    setLoading(false);
                    setUserNotFound(true);
                    setTimeout(()=>{
                        setUserNotFound(false);
                    },3000);
                }
            }, 2000);
        }
    };
    return (<FixedContainer>
                <CentralContainer>
                    <Logo>ONLY.</Logo>
                    <Form onSubmit={handleSubmit(onSubmit)} >
                        <MessagesError primary userNotFound={userNotFound.toString()}>
                                <SVG name='exclamation' color='#EE6565' />
                            <span>Пользователя {watch('email')} не существует</span>
                            </MessagesError>
                        <Label htmlFor='email'>Логин</Label>
                        <Input {...register('email')} type='emai' id='email'  title="Email" />
                        <MessagesError>{errors && errors.email?<p>{errors.email.message}</p>:null}</MessagesError>
                        <Label htmlFor='password'>Пароль</Label>
                        <Input {...register('password')} type='password'  id='password' title="Пароль" />
                        <MessagesError>
                            {errors && errors.password?<p>{errors.password.message}</p>:null}
                        </MessagesError>
                        <CheckBoxContainer>
                            <CheckBoxLabel htmlFor='rememberPassword' >
                                <CheckBox {...register('rememberPassword')} type='checkbox' name='rememberPassword' id='rememberPassword' />
                                <SVG name='square' color='blue' />
                                <Span>Запомнить пароль</Span>
                            </CheckBoxLabel>
                        </CheckBoxContainer>
                        <Button primary type='submit' loading={loading.toString()} >Войти</Button>
                    </Form>
                </CentralContainer>
        </FixedContainer>);
}
export default LoginPage;