import axios from 'axios'
import React, { useState } from 'react'

const AddUser = () => {
  const [user, setData] = useState(
    {
      "name": "",
      "email": "",
      "pswd": "",
    }
  )

  const inputHandler = (event) => {
    setData({ ...user, [event.target.name]: event.target.value })
  }

  const readValue = () => {
    console.log(user)
    axios.post("http://localhost:8435/add", user).then(
      (response) => {
        console.log(response.data)
        if (response.data.status === "success") {
          alert("Successfully Added!")
        } if (response.data.status === "passworderror") {
          alert("Recheck Passwords!!!")
        }
      }
    ).catch(
      (error) => {
        alert(error.message)
      }
    )
  }

  return (
    <div>
      <div class="card text-center mb-3">
        <div class="card-body">
          <h3 class="card-title"><b>User Sign Up</b></h3>
          <p></p>
          <div className="container">
            <div className="row">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">E-mail ID:</label>
                    <input type="text" className="form-control" name='email' value={user.email} onChange={inputHandler} />
                  </div>
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Username :</label>
                    <input type="text" className="form-control" name='name' value={user.name} onChange={inputHandler} />
                  </div>
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Password :</label>
                    <input type="password" className="form-control" name='pswd' value={user.pswd} onChange={inputHandler} />
                  </div>
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Confirm Password :</label>
                    <input type="password" className="form-control" name='cpswd' value={user.cpswd} onChange={inputHandler} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <button className="btn btn-success" onClick={readValue}>Sign Up</button>
          <br />
          <br />
          <b>Go Back <a href="/">Home</a></b>
        </div>
      </div>
    </div>
  )
}

export default AddUser