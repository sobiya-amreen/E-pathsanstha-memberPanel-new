import React from 'react'
import { Link } from 'react-router-dom'
import SideBar from '../SideBar/SideBar'
import TopBar from '../TopBar/TopBar'
import Loader from '../Loader/Loader'
import './AnualReport.css'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { Submit } from '../../Service'

const AnualReport = () => {
  const { handleSubmit, register, formState: { errors } } = useForm();

  return (
    <div>
      <div className="theme-red">
        {/* <!-- Page Loader --> */}
        {/* <Loader /> */}
        {/* <!-- #END# Page Loader -->

    <!-- Search Bar --> */}
        <div className="search-bar">
          <div className="search-icon">
            <i className="material-icons">search</i>
          </div>
          <input type="text" placeholder="START TYPING..." />
          <div className="close-search">
            <i className="material-icons">close</i>
          </div>
        </div>
        {/* <!-- #END# Search Bar -->
      
   <!-- Top Bar --> */}
        <TopBar />
        {/* <!-- #Top Bar --> */}

        {/* sideBar */}
        <SideBar />
        {/* end sideBar */}

        <section className="content">
          <div className="container-fluid">
            <div className="block-header">
              <Link to="/">
                {" "}
                <h2>DASHBOARD</h2>
              </Link>
            </div>

            {/* form starts */}
            {/* <!-- Masked Input --> */}
            <Form onSubmit={handleSubmit(Submit)}>
              <Form.Group className="mb-3" controlId="formBasicEmail">

                <div className="row clearfix">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="card">
                      <div className="header">
                        <h2>ANUAL REPORT</h2>
                      </div>
                      <div className="body">
                        <div className="demo-masked-input">
                          <div className="row clearfix">
                            <div className="col-md-8">
                              <b>Select Start Date</b>
                              <div className="input-group">
                                <span className="input-group-addon">
                                  <i className="material-icons">event_note</i>
                                </span>
                                <div className="form-line">
                                  {/* <input
                                type="date"
                                className="form-control time24"
                                placeholder="Enter account number"
                              /> */}

                                  <Form.Control
                                    type="date"
                                    className="form-control time24"
                                    placeholder="Enter Start Date"
                                    {...register("start", { required: "Select Start Date" })}
                                  />
                                </div>
                              </div>
                              <p style={{ color: "red" }}>{errors?.start?.message}</p>

                            </div>

                            <div className="col-md-8">
                              <b>Select End Date</b>
                              <div className="input-group">
                                <span className="input-group-addon">
                                  <i className="material-icons">person</i>
                                </span>
                                <div className="form-line">
                                  {/* <input
                                    type="date"
                                    className="form-control date"
                                    placeholder="Enter your name"
                                  /> */}

                                  <Form.Control
                                    type="date"
                                    className="form-control time24"
                                    placeholder="Enter Start Date"
                                    {...register("end", { required: "Select End Date" })}
                                  />
                                </div>
                              </div>
                              <p style={{ color: "red" }}>{errors?.end?.message}</p>

                            </div>

                            <Button type="submit" variant="primary" className="btn bg-red btn-block btn-lg waves-effect">Submit</Button>
                            {/* <button type="button" className="btn2 bg-red btn-block btn-lg waves-effect">Report</button> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Form.Group>
            </Form>
            {/* <!-- #END# Masked Input --> */}
            {/* form starts */}













          </div>
        </section>
      </div>
    </div>
  )
}

export default AnualReport
