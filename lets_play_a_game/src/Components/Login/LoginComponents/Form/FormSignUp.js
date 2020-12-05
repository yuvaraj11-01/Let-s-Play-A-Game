
import React from 'react'
import './Form.css'
import validateInfoSignIn from './ValidationInfo'
import UseFormSignIn from './UseForm'

const FormSignUp = ({submitForm,submitAuth,goSignIn}) => {

    const { handleChange,values,handleSubmit,errors} = UseFormSignIn(submitForm,submitAuth,validateInfoSignIn);
    {console.log(submitAuth)}
    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Get started with us today !</h1>
                {/* name */}
                <div className="form-inputs">
                    <label htmlFor="username" className="form-label">
                        User Name
                    </label>
                    <input
                            id="username"
                            type="text"
                            name="username"
                            className="form-input"
                            placeholder="Enter your Username..."
                            value={values.username}
                            onChange={handleChange}
                            />
                            {errors.username && <p>{errors.username}</p>}
                </div>
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
                {/* Confirm Password */}
                <div className="form-inputs">
                    <label htmlFor="password2" className="form-label">
                        Confirm Password
                    </label>
                    <input
                            id="password2"
                            type="password"
                            name="password2"
                            className="form-input"
                            placeholder="password Confirm..."
                            value={values.password2}
                            onChange={handleChange}
                             />
                             {errors.password2 && <p>{errors.password2}</p>}
                </div>
                <span className="form-input-login">Already have an account? Login <button type="button" onClick={()=>{goSignIn();}}>here</button> </span>
                <button className="form-input-btn" type='submit' >Sign Up</button>
                
            </form>
            
        </div>   
    )
}

export default FormSignUp