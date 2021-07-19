import React from 'react'; 
import PropTypes from 'prop-types';
 
const propTypes = {};

const defaultProps = {};
 
const index = () => {
    return (
        <>
         <section id="content">
			<div className="content-wrap">
				<div className="container">

					<div className="row col-mb-50">
						<div className="col-12">
							<div className="head-title">
								<h2>Contact Us</h2>
			                    <p>At Aurobindo, we value your feedback as we are committed to continuously improving our products and services and providing greater value to our patients, customers and other stakeholders.</p>
				 
							</div> 
					    </div>  
							<div className="w-100"></div>

							 
							<div className="col-md-3">
							<div className="h4-title">
									<h3 style={{"width":"98%;"}}><a className="big-arrow-text" href="/contact-us/group-division-offices/">Group / Division Offices<i className="long-arrow">→</i></a></h3>
									<p>Division wise address and other contact details of our global office locations</p>
									<p><a className="learn-more-text" href="/contact-us/group-division-offices">Learn More</a></p>

						    </div>
						 </div> 
						<div className="col-md-3">
							<div className="h4-title">
								<h3><a className="big-arrow-text" href="/contact-us/general-inquiries/">General Inquiries<i className="long-arrow">→</i></a></h3>
								<p>For all inquiries not covered by the areas below, please use our general enquiry form.</p>
								<p><a className="learn-more-text" href="/contact-us/general-inquiries">Learn More</a></p>
		
						    </div>
						</div>
						<div className="col-md-3">
							<div className="h4-title">
								<h3><a className="big-arrow-text" href="/contact-us/adverse-event-reporting/">Adverse Event Reporting <i className="long-arrow">→</i></a></h3>
								<p>If you would like to report an adverse event involving an Aurobindo medicine, please contact us</p>
								<p><a className="learn-more-text" href="/contact-us/adverse-event-reporting">Learn More</a></p>

						    </div>
						</div>
						<div className="col-md-3">
							<div className="h4-title">
								<h3><a className="big-arrow-text" href="/contact-us/enquiry/">Enquiry<i className="long-arrow">→</i></a></h3>
									<p>Enquiry and feedback form of various departments of Aurobindo Pharma</p>
									<p><a className="learn-more-text" href="/contact-us/enquiry">Learn More</a></p>

						    </div>
						</div> 
                          <div className="row contactaddesblocks">
					      <div className="col-md-6">
							<div className="h4-title">
										<h5>REGISTERED OFFICE</h5>
										<p>Aurobindo Pharma Limited,
											<br/>Plot no. 2, Maitrivihar,
											<br/>Ameerpet,
											<br/>Hyderabad-500038
											<br/>Telangana, India.</p>
										<p>Phone: +91 (40) 6672 1200
											<br/>Fax: +91 (40) 2374 1080 / +91 (40) 2374 6833,
											<br/>Email: <a href="mailto:info@aurobindo.com">info@aurobindo.com</a></p>

						    </div>
						 </div> 
						 <div className="col-md-6">
							<div className="h4-title">
										<h5>CORPORATE OFFICE</h5>
										<p>Galaxy, Floors: 22-24,
											<br/>Plot No.1, Survey No.83/1,
											<br/>Hyderabad Knowledge City,
											<br/>Raidurg Panmaktha,
											<br/>Ranga Reddy District,
											<br/>Hyderabad – 500032
											<br/>Telangana, India.</p>
										<p>Tel: +91 40 6672 5000 / 6672 1200
											<br/>Fax: +91 (40) 2374 1080 / +91 (40) 2374 6833,
											<br/>Email: <a href="mailto:info@aurobindo.com">info@aurobindo.com</a></p>

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

index.propTypes = propTypes;
index.defaultProps = defaultProps;
// #endregion

export default index;