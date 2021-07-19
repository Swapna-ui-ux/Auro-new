import React from 'react'; 
import PropTypes from 'prop-types';
 
const propTypes = {};

const defaultProps = {};
 
const Stakeholderreports = () => {
    return (
        <section id="content">
			<div class="content-wrap">
				<div class="container">

					<div class="row col-mb-50">
						<div class="col-12">
							<div class="head-title">
								<h2>Stakeholder Reports</h2>
						    </div> 
								<div class="row">
							  <div class="col-md-6 col-lg-3">
								<div class="card">
									<a href="#">
								  <img class="card-img-top w-100 h-auto" src="/img/csr/IPA-Samhita-Report-2020.jpg" alt="Reports"/>
								  <div class="card-body">
								    <h5 class="card-title text-center ">IPA – Samhita Report – 2020</h5>
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
    );
}

Stakeholderreports.propTypes = propTypes;
Stakeholderreports.defaultProps = defaultProps;
// #endregion

export default Stakeholderreports;