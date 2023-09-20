import Link from 'next/link'
import React from 'react'

const Register = () => {
  return (
    <div className="row justify-content-center py-3">

      <div className="col-6 my-5 px-5">
        <div className="subscribe-box-style-1 p-5 py-5" data-bg-image="media/elements/element_5.png">
          <div className="subscribe-content login-form">
            <h3 className="title pb-3">
              Sign up to enjoy a tailored Experience
            </h3>

            <form method="post" className="rt-contact-form subscribe-form rt-form pt-5 px-3">

              <div className="row col-12 m-0">

                <div className="col-6 ps-0">
                  <div className="rt-form-group mb-4">
                    <input type="text" className="form-control rt-form-control text-start" placeholder='First Name' />
                  </div>
                </div>

                <div className="col-6 pe-0">
                  <div className="rt-form-group mb-4">
                    <input type="text" className="form-control rt-form-control text-start" placeholder='Last Name' />
                  </div>
                </div>
              </div>


              <div className="rt-form-group mb-4">
                <input type="text" className="form-control rt-form-control text-start" placeholder='Username' />

              </div>
              <div className="rt-form-group mb-4">
                <input type="text" className="form-control rt-form-control text-start" placeholder='Email' />

              </div>

              <div className="row col-12 m-0">

                <div className="col-6 ps-0">
                  <div className="rt-form-group mb-4">
                    <input type="password" className="form-control rt-form-control text-start" placeholder='Password' />
                  </div>
                </div>

                <div className="col-6 pe-0">
                  <div className="rt-form-group mb-4">
                    <input type="password" className="form-control rt-form-control text-start" placeholder='Confirm   Password' />

                  </div>
                </div>
              </div>

              <button type="submit" className="rt-submit-btn mt-3">Sign Up</button>
              <div className="form-response">



                <div className="small-text text-danger">
                </div>
                <div className="small-text text-danger">
                </div>
                <div className="small-text text-danger">
                </div>


              </div>
              <div className="small-text pt-3">
                Already have an account? <Link href="/user/login">Sign In</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register