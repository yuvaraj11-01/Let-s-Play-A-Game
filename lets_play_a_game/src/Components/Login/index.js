import React from 'react'
import { useState,useEffect } from 'react'
import Form from './LoginComponents/Form';

function Login({setLog}) {
    
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
       
        console.log(typeof(setLog)); 
        setLog();
    }, []);

    useEffect(() => {
        return () => {
            setIsMounted(false);
        }
    }, []);

    return (
        <>
            <Form submitAuth={setLog}/>
        </>
    )
}

export default Login
