import React from 'react'

const Loader = () => {
  return (
    <div>
        {/* <!-- Page Loader --> */}
    <div className="page-loader-wrapper">
        <div className="loader">
            <div className="preloader">
                <div className="spinner-layer pl-red">
                    <div className="circle-clipper left">
                        <div className="circle"></div>
                    </div>
                    <div className="circle-clipper right">
                        <div className="circle"></div>
                    </div>
                </div>
            </div>
            <p>Please wait...</p>
        </div>
    </div>
    {/* end loader */}
    </div>
  )
}

export default Loader
