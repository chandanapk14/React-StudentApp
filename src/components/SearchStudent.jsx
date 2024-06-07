import React from 'react'
import Navbar from './Navbar'

const SearchStudent = () => {
  return (
    <div>
        <br></br><br></br>
        <Navbar/>
        <br></br>
        <h5 align="center"><u>Search for A Student</u></h5>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col xl-12 col-xxl-12">
                        <div className="col col-12 col-sm-12 col-md-12 col-ld-12 col-xl-12 col-xxl-12"><br></br>
                            <center><label htmlFor="" className="form-label">Name</label></center>
                            <input type="text" className="form-control" />
                        </div>
                        <center><div className="col col-12 col-sm-12 col-md-6 col-ld-6 col-xl-6 col-xxl-6"><br></br>
                            <button className="btn btn-primary">Search</button>
                        </div></center>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default SearchStudent