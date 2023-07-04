import React from "react"

function ContactPage(){
    return(

        <div>
            <h2 className= "p-2 m-2">ContactPage</h2>

            <form>
  <div className="mb-3 p-2 m-2">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3 p-2 m-2">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 p-2 m-2 form-check">
    <input type="checkbox" className="form-check-input m-2 p-2" id="exampleCheck1"/>
    <label className="form-check-label " for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary m-2 p-2">Submit</button>
</form>
        </div>
    ) ;
}

export default ContactPage ;