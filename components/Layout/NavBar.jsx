import React from 'react'; 
import PropTypes from 'prop-types';
import Link from 'next/link'

const propTypes = {};
const defaultProps = {};

const NavBar = () => {
    return (
      <div>
         <header id="header" className="full-header">
			<div id="header-wrap">
				<div className="container">
					<div className="header-row">

					    <div id="logo">
							<a href="/" className="standard-logo">
								<img src="/img/aurobindo-logo.png" alt="Aurobindo Logo"/></a> 
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
                                <Link href="/about-us"><a className="menu-link"><div>About Us</div></a></Link>
									<div className="mega-menu-content mega-menu-style-2" style={{"width": "100%"}}>
										<div className="container">
											<div className="row">
												<ul className="sub-menu-container mega-menu-column col-md-4">
													<li className="menu-item mega-menu-title">
													<Link href="/about-us/at-a-glance/business-overview"><a className="menu-link"><div>At A Glance</div></a></Link>
														<ul className="sub-menu-container">
															<li className="menu-item">
															<Link href="/about-us/at-a-glance/business-overview"><a className="menu-link"><div>Business Overview</div></a></Link>
																{/* <a className="menu-link" href="javascript:void(0)"><div>Business Overview</div></a> */}
															</li>
															<li className="menu-item">
															<Link href="/about-us/at-a-glance/timeline-and-history"><a className="menu-link"><div>Timeline And History</div></a></Link>
															</li>
															<li className="menu-item">
															<Link href="/about-us/at-a-glance/global-operations-map"><a className="menu-link"><div>Global Operations Map</div></a></Link>
															</li> 
														</ul>
													</li>
												</ul>
                                                <ul className="sub-menu-container mega-menu-column col-md-4">
												<li className="menu-item mega-menu-title">
													<Link href="/about-us/business-units/formulations"><a className="menu-link">
														<div>Business Units</div>
													</a></Link>
													<ul className="sub-menu-container">
														<li className="menu-item">
															<Link href="/about-us/business-units/formulations"><a className="menu-link">
																<div>Formulations</div>
															</a></Link> 
														</li>
														<li className="menu-item">
															<Link href="/about-us/business-units/custom-synthesis"><a className="menu-link">
																<div>Custom Synthesis</div>
															</a></Link>
														</li>
														<li className="menu-item">
															<Link href="/about-us/business-units/peptides"><a className="menu-link">
																<div>Peptides</div>
															</a></Link>
														</li>
														<li className="menu-item">
															<Link href="/about-us/business-units/aurozymes"><a className="menu-link">
																<div>AuroZymes</div>
															</a></Link>
														</li>
														<li className="menu-item">
															<Link href="/about-us/business-units/rd"><a className="menu-link">
																<div>R&D</div>
															</a></Link>
														</li>
														<li className="menu-item">
															<Link href="/about-us/business-units/api"><a className="menu-link">
																<div>API</div>
															</a></Link>
														</li>
													</ul>
												</li>
											</ul>
											<ul className="sub-menu-container mega-menu-column col-md-4">
												<li className="menu-item mega-menu-title">
													<Link href="/about-us/corporate-governance"><a className="menu-link">
														<div>Corporate Governance</div>
													</a></Link>
													<ul className="sub-menu-container">
														<li className="menu-item">
															<Link href="/about-us/corporate-governance/board-of-directors"><a className="menu-link">
																<div>Board Of Directors</div>
															</a></Link>
														</li>
														<li className="menu-item">
															<Link href="/about-us/corporate-governance/board-committees"><a className="menu-link">
																<div>Board Committees</div>
															</a></Link>
														</li>
														<li className="menu-item">
															<Link href="/about-us/corporate-governance/governance-policies"><a className="menu-link">
																<div>Governance Policies</div>
															</a></Link>
														</li>
													</ul>
												</li>
											</ul>
                                            </div>
										</div>
									</div>
								</li>
                                <li className="menu-item mega-menu">
								<Link href="/sustainability"><a className="menu-link">
									<div>Sustainability</div>
								</a></Link>
								<div className="mega-menu-content mega-menu-style-2" style={{ "width": "100%"}}>
									<div className="container">
										<div className="row">
											<ul className="sub-menu-container mega-menu-column col-lg-3">
												<li className="menu-item mega-menu-title">
													<Link href="/sustainability/social-accountability-standards"><a className="menu-link">
														<div>Social-Accountability-Standards</div>
													</a></Link>
													<ul className="sub-menu-container">
														<li className="menu-item">
															<Link href="/sustainability/social-accountability-standards"><a className="menu-link">
																<div>Social Compliance Certification</div>
															</a></Link>
														</li>
														<li className="menu-item">
															<Link href="/sustainability/social-accountability-standards"><a className="menu-link">
																<div>Sustainability Of Social Accountability Standards</div>
															</a></Link>
														</li>
														<li className="menu-item">
															<Link href="/sustainability/social-accountability-standards"><a className="menu-link">
																<div>Human Rights Policy</div>
															</a></Link>
														</li>
														<li className="menu-item">
															<Link href="/sustainability/social-accountability-standards"><a className="menu-link">
																<div>Progressive Health And Safety Practices</div>
															</a></Link>
														</li>
														<li className="menu-item">
															<Link href="/sustainability/social-accountability-standards"><a className="menu-link">
																<div>Community Impact</div>
															</a></Link>
														</li>
														<li className="menu-item">
															<Link href="/sustainability/social-accountability-standards"><a className="menu-link">
																<div>Supply Chain Management</div>
															</a></Link>
														</li>
													</ul>
												</li>
											</ul>
											<ul className="sub-menu-container mega-menu-column col-lg-3">
												<li className="menu-item mega-menu-title">
													<Link href="/sustainability/our-commitment/csr-policy"><a className="menu-link">
														<div>CSR</div>
													</a></Link>
													<ul className="sub-menu-container">
														<li className="menu-item">
															<Link href="/sustainability/our-commitment"><a className="menu-link">
																<div>Our Commitment</div>
															</a></Link> 
														</li>
														<li className="menu-item">
															<Link href="/sustainability/annual-csr-report"><a className="menu-link">
																<div>Annual Report</div>
															</a></Link> 
														</li>
														<li className="menu-item">
															<Link href="/sustainability/csrgallery"><a className="menu-link">
																<div>Gallery</div>
															</a></Link>
														</li>
														<li className="menu-item">
															<Link href="/sustainability/aurobindo-foundation"><a className="menu-link">
																<div>Aurobindo Pharma Foundation</div>
															</a></Link> 
														</li> 
														<li className="menu-item">
															<Link href="/sustainability/annual-action-plan"><a className="menu-link">
																<div>Annual Action Plan</div>
															</a></Link>
														</li> 
														
													</ul>
												</li>
											</ul>
											<ul className="sub-menu-container mega-menu-column col-lg-3">
												<li className="menu-item mega-menu-title">
													<Link href="/sustainability/access-to-healthcare"><a className="menu-link">
														<div>Access To Healthcare</div>
													</a></Link>
													<ul className="sub-menu-container">
														<li className="menu-item">
															<Link href="/sustainability/access-to-healthcare/pepfar-program"><a className="menu-link">
																<div>Pepfar program</div>
															</a></Link>
														</li>
													</ul> 
												</li>
											</ul>
											<ul className="sub-menu-container mega-menu-column col-lg-3">
												<li className="menu-item mega-menu-title">
													<Link href="/sustainability/sustainability-key-highlights"><a className="menu-link">
														<div>Sustainability Key Highlights</div>
													</a></Link>
													<ul className="sub-menu-container">
														<li className="menu-item">
															<Link href="/sustainability/sustainability-key-highlights/environment"><a className="menu-link">
																<div>Environment</div>
															</a></Link>
														</li>
														<li className="menu-item">
															<Link href="/sustainability/sustainability-key-highlights/social"><a className="menu-link">
																<div>Social</div>
															</a></Link>
														</li>
														<li className="menu-item">
															<Link href="/sustainability/sustainability-key-highlights/governance"><a className="menu-link">
																<div>Governance</div>
															</a></Link>
														</li>
														<li className="menu-item">
															<Link href="/sustainability/sustainability-key-highlights/report-2020-2021"><a className="menu-link">
																<div>Report 2020 2021</div>
															</a></Link>
														</li>
													</ul>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</li>
							<li className="menu-item mega-menu">
								<Link href="/investors"><a className="menu-link">
									<div>Investors</div>
								</a></Link>
								<div className="mega-menu-content mega-menu-style-2" style={{ "width": "100%"}}>
									<div className="container">
										<div className="row">
											<ul className="sub-menu-container mega-menu-column col-lg-3">
												<li className="menu-item mega-menu-title">
													<Link href="/investors/results-reports-presentations"><a className="menu-link">
														<div>Results, Reports & Presentations</div>
													</a></Link>
													<ul className="sub-menu-container">
														<li className="menu-item">
															<Link href="/investors/results-reports-presentations/results-announcements"><a className="menu-link">
																<div>Results Announcements</div>
															</a></Link>
														</li>
														<li className="menu-item">
															<Link href="/investors/results-reports-presentations/annual-reports"><a className="menu-link">
																<div>Annual Reports</div>
															</a></Link>
														</li>
														<li className="menu-item">
															<Link href="/investors/results-reports-presentations/investor-presentations"><a className="menu-link">
																<div>Investor Presentations</div>
															</a></Link>
														</li>
														<li className="menu-item">
															<Link href="/investors/results-reports-presentations/conference-call-transcripts"><a className="menu-link">
																<div>Conference Call Transcripts</div>
															</a></Link>
														</li>
														<li className="menu-item">
															<Link href="/investors/results-reports-presentations/financials-subsidiaries"><a className="menu-link">
																<div>Financials – Subsidiaries</div>
															</a></Link>
														</li>
														<li className="menu-item">
															<Link href="/investors/results-reports-presentations/credit-rating"><a className="menu-link">
																<div>Credit Rating</div>
															</a></Link>
														</li>
														<li className="menu-item">
															<Link href="/investors/results-reports-presentations/disclosure-of-events-or-information"><a className="menu-link">
																<div>Disclosure Of Events Or Information</div>
															</a></Link>
														</li>
														<li className="menu-item">
															<Link href="/investors/results-reports-presentations/related-party-transactions"><a className="menu-link">
																<div>Related Party Transactions</div>
															</a></Link>
														</li>
														<li className="menu-item">
															<Link href="/investors/results-reports-presentations/annual-returns"><a className="menu-link">
																<div>Annual Returns</div>
															</a></Link>
														</li>
														<li className="menu-item">
															<Link href="/investors/results-reports-presentations/annual-secretarial-compliance-report"><a className="menu-link">
																<div>Annual Secretarial Compliance Report</div>
															</a></Link>
														</li>
													</ul>
												</li>
											</ul>
											<ul className="sub-menu-container mega-menu-column col-lg-3">
												<li className="menu-item mega-menu-title">
													<Link href="/investors/shareholder-information/shareholder-structure"><a className="menu-link">
														<div>Shareholder Information</div>
													</a></Link>
													<ul className="sub-menu-container">
														<li className="menu-item">
															<Link href="/investors/shareholder-information/shareholder-structure"><a className="menu-link">
																<div>Shareholder Structure</div>
															</a></Link>
														</li>
														<li className="menu-item">
															<Link href="/investors/shareholder-information/share-performance"><a className="menu-link">
																<div>Share Performance</div>
															</a></Link>
														</li>
														<li className="menu-item">
															<Link href="/investors/shareholder-information/financial-highlights"><a className="menu-link">
																<div>Financial Highlights</div>
															</a></Link>
														</li>
														<li className="menu-item">
															<Link href="/investors/shareholder-information/notice-of-board-meeting"><a className="menu-link">
																<div>Notice Of Board Meeting</div>
															</a></Link>
														</li>
														<li className="menu-item">
															<Link href="/investors/shareholder-information/general-meetings"><a className="menu-link">
																<div>General Meetings</div>
															</a></Link>
														</li>
														<li className="menu-item">
															<Link href="/investors/shareholder-information/dividend-records"><a className="menu-link">
																<div>Dividend Record</div>
															</a></Link>
														</li>
														<li className="menu-item">
															<Link href="/investors/shareholder-information/scheme-of-arrangements"><a className="menu-link">
																<div>Scheme Of Arrangements</div>
															</a></Link>
														</li>
														<li className="menu-item">
															<Link href="/investors/shareholder-information/unpaid-dividend-account-details"><a className="menu-link">
																<div>Unpaid Dividend Account Details</div>
															</a></Link>
														</li>
														<li className="menu-item">
															<Link href="/investors/shareholder-information/registrar-and-share-transfer-agent"><a className="menu-link">
																<div>Registrar And Share Transfer Agent</div>
															</a></Link>
														</li>
														<li className="menu-item">
															<Link href="https://www.aurobindo.com/wp-content/uploads/2019/04/GrievanceRedressal-and-Other-relevant-details.pdf"><a className="menu-link">
																<div>Contact Details For Investor Grievance Redressal</div>
															</a></Link>
														</li>
														<li className="menu-item">
															<Link href="/investors/shareholder-information/general"><a className="menu-link">
																<div>General</div>
															</a></Link>
														</li>
													</ul>
												</li>
											</ul>
											<ul className="sub-menu-container mega-menu-column col-lg-3">
												<li className="menu-item mega-menu-title">
													<Link href="/investors/corporate-governance"><a className="menu-link">
														<div>Corporate Governance</div>
													</a></Link>
													<ul className="sub-menu-container">
														<li className="menu-item">
															<Link href="/investors/corporate-governance/board-of-directors"><a className="menu-link">
																<div>Board Of Directors</div>
															</a></Link>
														</li>
														<li className="menu-item">
															<Link href="/investors/corporate-governance/board-committees"><a className="menu-link">
																<div>Board Committees</div>
															</a></Link>
														</li>
														<li className="menu-item">
															<Link href="/investors/corporate-governance/governance-policies"><a className="menu-link">
																<div>Governance Policies</div>
															</a></Link>
														</li>
														<li className="menu-item">
															<Link href="/investors/corporate-governance/code-of-conduct"><a className="menu-link">
																<div>Code Of Conduct</div>
															</a></Link>
														</li>
														<li className="menu-item">
															<Link href="/investors/corporate-governance/code-of-practices-and-procedures-for-fair-disclosure"><a className="menu-link">
																<div>Code Of Practices And Procedures For Fair Disclosure</div>
															</a></Link>
														</li>
														<li className="menu-item">
															<Link href="/investors/corporate-governance/appointment-and-resignation-of-directors"><a className="menu-link">
																<div>Appointment And Resignation Of Directors</div>
															</a></Link>
														</li>
													</ul>
												</li>
											</ul>
											<ul className="sub-menu-container mega-menu-column col-lg-3">
												<li className="menu-item mega-menu-title">
													<Link href="/investors/ir-contacts/phone-numbers-email-addresses"><a className="menu-link">
														<div>IR Contacts</div>
													</a></Link>
													<ul className="sub-menu-container">
														<li className="menu-item">
															<Link href="/investors/ir-contacts/phone-numbers-email-addresses"><a className="menu-link">
																<div>Phone Numbers & Email Addresses</div>
															</a></Link>
														</li>
													</ul>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</li>
							<li className="menu-item">
								<Link href="/media"><a className="menu-link">
									<div>Media</div>
								</a></Link>
								<ul className="sub-menu-container">
									<li className="menu-item">
										<Link href="/media/press-releases/corporate-announcements"><a className="menu-link">
											<div>Press Releases</div>
										</a></Link>
										<ul className="sub-menu-container">
											<li className="menu-item">
												<Link href="/media/press-releases/corporate-announcements"><a className="menu-link">
													<div>Corporate Announcements</div>
												</a></Link>
											</li>
										</ul>
									</li>
									<li className="menu-item">
										<Link href="/media/media-kit/fact-sheet"><a className="menu-link">
											<div>Media Kit</div>
										</a></Link>
										<ul className="sub-menu-container">
											<li className="menu-item">
												<Link href="/media/media-kit/fact-sheet"><a className="menu-link">
													<div>Fact Sheet</div>
												</a></Link>
											</li>
											<li className="menu-item">
												<Link href="/media/media-kit/videos"><a className="menu-link">
													<div>Videos</div>
												</a></Link>
											</li>
											<li className="menu-item">
												<Link href="/media/media-kit/official-logos"><a className="menu-link">
													<div>Official Logos</div>
												</a></Link>
											</li>
										</ul>
									</li>
								</ul>
							</li>
							<li className="menu-item">
								<Link href="/careers"><a className="menu-link">
									<div>Careers</div>
								</a></Link>
								<ul className="sub-menu-container">
									<li className="menu-item">
										<Link href="/careers/hr-mission-and-vision"><a className="menu-link">
											<div>HR Mission And Vision</div>
										</a></Link>
									</li>
									<li className="menu-item">
										<Link href="https://aurobindo.talentrecruit.com/Search/"><a className="menu-link">
											<div>Current Vacancies</div>
										</a></Link>
										<ul className="sub-menu-container">
											<li className="menu-item">
												<Link href="https://aurobindo.talentrecruit.com/Search/"><a className="menu-link">
													<div>Searchable Database</div>
												</a></Link>
											</li>
										</ul>
									</li>
								</ul>
							</li>
							<li className="menu-item">
								<Link href="/contact-us"><a className="menu-link">
									<div>Contact Us</div>
								</a>
							</Link>
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
      </div>
    );
}

NavBar.propTypes = propTypes;
NavBar.defaultProps = defaultProps;


export default NavBar;