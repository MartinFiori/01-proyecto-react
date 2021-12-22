import React, { createContext } from 'react';

const LoginContext = createContext()

const LoginProvider = ({children}) => {
    return (
        <LoginContext>
            {children}
        </LoginContext>
    );
}

export default LoginProvider;