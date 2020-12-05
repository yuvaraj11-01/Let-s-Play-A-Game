
import React from 'react'
import './Form.css'
import validateInfoSignIn from './ValidationInfo'
import UseFormSignIn from './UseForm'

const FormSignIn = ({submitForm,submitAuth,goregister}) => {
    const { handleChange,values,handleSubmit,errors} = UseFormSignIn(submitForm,submitAuth,validateInfoSignIn);
    {console.log(submitAuth)}
    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Login</h1>
                
                {/* Email */}
                <div className="form-inputs">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                            id="email"
                            type="text"
                            name="email"
                            className="form-input"
                            placeholder="Enter your email..." 
                            value={values.email}
                            onChange={handleChange}
                            />
                            {errors.email && <p>{errors.email}</p>}
                </div>
                {/* Password */}
                <div className="form-inputs">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                            id="password"
                            type="password"
                            name="password"
                            className="form-input"
                            placeholder="password..."
                            value={values.password}
                            onChange={handleChange}
                             />
                             {errors.password && <p>{errors.password}</p>}
                </div>
                
                <span className="form-input-login">Don't have Account? Register <button type="button" onClick={()=>{goregister();}}>here</button> </span>
                <button className="form-input-btn" type='submit' >Sign In</button>
                
            </form>
            
        </div>   
    )
}

export default FormSignIn
