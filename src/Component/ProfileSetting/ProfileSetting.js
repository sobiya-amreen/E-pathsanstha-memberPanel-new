import React, { useState } from "react";
// import Loader from "../Loader/Loader";
import TopBar from "../TopBar/TopBar";
import SideBar from "../SideBar/SideBar";
import { Link } from "react-router-dom";
import './ProfileSetting.css'
import axios from "axios";
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { Submit } from "../../Service";

const ProfileSetting = () => {
    const { handleSubmit, register, formState: { errors } } = useForm();

    const [image, setImage] = useState('')

    const handleImage = (e) => {
        console.log(e.target.files);
        setImage(e.target.files[0])
    }

    const handleImageApi = () => {
        const formData = new FormData()
        formData.append('image', image)
        axios.post('https://api.slingacademy.com/v1/sample-data/blog-posts/1', formData).then((res) => {
            console.log(res);
            // JSON.stringify(res)
        })




    }

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
                                                <h2>
                                                    UPDATE MEMBER
                                                    {/* <small>Taken from <a href="https://github.com/RobinHerbots/jquery.inputmask" target="_blank">github.com/RobinHerbots/jquery.inputmask</a></small> */}
                                                </h2>
                                                {/* <ul className="header-dropdown m-r--5">
                                <li className="dropdown">
                                    <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                        <i className="material-icons">more_vert</i>
                                    </a>
                                    <ul className="dropdown-menu pull-right">
                                        <li><a href="javascript:void(0);">Action</a></li>
                                        <li><a href="javascript:void(0);">Another action</a></li>
                                        <li><a href="javascript:void(0);">Something else here</a></li>
                                    </ul>
                                </li>
                            </ul> */}
                                            </div>
                                            <div className="body">
                                                <div className="demo-masked-input">
                                                    <div className="row clearfix">


                                                        <div className="col-md-8">
                                                            <b>Full Name (पूर्ण नाव)</b>
                                                            <div className="input-group">
                                                                <span className="input-group-addon">

                                                                    <i className="material-icons">person</i>
                                                                </span>
                                                                <div className="form-line">

                                                                    {/* <input type="text" className="form-control date" placeholder="Enter your name" /> */}
                                                                    <Form.Control
                                                                        type="text"
                                                                        className="form-control time24"
                                                                        placeholder="Enter your name"
                                                                        {...register("name", { required: "Please Enter  Enter your name" })}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <p style={{ color: "red" }}>{errors?.name?.message}</p>

                                                        </div>


                                                        <div className="col-md-8">
                                                            <b>Account Number (खाते क्रमांक)</b>
                                                            <div className="input-group">
                                                                <span className="input-group-addon">
                                                                    <i className="material-icons">event_note</i>
                                                                </span>
                                                                <div className="form-line">
                                                                    <Form.Control
                                                                        type="text"
                                                                        className="form-control time24"
                                                                        placeholder="Enter account number"
                                                                        {...register("accountHeadName", { required: "Please Enter  Account Number" })}
                                                                    />
                                                                    {/* <input type="number" className="form-control time24" placeholder="Enter account number" /> */}
                                                                </div>
                                                            </div>
                                                            <p style={{ color: "red" }}>{errors?.accountHeadName?.message}</p>

                                                        </div>

                                                        <div className="col-md-8">
                                                            <b>Department (विभाग)</b>
                                                            <div className="input-group">
                                                                <span className="input-group-addon">
                                                                    <i className="material-icons">group_add</i>
                                                                </span>
                                                                <div className="form-line">
                                                                    <input type="number" className="form-control time24" placeholder="Enter department" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-8">
                                                            <b>Designation (पदनाम)</b>
                                                            <div className="input-group">
                                                                <span className="input-group-addon">
                                                                    <i className="material-icons">account_circle</i>
                                                                </span>
                                                                <div className="form-line">
                                                                    {/* <input type="text" className="form-control time24" placeholder="Enter Designation" /> */}
                                                                    <Form.Control
                                                                        type="text"
                                                                        className="form-control time24"
                                                                        placeholder="Enter Designation"
                                                                        {...register("designation", { required: "Please Enter  Designation" })}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <p style={{ color: "red" }}>{errors?.designation?.message}</p>

                                                        </div>

                                                        <div className="col-md-8">
                                                            <b>DOB (Date of Birth)</b>
                                                            <div className="input-group">
                                                                <span className="input-group-addon">
                                                                    <i className="material-icons">date_range</i>
                                                                </span>
                                                                <div className="form-line">
                                                                    {/* <input type="date" className="form-control time24" placeholder="Enter date of birth" /> */}
                                                                    <Form.Control
                                                                        type="date"
                                                                        className="form-control time24"
                                                                        placeholder="Enter date of birth"
                                                                        {...register("dob", { required: "Please Enter  date of birth" })}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <p style={{ color: "red" }}>{errors?.dob?.message}</p>

                                                        </div>

                                                        <div className="col-md-8">
                                                            <b>DOJ(Date of Joining)</b>
                                                            <div className="input-group">
                                                                <span className="input-group-addon">
                                                                    <i className="material-icons">event_available</i>
                                                                </span>
                                                                <div className="form-line">
                                                                    {/* <input type="date" className="form-control time24" placeholder="Enter date of joining" /> */}
                                                                    <Form.Control
                                                                        type="date"
                                                                        className="form-control time24"
                                                                        placeholder="Enter date of joining"
                                                                        {...register("doj", { required: "Please Enter  date of joining" })}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <p style={{ color: "red" }}>{errors?.doj?.message}</p>

                                                        </div>

                                                        <div className="col-md-8">
                                                            <b>DOR (Date of Retirement) निवृत्तीची तारीख</b>
                                                            <div className="input-group">
                                                                <span className="input-group-addon">
                                                                    <i className="material-icons">sim_card</i>
                                                                </span>
                                                                <div className="form-line">
                                                                    {/* <input type="date" className="form-control time24" placeholder="Enter date of Retirement" /> */}
                                                                    <Form.Control
                                                                        type="date"
                                                                        className="form-control time24"
                                                                        placeholder="Enter date of Retirement "
                                                                        {...register("dor", { required: "Please Enter  date of Retirement" })}
                                                                    />
                                                               
                                                                </div>
                                                            </div>
                                                            <p style={{ color: "red" }}>{errors?.dor?.message}</p>

                                                        </div>

                                                        <div className="col-md-8">
                                                            <b>Mobile No</b>
                                                            <div className="input-group">
                                                                <span className="input-group-addon">
                                                                    <i className="material-icons">phone_in_talk</i>
                                                                </span>
                                                                <div className="form-line">
                                                                    {/* <input type="number" className="form-control time24" placeholder="Enter mobile number" /> */}
                                                                    <Form.Control
                                                                        type="number"
                                                                        className="form-control time24"
                                                                        placeholder="Enter mobile number "
                                                                        {...register("mob", { required: "Please Enter mobile number" })}
                                                                    />
                                                                
                                                                </div>
                                                            </div>
                                                            <p style={{ color: "red" }}>{errors?.mob?.message}</p>

                                                        </div>

                                                        <div className="col-md-8">
                                                            <b>Email Id</b>
                                                            <div className="input-group">
                                                                <span className="input-group-addon">
                                                                    <i className="material-icons">mail</i>
                                                                </span>
                                                                <div className="form-line">
                                                                    <input type="email" className="form-control time24" placeholder="Enter email id" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-8">
                                                            <b>Address (पत्ता)</b>
                                                            <div className="input-group">
                                                                <span className="input-group-addon">
                                                                    <i className="material-icons">home</i>
                                                                </span>
                                                                <div className="form-line">
                                                                    <input type="text" className="form-control time24" placeholder="Enter your address" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-8">
                                                            <b>Shares (भाग)</b>
                                                            <div className="input-group">
                                                                <span className="input-group-addon">
                                                                    <i className="material-icons">pie_chart</i>
                                                                </span>
                                                                <div className="form-line">
                                                                    <input type="number" className="form-control time24" placeholder="Enter shares" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-8">
                                                            <b>Monthly Deposit (मासिक ठेव )</b>
                                                            <div className="input-group">
                                                                <span className="input-group-addon">
                                                                    <i className="material-icons">attach_money</i>
                                                                </span>
                                                                <div className="form-line">
                                                                    <input type="number" className="form-control time24" placeholder="Enter Monthly Deposit " />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-8">
                                                            <b>Insurance (सभासद कल्याण निधी)</b>
                                                            <div className="input-group">
                                                                <span className="input-group-addon">
                                                                    <i className="material-icons">monetization_on</i>
                                                                </span>
                                                                <div className="form-line">
                                                                    <input type="number" className="form-control time24" placeholder="Enter Insurance " />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-8">
                                                            <b>Bank Account Number (बँक खाते क्रमांक)</b>
                                                            <div className="input-group">
                                                                <span className="input-group-addon">
                                                                    <i className="material-icons">receipt</i>
                                                                </span>
                                                                <div className="form-line">
                                                                <Form.Control
                                                                        type="number"
                                                                        className="form-control time24"
                                                                        placeholder="Enter Bank Account Number "
                                                                        {...register("bankacc", { required: "Please Enter Bank Account Number" })}
                                                                    />
                                                                    {/* <input type="number" className="form-control time24" placeholder="Enter Bank Account Number " /> */}
                                                                </div>
                                                            </div>
                                                            <p style={{ color: "red" }}>{errors?.bankacc?.message}</p>

                                                        </div>

                                                        <div className="col-md-8">
                                                            <b>Bank Name (बँकेचे नाव)</b>
                                                            <div className="input-group">
                                                                <span className="input-group-addon">
                                                                    <i className="material-icons">account_balance</i>
                                                                </span>
                                                                <div className="form-line">
                                                                <Form.Control
                                                                        type="number"
                                                                        className="form-control time24"
                                                                        placeholder="Enter Bank Name "
                                                                        {...register("bankname", { required: "Please Enter Bank Name" })}
                                                                    />
                                                                    {/* <input type="text" className="form-control time24" placeholder="Enter Bank Name" /> */}
                                                                </div>
                                                            </div>
                                                            <p style={{ color: "red" }}>{errors?.bankname?.message}</p>

                                                        </div>

                                                        <div className="col-md-8">
                                                            <b>IFSC Code (IFSC कोड)</b>
                                                            <div className="input-group">
                                                                <span className="input-group-addon">
                                                                    <i className="material-icons">keyboard</i>
                                                                </span>
                                                                <div className="form-line">
                                                                    <input type="number" className="form-control time24" placeholder="Enter Branch Code " />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-8">
                                                            <b>Monthly Deposit (मासिक ठेव )</b>
                                                            <div className="input-group">
                                                                <span className="input-group-addon">
                                                                    <i className="material-icons">local_atm</i>
                                                                </span>
                                                                <div className="form-line">
                                                                    <input type="number" className="form-control time24" placeholder="Enter Monthly Deposit " />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-8">
                                                            <b>Branch Name (शाखा नाव)</b>
                                                            <div className="input-group">
                                                                <span className="input-group-addon">
                                                                    <i className="material-icons">store</i>
                                                                </span>
                                                                <div className="form-line">
                                                                    <input type="text" className="form-control time24" placeholder="Enter Branch Name " />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-8">
                                                            <b>Nominee's Name (नामनिर्देशित व्यक्तीचे नाव)</b>
                                                            <div className="input-group">
                                                                <span className="input-group-addon">
                                                                    <i className="material-icons">person_pin</i>
                                                                </span>
                                                                <div className="form-line">
                                                                <Form.Control
                                                                        type="text"
                                                                        className="form-control time24"
                                                                        placeholder="Enter Nominee's Name "
                                                                        {...register("nominee", { required: "Please Enter Nominee's Name" })}
                                                                    />
                                                                    {/* <input type="text" className="form-control time24" placeholder="Enter Nominee's Name" /> */}
                                                                </div>
                                                            </div>
                                                            <p style={{ color: "red" }}>{errors?.nominee?.message}</p>

                                                        </div>

                                                        <div className="col-md-8">
                                                            <b>Nominee's Relation (नामनिर्देशित व्यक्तीचे नाते)</b>
                                                            <div className="input-group">
                                                                <span className="input-group-addon">
                                                                    <i className="material-icons">ac_unit</i>
                                                                </span>
                                                                <div className="form-line">
                                                                <Form.Control
                                                                        type="text"
                                                                        className="form-control time24"
                                                                        placeholder="Enter Nominee's Relation "
                                                                        {...register("nomineeR", { required: "Please Enter Nominee's Relation" })}
                                                                    />
                                                                    {/* <input type="text" className="form-control time24" placeholder="Enter Nominee's Relation " /> */}
                                                                </div>
                                                            </div>
                                                            <p style={{ color: "red" }}>{errors?.nomineeR?.message}</p>

                                                        </div>




                                                        <div className="col-md-8">
                                                            <b>Upload Photo</b>
                                                            <div className="input-group">
                                                                <span className="input-group-addon">
                                                                    <i className="material-icons">ac_unit</i>
                                                                </span>
                                                                <div className="form-line">
                                                                    <input type="file" name="file" onChange={handleImage} className="form-control time24" placeholder="Enter Nominee's Relation " />
                                                                </div>
                                                            </div>
                                                        </div>



                                                        <div className="col-md-8">
                                                            <b>Registration Fee</b>
                                                            <div className="input-group">
                                                                <span className="input-group-addon">
                                                                    <i className="material-icons">local_offer</i>
                                                                </span>
                                                                <div className="form-line">
                                                                    <input type="text" className="form-control time24" placeholder="Enter Registration Fee" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* <Button variant="primary"  type="submit" onClick={handleImageApi} className="btn btn-block btn-lg waves-effect">Update Profile</Button> */}
                                                        <Button type="submit" variant='primary' onClick={handleImageApi} className="btn btn-block btn-lg waves-effect">Profile Setting</Button>


                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- #END# Masked Input --> */}
                                {/* form starts */}


                            </Form.Group>
                        </Form>

                    </div>
                </section>
            </div >
        </div >
    );
};

export default ProfileSetting;
