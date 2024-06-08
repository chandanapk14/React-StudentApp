import React, { useState } from 'react'
import Navbar from './Navbar'

const AddStudent = () => {
    const [data, setData] = useState(
        {
            "name": "",
            "AdmNo": "",
            "rollNo": "",
            "pname": "",
            "College": "",
            "dob": "",
            "email": "",
            "pass": "",
            "cpass": ""


        }
    )
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(data)
    }
    return (
        <div>
            <Navbar />
            <br></br>
            <center><h1>STUDENT DETAILS FORUM</h1></center><br></br>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" name="name" value={data.name} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Admission No:</label>
                                <input type="text" className="form-control" name="AdmNo" value={data.AdmNo} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Roll No:</label>
                                <input type="text" className="form-control" name="rollNo" value={data.rollNo} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Parent Name</label>
                                <input type="text" className="form-control" name="pname" value={data.pname} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">College</label>
                                <input type="text" className="form-control" name="college" value={data.college} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">DOB</label><br></br>
                                <input type="date" id="" className="form-control" name="dob" value={data.dob} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Email</label>
                                <input type="email" id="" className="form-control" name="email" value={data.email} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Password</label>
                                <input type="password" id="" className="form-control" name="pass" value={data.pass} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Confirm Password</label>
                                <input type="password" id="" className="form-control" name="cpass" value={data.cpass} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-success" onClick={readValue} >SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddStudent