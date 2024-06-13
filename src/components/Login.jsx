import React, { useState } from 'react'

const Login = () => {
    const [user, setData] = useState(
        {
            "email": "",
            "pswd": ""
        }
    )

    const inputHandler = (event) => {
        setData({ ...user, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(user)
    }

    return (
        <div>
            <div class="card text-center mb-3">
                <div class="card-body">
                    <h3 class="card-title"><b>User Log In</b></h3>
                    <p></p>
                    <p></p>
                    <div className="container">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="row g-3">
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">E-mail :</label>
                                        <input type="text" className="form-control" name='email' value={user.email} onChange={inputHandler} />
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Password :</label>
                                        <input type="password" className="form-control" name='pswd' value={user.pswd} onChange={inputHandler} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <button className="btn btn-warning" onClick={readValue}>Log In</button>
                    <br />
                    <br />
                    <b>If you are a new user please <a href="/a">Sign Up</a></b>
                </div>
            </div>
        </div>
    )
}

export default Login