import React from 'react';
import { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    // const {children} = props
    return (
        <AuthContext.Provider value={useFirebase()}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;