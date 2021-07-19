import React from 'react'; 
import PropTypes from 'prop-types';
 
const propTypes = {};

const defaultProps = {}; 
const Csrpublications = () => {
    return (
        <>
          <section id="content">
			<div className="content-wrap">
				<div className="container">

					<div className="row col-mb-50">
						<div className="col-12">
							<div className="head-title">
								<h2>CSR Publications</h2>
						    </div> 
								<div className="row">
							  <div className="col-md-6 col-lg-3">
								<div className="card">
									<a href="#">
								  <img className="card-img-top w-100 h-auto" src="/img/csr/AurobindoPharma-FY-2016-17-CSR-Magazine-1.jpg" alt="Magazine" />
								  <div className="card-body">
								    <h5 className="card-title text-center ">2016-17 CSR Magazine</h5>
								  </div>
								  </a>
								</div>
							  </div>
							  <div className="col-md-6 col-lg-3">
								<div className="card">
									<a href="#">
								  <img className="card-img-top w-100 h-auto" src="/img/csr/AurobindoPharma-FY-2017-18-CSR-Magazine-2.jpg" alt="Magazine" />
								  <div className="card-body">
								   <h5 className="card-title text-center ">2016-17 CSR Magazine</h5>
								  </div>
								  </a>
								</div>
							  </div>
							  <div className="col-md-6 col-lg-3">
								<div className="card">
									<a href="#">
								  <img className="card-img-top w-100 h-auto" src="/img/csr/AurobindoPharma-FY-2018-19-CSR-Magazine.jpg" alt="Magazine" />
								  <div className="card-body">
								   <h5 className="card-title text-center ">2016-17 CSR Magazine</h5>
								  </div>
								  </a>
								</div>
							  </div>
							  <div className="col-md-6 col-lg-3">
								<div className="card">
									<a href="#">
									  <img className="card-img-top w-100 h-auto" src="/img/csr/Aurobindo-Pharma-FY-2019-20-CSR-Magazine.jpg" alt="Magazine" />
									  <div className="card-body">
									    <h5 className="card-title text-center ">2016-17 CSR Magazine</h5>
									  </div>
									</a>
								</div>
							  </div>
							</div>	 	 	  
						
						</div>  
					</div> 
				</div>
			</div>
		</section>
        </>
    );
}

Csrpublications.propTypes = propTypes;
Csrpublications.defaultProps = defaultProps;
// #endregion

export default Csrpublications;