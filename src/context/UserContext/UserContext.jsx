import React, {createContext} from 'react';

const UserContext = createContext();

const UserProvider = ({children}) => {

    const userData={
        
    }
    return(
        <UserContext.Provider value={userData}>
            {children}
        </UserContext.Provider>
    )
}

export {UserProvider, UserContext}