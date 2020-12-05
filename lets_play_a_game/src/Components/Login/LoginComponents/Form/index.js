import React from 'react'
import {useState} from 'react'
import FormSignIn from '../Form2/FormSignIn'
import Logo from '../Img/login.PNG'
import './Form.css'
import FormSignUp from './FormSignUp'
//import FormElements from './FormElements';
//import FormSignUp from './FormSignUp';
//import FormSuccess from './FormSuccess';


const Form = ({submitAuth}) => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    function submitForm(){
        setIsSubmitted(true)
    }

    const [isregister, setregister] = useState(false)

    function goToRegister(){
        setregister(false)
    }
    function goToSignIN(){
        setregister(true)
    }

    return (
        <div className="from-MainContainer">
        <div className="form-Game-Title">Let's Play A Game</div>
        <div className="form-container">
            <div className="form-content-left">
                <img src={Logo} alt="logo" className="form-img"/>
            </div>
            
        { (!isregister)? ((!isSubmitted)? (<FormSignUp submitForm={submitForm} submitAuth={submitAuth} goSignIn={goToSignIN} />):<h3>Loading...</h3> ): ((!isSubmitted)?  (<FormSignIn submitForm={submitForm} submitAuth={submitAuth} goregister={goToRegister}/> ) : <h3>Loading...</h3> )   }
            
        </div>
        
        
        </div>
    )
}

export default Form