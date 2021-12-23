import React from 'react';

import PropTypes from 'prop-types';
const propTypes = {};
const defaultProps = {};

const Footer = () => {
    return (
<>
<footer id="footer" className="dark"> 
			<div id="copyrights">
				<div className="container">

					<div className="row">

						<div className="col-lg-5">
					<div className="copyright-area-content">
					  <p>© Copyright 2021 Aurobindo Pharma. All Rights Reserved. 
					  </p>
				    </div>
				</div>
				<div className="col-lg-3"> 
					<div className="d-flex justify-content-center">
								<a href="#" className="social-icon si-small si-facebook">
									<i className="icon-facebook"></i> 
								</a>

								<a href="#" className="social-icon si-small si-twitter">
									<i className="icon-twitter"></i> 
								</a>

								<a href="#" className="social-icon si-small si-gplus">
									<i className="icon-linkedin2"></i> 
								</a> 

								<a href="#" className="social-icon si-small si-linkedin">
									<i className="icon-youtube2"></i> 
								</a>
							</div> 
				</div>
				<div className="col-lg-4">
					<div className="copyright-area-content">
					  <p className="text-right">
						  <a href="/privacy-policy">Privacy Policy</a> <span className="copyline">|</span> <a href="site-map">Site Map</a>
						  </p>
				    </div>
				</div>  
					</div>

				</div>
			</div> 
		</footer> 

		<div id="gotoTop" className="icon-angle-up"></div>

	 <div className="modal fade bs-example-modal-fs" tabIndex="-1" role="dialog" aria-labelledby="fsModalLabel" aria-hidden="true">
								<div className="modal-dialog modal-fullscreen">
									<div className="modal-content">
										<div className="modal-header">  
											<button type="button" className="popup-close btn-sm" data-bs-dismiss="modal" aria-hidden="true"> <img src="/img/close.png"/></button>

										</div>
										<div className="modal-body">
											<div className="search-overlay-form">
												<form>
													<input type="text" className="input-search" placeholder="Enter text to search" />
													 <button type="submit">
														<i className="icon-line-search"></i>
													</button>
												</form>
											</div>
										</div> 
									</div>
								</div>
							</div>
</>


    );
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;


export default Footer;