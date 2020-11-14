import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

const LoginPage = ({ location, history }: RouteComponentProps) => {
    return (
        <LoginForm location={location} history={history}></LoginForm>
    )
}

export default LoginPage
