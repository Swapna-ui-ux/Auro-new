import React from 'react'; 
import PropTypes from 'prop-types';
 
const propTypes = {};

const defaultProps = {};
 
const Generalinquiries = () => {
    return (
        <>
          <section id="content">
			<div className="content-wrap">
				<div className="container">

					<div className="row col-mb-50">
						<div className="col-12">
							<div className="head-title">
								<h2>General Inquiries</h2>
								<p>At Aurobindo, we value your feedback as we are committed to continuously improving our products and services and providing greater value to our patients, customers and other stakeholders.</p>

								<form className="mb-0" id="" name="" action="" method="post" novalidate="novalidate">
								<div className="row"> 

										<div className="col-md-9 form-group"> 
											<select id="template-contactform-service" name="template-contactform-service" className="sm-form-control valid">
												<option value="">Select Country</option> 
												<option value="Brazil">Brazil</option>
												<option value="Canada">Canada</option>
												<option value="China">China</option>
												<option value="Colombia">Colombia</option>
												<option value="Czech Republic">Czech Republic</option>
												<option value="Ethiopia">Ethiopia</option>
												<option value="France">France</option>
												<option value="Germany">Germany</option>
												<option value="Hong Kong">Hong Kong</option>
												<option value="India">India</option>
												<option value="Ireland">Ireland</option>
												<option value="Italy">Italy</option>
												<option value="Japan">Japan</option>
												<option value="Kenya">Kenya</option>
												<option value="Malta">Malta</option>
												<option value="Mexico">Mexico</option>
												<option value="Netherlands">Netherlands</option>
												<option value="Nigeria">Nigeria</option>
												<option value="Poland">Poland</option>
												<option value="Portugal">Portugal</option>
												<option value="Romania">Romania</option>
												<option value="Russia">Russia</option>
												<option value="South Africa">South Africa</option>
												<option value="Spain">Spain</option>
												<option value="Tanzania">Tanzania</option>
												<option value="Thailand">Thailand</option>
												<option value="USA">USA</option>
												<option value="Ukraine">Ukraine</option>
												<option value="United Kingdom">United Kingdom</option>
												<option value="Vietnam">Vietnam</option>
												</select>
											</div>

											<div className="col-md-9 form-group"> 
											<select id="template-contactform-service" name="template-contactform-service" className="sm-form-control valid">
												<option value="">Select Location</option>  
												 
												</select>
											</div> 
									</div> 
								</form>
							</div> 
						</div>  
					</div> 
				</div>
			</div>
		</section>
        </>
    );
}

Generalinquiries.propTypes = propTypes;
Generalinquiries.defaultProps = defaultProps;
// #endregion

export default Generalinquiries;