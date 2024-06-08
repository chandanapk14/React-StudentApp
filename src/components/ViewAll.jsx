import React, { useState } from 'react'
import Navbar from './Navbar'

const ViewAll = () => {
    const [data,changeData]=useState(
    [
      {"name":"Bella","age":20,"registerno":100102},
      {"name":"Conrad","age":22,"registerno":100103},
      {"name":"Clifford","age":21,"registerno":100104}
    ]
)
  return (
    <div>
        <Navbar/>
        <br></br>
        <h4 align="center"><u>Student Details</u></h4><br></br><br></br>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                   <div className="row g-3">
                        {
                          data.map(
                            (value,index) => {
                                return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                <div class="card">
                                <img src="https://img.freepik.com/free-vector/man-profile-cartoon_18591-58482.jpg" class="card-img-top" alt="..."></img>
                                <div class="card-body">
                                <h5 align="center">{value.name}</h5><br></br>
                                <h6 align="center">{value.registerno}<br></br>DOB : 14.07.2002</h6>
                                </div>
                                </div>
                            </div>
                            }

                        )
                        }
                    
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewAll