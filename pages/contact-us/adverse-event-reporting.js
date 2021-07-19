import React from 'react'; 
import PropTypes from 'prop-types';
 
const propTypes = {};

const defaultProps = {};
 
const Adverseeventreporting = () => {
    return (
        <>
         <section id="content">
			<div className="content-wrap">
				<div className="container">

					<div className="row col-mb-50">
						<div className="col-12">
							<div className="head-title">
								<h2>Adverse Event Reporting</h2>
								<p>The safety of our products and health and well-being of our patients are our highest priority. If you would like to report an adverse eventinvolving a Aurobindo medicine, please contact our global pharmacovigilance team.</p>

								<form className="mb-0" id="" name="" action="" method="post" novalidate="novalidate">
								<div className="row"> 

										<div className="col-md-9 form-group"> 
											<select id="template-contactform-service" name="template-contactform-service" className="sm-form-control valid">
												<option>Choose Country</option>
													<option value="Belgium">Belgium</option>
													<option value="Brazil">Brazil</option>
													<option value="Canada">Canada</option>
													<option value="Colombia">Colombia</option>
													<option value="Czech Republic">Czech Republic</option>
													<option value="France">France</option>
													<option value="Germany">Germany</option>
													<option value="Gulf Cooperation Council">Gulf Cooperation Council</option>
													<option value="India">India</option>
													<option value="Ireland">Ireland</option>
													<option value="Italy">Italy</option>
													<option value="Malta">Malta</option>
													<option value="Mexico">Mexico</option>
													<option value="Netherlands">Netherlands</option>
													<option value="Oman">Oman</option>
													<option value="Poland">Poland</option>
													<option value="Portugal">Portugal</option>
													<option value="Republic of Ghana">Republic of Ghana</option>
													<option value="Romania">Romania</option>
													<option value="Saudi Arabia">Saudi Arabia</option>
													<option value="South Africa">South Africa</option>
													<option value="Spain">Spain</option>
													<option value="Thailand">Thailand</option>
													<option value="UK">UK</option>
													<option value="Ukraine">Ukraine</option>
													<option value="United Arab Emirates">United Arab Emirates</option>
													<option value="United States of America">United States of America</option>

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

Adverseeventreporting.propTypes = propTypes;
Adverseeventreporting.defaultProps = defaultProps;
// #endregion

export default Adverseeventreporting;