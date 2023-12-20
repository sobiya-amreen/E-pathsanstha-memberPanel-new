import React from 'react'
import { Link } from 'react-router-dom'
import SideBar from '../SideBar/SideBar'
import TopBar from '../TopBar/TopBar'
// import Loader from '../Loader/Loader'

const EmergencyLoan = () => {
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

           




{/* Table start */}



            <div className="row clearfix">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="card">
                  <div className="header">
                    <h2>EMERGENCY LOAN TRANSACTION</h2>
                    {/* <ul className="header-dropdown m-r--5">
                                <li className="dropdown">
                                    <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                        <i className="material-icons">more_vert</i>
                                    </a>
                                    <ul className="dropdown-menu pull-right">
                                        <li><a href="javascript:void(0);" className=" waves-effect waves-block">Action</a></li>
                                        <li><a href="javascript:void(0);" className=" waves-effect waves-block">Another action</a></li>
                                        <li><a href="javascript:void(0);" className=" waves-effect waves-block">Something else here</a></li>
                                    </ul>
                                </li>
                            </ul> */}
                  </div>
                  <div className="body">
                    <div className="table-responsive">
                      <div
                        id="DataTables_Table_1_wrapper"
                        className="dataTables_wrapper form-inline dt-bootstrap"
                      >
                        <div className="dt-buttons">
                          <a
                            className="dt-button buttons-copy buttons-html5"
                            tabIndex="0"
                            aria-controls="DataTables_Table_1"
                            href="#"
                          >
                            <span>Copy</span>
                          </a>
                          <a
                            className="dt-button buttons-csv buttons-html5"
                            tabIndex="0"
                            aria-controls="DataTables_Table_1"
                            href="#"
                          >
                            <span>CSV</span>
                          </a>
                          <a
                            className="dt-button buttons-excel buttons-html5"
                            tabIndex="0"
                            aria-controls="DataTables_Table_1"
                            href="#"
                          >
                            <span>Excel</span>
                          </a>
                          <a
                            className="dt-button buttons-pdf buttons-html5"
                            tabIndex="0"
                            aria-controls="DataTables_Table_1"
                            href="#"
                          >
                            <span>PDF</span>
                          </a>
                          <a
                            className="dt-button buttons-print"
                            tabIndex="0"
                            aria-controls="DataTables_Table_1"
                            href="#"
                          >
                            <span>Print</span>
                          </a>
                        </div>
                        <div
                          id="DataTables_Table_1_filter"
                          className="dataTables_filter"
                        >
                          <label>
                            Search:
                            <input
                              type="search"
                              className="form-control input-sm"
                              placeholder=""
                              aria-controls="DataTables_Table_1"
                            />
                          </label>
                        </div>
                        <label>Show <select name="DataTables_Table_0_length" aria-controls="DataTables_Table_0" className="form-control input-sm"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> entries</label>
                        <table
                          className="table table-bordered table-striped table-hover dataTable js-exportable"
                          id="DataTables_Table_1"
                          role="grid"
                          aria-describedby="DataTables_Table_1_info"
                        >
                          <thead>
                            <tr role="row">
                              <th
                                className="sorting_asc a1"
                                tabIndex="0"
                                aria-controls="DataTables_Table_1"
                                rowSpan="1"
                                colSpan="1"
                                aria-sort="ascending"
                                aria-label="Name: activate to sort column descending"
                                
                              >
                                Id
                              </th>
                              <th
                                className="sorting a2"
                                tabIndex="0"
                                aria-controls="DataTables_Table_1"
                                rowSpan="1"
                                colSpan="1"
                                aria-label="Position: activate to sort column ascending"
                                
                              >
                                Account Number
                              </th>
                              <th
                                className="sorting a3"
                                tabIndex="0"
                                aria-controls="DataTables_Table_1"
                                rowSpan="1"
                                colSpan="1"
                                aria-label="Office: activate to sort column ascending"
                                
                              >
                                Full Name
                              </th>
                              <th
                                className="sorting a4" 
                                tabIndex="0"
                                aria-controls="DataTables_Table_1"
                                rowSpan="1"
                                colSpan="1"
                                aria-label="Age: activate to sort column ascending"
                                
                              >
                                Date
                              </th>
                              <th
                                className="sorting a5"
                                tabIndex="0"
                                aria-controls="DataTables_Table_1"
                                rowSpan="1"
                                colSpan="1"
                                aria-label="Start date: activate to sort column ascending"
                                
                              >
                                Laon Amount
                              </th>
                              <th
                                className="sorting a6"
                                tabIndex="0"
                                aria-controls="DataTables_Table_1"
                                rowSpan="1"
                                colSpan="1"
                                aria-label="Salary: activate to sort column ascending"
                                
                              >
                                RIO
                              </th>
                              <th
                                className="sorting a6"
                                tabIndex="0"
                                aria-controls="DataTables_Table_1"
                                rowSpan="1"
                                colSpan="1"
                                aria-label="Salary: activate to sort column ascending"
                                
                              >
                                Principle Amount
                              </th>
                              <th
                                className="sorting a6"
                                tabIndex="0"
                                aria-controls="DataTables_Table_1"
                                rowSpan="1"
                                colSpan="1"
                                aria-label="Salary: activate to sort column ascending"
                                
                              >
                                Interest Amount
                              </th>
                              <th
                                className="sorting a6"
                                tabIndex="0"
                                aria-controls="DataTables_Table_1"
                                rowSpan="1"
                                colSpan="1"
                                aria-label="Salary: activate to sort column ascending"
                                
                              >
                                EMI
                              </th>
                              <th
                                className="sorting a6"
                                tabIndex="0"
                                aria-controls="DataTables_Table_1"
                                rowSpan="1"
                                colSpan="1"
                                aria-label="Salary: activate to sort column ascending"
                                
                              >
                                Loan Balance
                              </th>
                              <th
                                className="sorting a6"
                                tabIndex="0"
                                aria-controls="DataTables_Table_1"
                                rowSpan="1"
                                colSpan="1"
                                aria-label="Salary: activate to sort column ascending"
                                
                              >
                                Guarantor 1
                              </th>
                              <th
                                className="sorting a6"
                                tabIndex="0"
                                aria-controls="DataTables_Table_1"
                                rowSpan="1"
                                colSpan="1"
                                aria-label="Salary: activate to sort column ascending"
                                
                              >
                                Guarantor 2
                              </th>
                            </tr>
                          </thead>
                          {/* <tfoot>
                            <tr>
                              <th rowSpan="1" colSpan="1">
                                Id
                              </th>
                              <th rowSpan="1" colSpan="1">
                                Account Number
                              </th>
                              <th rowSpan="1" colSpan="1">
                                Full Name
                              </th>
                              <th rowSpan="1" colSpan="1">
                                Date
                              </th>
                              <th rowSpan="1" colSpan="1">
                                Loan Amount
                              </th>
                              <th rowSpan="1" colSpan="1">
                                RIO
                              </th>
                              <th rowSpan="1" colSpan="1">
                                Principle Amount
                              </th>
                              <th rowSpan="1" colSpan="1">
                                Interest Amount
                              </th>
                              <th rowSpan="1" colSpan="1">
                                EMI
                              </th>
                              <th rowSpan="1" colSpan="1">
                                Loan Balance
                              </th>
                              <th rowSpan="1" colSpan="1">
                              Guarantor 1
                              </th>
                              <th rowSpan="1" colSpan="1">
                              Guarantor 2
                              </th>
                            </tr>
                          </tfoot> */}
                          {/* <tbody>
                            <tr role="row" className="odd">
                              <td className="sorting_1">Airi Satou</td>
                              <td>Accountant</td>
                              <td>Tokyo</td>
                              <td>33</td>
                              <td>2008/11/28</td>
                              <td>$162,700</td>
                            </tr>
                            <tr role="row" className="even">
                              <td className="sorting_1">Angelica Ramos</td>
                              <td>Chief Executive Officer (CEO)</td>
                              <td>London</td>
                              <td>47</td>
                              <td>2009/10/09</td>
                              <td>$1,200,000</td>
                            </tr>
                            <tr role="row" className="odd">
                              <td className="sorting_1">Ashton Cox</td>
                              <td>Junior Technical Author</td>
                              <td>San Francisco</td>
                              <td>66</td>
                              <td>2009/01/12</td>
                              <td>$86,000</td>
                            </tr>
                            <tr role="row" className="even">
                              <td className="sorting_1">Bradley Greer</td>
                              <td>Software Engineer</td>
                              <td>London</td>
                              <td>41</td>
                              <td>2012/10/13</td>
                              <td>$132,000</td>
                            </tr>
                            <tr role="row" className="odd">
                              <td className="sorting_1">Brenden Wagner</td>
                              <td>Software Engineer</td>
                              <td>San Francisco</td>
                              <td>28</td>
                              <td>2011/06/07</td>
                              <td>$206,850</td>
                            </tr>
                            <tr role="row" className="even">
                              <td className="sorting_1">Brielle Williamson</td>
                              <td>Integration Specialist</td>
                              <td>New York</td>
                              <td>61</td>
                              <td>2012/12/02</td>
                              <td>$372,000</td>
                            </tr>
                            <tr role="row" className="odd">
                              <td className="sorting_1">Bruno Nash</td>
                              <td>Software Engineer</td>
                              <td>London</td>
                              <td>38</td>
                              <td>2011/05/03</td>
                              <td>$163,500</td>
                            </tr>
                            <tr role="row" className="even">
                              <td className="sorting_1">Caesar Vance</td>
                              <td>Pre-Sales Support</td>
                              <td>New York</td>
                              <td>21</td>
                              <td>2011/12/12</td>
                              <td>$106,450</td>
                            </tr>
                            <tr role="row" className="odd">
                              <td className="sorting_1">Cara Stevens</td>
                              <td>Sales Assistant</td>
                              <td>New York</td>
                              <td>46</td>
                              <td>2011/12/06</td>
                              <td>$145,600</td>
                            </tr>
                            <tr role="row" className="even">
                              <td className="sorting_1">Cedric Kelly</td>
                              <td>Senior Javascript Developer</td>
                              <td>Edinburgh</td>
                              <td>22</td>
                              <td>2012/03/29</td>
                              <td>$433,060</td>
                            </tr>
                          </tbody> */}
                          no Data Available
                        </table>
                        <div
                          className="dataTables_info"
                          id="DataTables_Table_1_info"
                          role="status"
                          aria-live="polite"
                        >
                          Showing 1 to 10 of 57 entries
                        </div>
                        <div
                          className="dataTables_paginate paging_simple_numbers"
                          id="DataTables_Table_1_paginate"
                        >
                          <ul className="pagination">
                            <li
                              className="paginate_button previous disabled"
                              id="DataTables_Table_1_previous"
                            >
                              <a
                                href="#"
                                aria-controls="DataTables_Table_1"
                                data-dt-idx="0"
                                tabIndex="0"
                              >
                                Previous
                              </a>
                            </li>
                            <li className="paginate_button active">
                              <a
                                href="#"
                                aria-controls="DataTables_Table_1"
                                data-dt-idx="1"
                                tabIndex="0"
                              >
                                1
                              </a>
                            </li>
                            <li className="paginate_button ">
                              <a
                                href="#"
                                aria-controls="DataTables_Table_1"
                                data-dt-idx="2"
                                tabIndex="0"
                              >
                                2
                              </a>
                            </li>
                            <li className="paginate_button ">
                              <a
                                href="#"
                                aria-controls="DataTables_Table_1"
                                data-dt-idx="3"
                                tabIndex="0"
                              >
                                3
                              </a>
                            </li>
                            <li className="paginate_button ">
                              <a
                                href="#"
                                aria-controls="DataTables_Table_1"
                                data-dt-idx="4"
                                tabIndex="0"
                              >
                                4
                              </a>
                            </li>
                            <li className="paginate_button ">
                              <a
                                href="#"
                                aria-controls="DataTables_Table_1"
                                data-dt-idx="5"
                                tabIndex="0"
                              >
                                5
                              </a>
                            </li>
                            <li className="paginate_button ">
                              <a
                                href="#"
                                aria-controls="DataTables_Table_1"
                                data-dt-idx="6"
                                tabIndex="0"
                              >
                                6
                              </a>
                            </li>
                            <li
                              className="paginate_button next"
                              id="DataTables_Table_1_next"
                            >
                              <a
                                href="#"
                                aria-controls="DataTables_Table_1"
                                data-dt-idx="7"
                                tabIndex="0"
                              >
                                Next
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  Table end */}



           
          </div>
        </section>
      </div>
    </div>
  )
}

export default EmergencyLoan
