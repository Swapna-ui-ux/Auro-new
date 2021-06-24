import React from 'react';

import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};
const Nav = () => {
    return (
<>
<header id="header" className="full-header">
			<div id="header-wrap">
				<div className="container">
					<div className="header-row">

					    <div id="logo">
							<a href="index.php" className="standard-logo" data-dark-logo="img/aurobindo-logo.png">
								<img src="img/aurobindo-logo.png" alt="Aurobindo Logo"/></a> 
						</div>
						<div className="header-misc">
							<div className="headersearch" data-bs-toggle="modal" data-bs-target=".bs-example-modal-fs">
								<a href="#"><i className="icon-line-search"></i> </a>
							</div>
							<div className="header-icons">
								<a href="#"><i className="icon-envelope1"></i> </a>
							</div>
							<div className="header-icons">
								<a href="#"><i className="icon-globe-asia"></i> </a>
							</div> 
						</div>

						<div id="primary-menu-trigger">
							<svg className="svg-trigger" viewBox="0 0 100 100"><path d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"></path><path d="m 30,50 h 40"></path><path d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"></path></svg>
						</div>

						<nav className="primary-menu">
                           <ul className="menu-container">
								<li className="menu-item mega-menu">
									<a className="menu-link" href="#"><div>About Us</div></a>
									<div className="mega-menu-content mega-menu-style-2" style={{"width": "100%"}}>
										<div className="container">
											<div className="row">
												<ul className="sub-menu-container mega-menu-column col-md-4">
													<li className="menu-item mega-menu-title">
														<a className="menu-link" href="#"><div>At A Glance</div></a>
														<ul className="sub-menu-container">
															<li className="menu-item">
																<a className="menu-link" href=""><div>Business Overview</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href=""><div>Timeline And History</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href=""><div>Global Operations Map</div></a>
															</li> 
														</ul>
													</li>
												</ul>
                                                <ul className="sub-menu-container mega-menu-column col-md-4">
													<li className="menu-item mega-menu-title">
														<a className="menu-link" href="#"><div>Business Units</div></a>
														<ul className="sub-menu-container">
															<li className="menu-item">
																<a className="menu-link" href=""><div>Formulations</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href=""><div>Custom Synthesis</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href=""><div>Peptides</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href=""><div>AuroZymes</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href=""><div>R&D</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href=""><div>API</div></a>
															</li>
														</ul>
													</li>
												</ul>
												<ul className="sub-menu-container mega-menu-column col-md-4">
													<li className="menu-item mega-menu-title">
														<a className="menu-link" href="#"><div>Corporate Governance</div></a>
														<ul className="sub-menu-container">
															<li className="menu-item">
																<a className="menu-link" href=""><div>Board Of Directors</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href=""><div>Board Committees</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href=""><div>Governance Policies</div></a>
															</li>
															 
														</ul>
													</li>
												</ul> 
											</div>
										</div>
									</div>
								</li> 
								<li className="menu-item mega-menu">
									<a className="menu-link" href="#"><div>Sustainability</div></a>
									<div className="mega-menu-content mega-menu-style-2" style={{"width": "100%"}}>
										<div className="container">
											<div className="row">
												<ul className="sub-menu-container mega-menu-column col-lg-3">
													<li className="menu-item mega-menu-title">
														<a className="menu-link" href="#"><div>Social-Accountability-Standards</div></a>
														<ul className="sub-menu-container">
															<li className="menu-item">
																<a className="menu-link" href=""><div>Social Compliance Certification</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href=""><div>Sustainability Of Social Accountability Standards</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href=""><div>Human Rights Policy</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href=""><div>Progressive Health And Safety Practices</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href=""><div>Community Impact</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href=""><div>Supply Chain Management</div></a>
															</li>
														</ul>
													</li>
												</ul>
												<ul className="sub-menu-container mega-menu-column col-lg-3">
													<li className="menu-item mega-menu-title">
														<a className="menu-link" href="#"><div>CSR</div></a>
														<ul className="sub-menu-container">
															<li className="menu-item">
																<a className="menu-link" href=""><div>Our Commitment</div></a>
																<ul className="sub-menu-container mega-menu-dropdown">
																	<li className="menu-item">
																		<a className="menu-link" href=""><div>Annual Action Plan</div></a>
																	</li> 
																	<li className="menu-item">
																		<a className="menu-link" href=""><div>CSR Committee</div></a>
																	</li>
																	<li className="menu-item">
																		<a className="menu-link" href=""><div>CSR Policy</div></a>
																	</li>
																	<li className="menu-item">
																		<a className="menu-link" href=""><div>Flagship Programs</div></a>
																	</li>
																	<li className="menu-item">
																		<a className="menu-link" href=""><div>Focus Areas & Sdgs</div></a>
																	</li>
																	<li className="menu-item">
																		<a className="menu-link" href=""><div>Implementing Partners</div></a>
																	</li>
																	<li className="menu-item">
																		<a className="menu-link" href=""><div>Key Message</div></a>
																	</li>
																</ul>
															</li> 
															<li className="menu-item">
																<a className="menu-link" href=""><div>Reports</div></a>
																<ul className="sub-menu-container mega-menu-dropdown">
																	<li className="menu-item">
																		<a className="menu-link" href=""><div>Annual Report</div></a>
																	</li>
																	<li className="menu-item">
																		<a className="menu-link" href=""><div>CSR Publications</div></a>
																	</li>
																	<li className="menu-item">
																		<a className="menu-link" href=""><div>Resources</div></a>
																	</li>
																	<li className="menu-item">
																		<a className="menu-link" href=""><div>Stakeholder Reports</div></a>
																	</li>
																</ul>
															</li>


															<li className="menu-item">
																<a className="menu-link" href=""><div>Aurobindo Pharma Foundation</div></a>
																<ul className="sub-menu-container mega-menu-dropdown">
																	<li className="menu-item">
																		<a className="menu-link" href=""><div>About APF</div></a>
																	</li>
																	<li className="menu-item">
																		<a className="menu-link" href=""><div>Our Milestones</div></a>
																	</li>
																	<li className="menu-item">
																		<a className="menu-link" href=""><div>Our Outreach Touches</div></a>
																	</li> 
																</ul>
															</li> 
															<li className="menu-item">
																<a className="menu-link" href="#"><div>Testimonials</div></a>
																<ul className="sub-menu-container mega-menu-dropdown">
																	<li className="menu-item">
																		<a className="menu-link" href=""><div>Awards & Recognition</div></a>
																	</li>
																	<li className="menu-item">
																		<a className="menu-link" href=""><div>Documentaries</div></a>
																	</li>
																	<li className="menu-item">
																		<a className="menu-link" href=""><div>Media News</div></a>
																	</li>
																	<li className="menu-item">
																		<a className="menu-link" href=""><div>Photo Gallery</div></a>
																	</li>
																</ul>
															</li>
														</ul>
													</li>
												</ul>

												<ul className="sub-menu-container mega-menu-column col-lg-3">
													<li className="menu-item mega-menu-title">
														<a className="menu-link" href="#"><div>Access To Healthcare</div></a>
														<ul className="sub-menu-container">
															<li className="menu-item">
																<a className="menu-link" href=""><div>PEPFAR Program</div></a>
															</li> 
														</ul>
													</li>
												</ul>
												<ul className="sub-menu-container mega-menu-column col-lg-3">
													<li className="menu-item mega-menu-title">
														<a className="menu-link" href="#"><div>Environment & Community</div></a>
														<ul className="sub-menu-container"> 
															<li className="menu-item">
																<a className="menu-link" href=""><div>Environment</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href=""><div>Community</div></a>
															</li>
														</ul>
													</li>
												</ul>
												
											</div>
										</div>
									</div>
								</li> 
								<li className="menu-item mega-menu">
									<a className="menu-link" href="#"><div>Investors</div></a>
									<div className="mega-menu-content mega-menu-style-2" style={{"width": "100%"}}>
										<div className="container">
											<div className="row">
												<ul className="sub-menu-container mega-menu-column col-lg-3">
													<li className="menu-item mega-menu-title">
														<a className="menu-link" href="#"><div>Results, Reports & Presentations</div></a>
														<ul className="sub-menu-container">
															<li className="menu-item">
																<a className="menu-link" href=""><div>Results Announcements</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href=""><div>Annual Reports</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href=""><div>Investor Presentations</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href=""><div>Conference Call Transcripts</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href=""><div>Financials – Subsidiaries</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href=""><div>Credit Rating</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href=""><div>Disclosure Of Events Or Information</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href=""><div>Related Party Transactions</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href=""><div>Annual Returns</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href=""><div>Annual Secretarial Compliance Report</div></a>
															</li>
														</ul>
													</li> 
												</ul> 
												<ul className="sub-menu-container mega-menu-column col-lg-3">
													<li className="menu-item mega-menu-title">
														<a className="menu-link" href="#"><div>Shareholder Information</div></a>
														<ul className="sub-menu-container">
															<li className="menu-item">
																<a className="menu-link" href=""><div>Shareholder Structure</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href=""><div>Share Performance</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href=""><div>Financial Highlights</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href=""><div>Notice Of Board Meeting</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href=""><div>General Meetings</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href=""><div>Dividend Record</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href=""><div>Scheme Of Arrangements</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href=""><div>Unpaid Dividend Account Details</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href=""><div>Registrar And Share Transfer Agent</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href=""><div>Contact Details For Investor Grievance Redressal</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href=""><div>General</div></a>
															</li>
														</ul>
													</li> 
												</ul> 
												<ul className="sub-menu-container mega-menu-column col-lg-3">
													<li className="menu-item mega-menu-title">
														<a className="menu-link" href="#"><div>Corporate Governance</div></a>
														<ul className="sub-menu-container">
															<li className="menu-item">
																<a className="menu-link" href=""><div>Board Of Directors</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href=""><div>Board Committees</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href=""><div>Governance Policies</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href=""><div>Code Of Conduct</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href=""><div>Code Of Practices And Procedures For Fair Disclosure</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href=""><div>Appointment And Resignation Of Directors</div></a>
															</li>
														</ul>
													</li> 
												</ul> 
												<ul className="sub-menu-container mega-menu-column col-lg-3">
													<li className="menu-item mega-menu-title">
														<a className="menu-link" href="#"><div>IR Contacts</div></a>
														<ul className="sub-menu-container">
															<li className="menu-item">
																<a className="menu-link" href=""><div>Phone Numbers & Email Addresses</div></a>
															</li> 
														</ul>
													</li> 
												</ul>
											</div>
										</div>
									</div>
								</li>
								<li className="menu-item">
									<a className="menu-link" href=""><div>Media</div></a>
									<ul className="sub-menu-container"> 
										<li className="menu-item">
											<a className="menu-link" href=""><div>Press Releases</div></a>
											<ul className="sub-menu-container">
												<li className="menu-item">
													<a className="menu-link" href=""><div>Corporate Announcements</div></a>
												</li> 
											</ul>
										</li>
										<li className="menu-item">
											<a className="menu-link" href=""><div>Media Kit</div></a> 
											<ul className="sub-menu-container">
												<li className="menu-item">
													<a className="menu-link" href=""><div>Fact Sheet</div></a>
												</li>
												<li className="menu-item">
													<a className="menu-link" href=""><div>Videos</div></a>
												</li>
												<li className="menu-item">
													<a className="menu-link" href=""><div>Official Logos</div></a>
												</li>
											</ul>
										</li>  
									</ul>
								</li> 
								<li className="menu-item">
									<a className="menu-link" href=""><div>Careers</div></a>
									<ul className="sub-menu-container">
										<li className="menu-item">
											<a className="menu-link" href=""><div>HR Mission And Vision</div></a>
										</li>
										<li className="menu-item"> 
											<a className="menu-link" href=""><div>Current Vacancies</div></a>
											<ul className="sub-menu-container">
												<li className="menu-item">
													<a className="menu-link" href=""><div>Searchable Database</div></a>
												</li> 
											</ul>
										</li> 
									</ul>
								</li> 
								<li className="menu-item">
									<a className="menu-link" href=""><div>Contact Us</div></a> 
								</li> 
							</ul>

						</nav>

						<form className="top-search-form" action="" method="get">

						</form>

					</div>
				</div>
			</div>
			<div className="header-wrap-clone"></div>
		</header>
       
</>

    );
}

Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;
export default Nav;