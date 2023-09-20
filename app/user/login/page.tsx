import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <div className="row justify-content-center py-5">

      <div className="col-6 my-5 px-5">
        <div className="subscribe-box-style-1 p-5 py-5" data-bg-image="/images/elements/element_5.png">
          <div className="subscribe-content login-form">
            <h3 className="title pb-3">
              Login to see what you like
            </h3>
            <div className="form-response">




            </div>
            <form className="rt-contact-form subscribe-form rt-form pt-5 px-3" method="post">

              <div className="rt-form-group mb-4">
                <input type="text" className="form-control rt-form-control text-start" placeholder='Username' />
              </div>
              <div className="rt-form-group mb-4">
                <input type="password" name="" className='form-control rt-form-control text-start' placeholder='Password' />
              </div>
              <button type="submit" className="rt-submit-btn mt-3">Sign In</button>
              <div className="form-response">




              </div>
              <div className="small-text pt-4">
                Don’t have an account? <Link href="/user/register">Get One</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login