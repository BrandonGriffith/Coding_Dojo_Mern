import React from 'react';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';


const SignIn = () => {
    return (
        <div>
            <h1>Sign-in or Register</h1>
            <div className="row">
                <div className="col bg-dark text-light m-5 p-1 roundMe">
                    <RegistrationForm/>
                </div>
                <div className="col h-50 bg-dark text-light m-5 p-1 roundMe">
                    <LoginForm/>
                </div>
            </div>
            
        </div>
    );
};
export default SignIn;
