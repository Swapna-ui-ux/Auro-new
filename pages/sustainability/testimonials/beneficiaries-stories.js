import React from 'react'; 
import PropTypes from 'prop-types';
 
const propTypes = {};

const defaultProps = {};
 
const Beneficiariesstories = () => {
    return (
        <>
          <section id="content">
			<div className="content-wrap">
				<div className="container">

					<div className="row col-mb-50">
						<div className="col-12">
							<div className="head-title">
								<h2>Beneficiaries Stories</h2>
						    </div> 
								<div className="row">
							  <div className="col-md-6 col-lg-3">
								<div className="card">
									<a href="#">
								  <img className="card-img-top w-100 h-auto" src="/img/Beneficiaries Stories/Borapatla-Women-Skilling.jpg" alt="Beneficiaries" />
								  <div className="card-body">
								    <h5 className="card-title text-center">Case Study – Borapatla – Women Skilling</h5>
								  </div>
								  </a>
								</div>
							  </div>
							  <div className="col-md-6 col-lg-3">
								<div className="card">
									<a href="#">
								  <img className="card-img-top w-100 h-auto" src="/img/Beneficiaries Stories/LVPEI-Visakhapatnam.jpg" alt="Beneficiaries" />
								  <div className="card-body">
								   <h5 className="card-title text-center">Case Study – LVPEI Visakhapatnam</h5>
								  </div>
								  </a>
								</div>
							  </div>
							  <div className="col-md-6 col-lg-3">
								<div className="card">
									<a href="#">
								  <img className="card-img-top w-100 h-auto" src="/img/Beneficiaries Stories/Saraswathi-Vidya-Mandir-Hyderabad.jpg" alt="Beneficiaries" />
								  <div className="card-body">
								   <h5 className="card-title text-center">Case study – Saraswathi Vidya Mandir Hyderabad</h5>
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

Beneficiariesstories.propTypes = propTypes;
Beneficiariesstories.defaultProps = defaultProps;
// #endregion

export default Beneficiariesstories;