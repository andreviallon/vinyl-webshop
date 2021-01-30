import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm';

const RegisterPage = ({ location, history }: RouteComponentProps) => {
    return (
        <RegisterForm location={location} history={history}></RegisterForm>
    )
}

export default RegisterPage
