import React from 'react'
import Navbar from './Navbar'

const DeleteStudent = () => {
  return (
    <div>
        <br></br><br></br>
        <Navbar/>
        <br></br><br></br><br></br>
        <center><h5><u>DELETE STUDENT DETAILS</u></h5></center>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <center><div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Enter Admission No.</label>
                            <input type="text" className="form-control" />
                        </div></center>
                        <br></br>
                        <center><div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-danger">DELETE</button>
                        </div></center>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeleteStudent