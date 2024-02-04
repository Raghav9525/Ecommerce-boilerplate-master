import { React, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

function Login() {

    const [values, setValues] = useState({
        name: '',       // Added name state
        mobile: '',
        password: ''
    })
    const [signupPage, setSignupPage] = useState(false);

    const navigate = useNavigate()

    const submitForm = async (event) => {
        event.preventDefault();
        // Add your form submission logic here
    }

    const getSignupPage = () => {
        setSignupPage(true);
    }

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value })) // Corrected the value setting
    }

    return (
        <div>
            <div id="booking-container" class="container-fluid  align-items-center vh-60 ">
                <div class="row ">
                    <div class="col-sm-3"></div>
                    <div class="col-sm-6">
                        <div class="card p-4 mt-4 mb-4" >
                            <form onSubmit={submitForm}>
                                {signupPage &&
                                    <div class="mb-3">
                                        <label for="exampleInputName" class="form-label">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            onChange={handleInput}
                                            class="form-control"
                                            id="exampleInputName"
                                        />
                                    </div>
                                }
                                <div class="mb-3">
                                    <label for="exampleInputMobile" class="form-label">Mobile No.</label>
                                    <input
                                        type="mobile"
                                        name="mobile"
                                        onChange={handleInput}
                                        class="form-control"
                                        id="exampleInputMobile"
                                    />
                                </div>

                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        class="form-control"
                                        id="exampleInputPassword1"
                                        onChange={handleInput}
                                    />
                                </div>

                                <button type="submit" class="btn btn-primary me-2">{signupPage ? 'Sign Up' : 'Login'}</button>

                                {!signupPage && <NavLink to="#" onClick={getSignupPage} class="link-secondary">New user? Create Account</NavLink>}
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3"></div>
            </div>
        </div>
    )
}

export default Login
