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

					<div className="row">
						<div className="col-12">
							<div className="head-title">
								<h2>Investors</h2>
			                    <p>Aurobindo Pharma became a public company in 1992 and listed its shares in the Indian stock exchanges in 1995. In addition to being the market leader in Semi-Synthetic Penicillins, it has a presence in key therapeutic segments such as neurosciences, cardiovascular, anti-retrovirals, anti-diabetics, gastroenterology and cephalosporins, among others.</p>
				 
							</div> 
					    </div>  
							 
							<div className="col-md-6">
							<div className="h4-title">
									<h3 style={{width:"98%;"}}><a className="big-arrow-text" href="">Shareholder Information<i className="long-arrow">→</i></a></h3>
									 <ul className="scales_lists">
										<li>Shareholder Structure</li>
										<li>Share Performance</li>
										<li>Financial Highlights</li>
									</ul>
									<p><a className="learn-more-text" href="">Learn More</a></p>

						    </div>
						 </div> 
						<div className="col-md-6">
							<div className="h4-title">
								<h3><a className="big-arrow-text" href="">Results, Reports & Presentations<i className="long-arrow">→</i></a></h3>
								<ul className="scales_lists">
									<li>Results Announcements</li>
									<li>Financials – Excel Sheet Downloads</li>
									<li>Disclosure of Events or Information</li>
									<li>Annual Return</li>
								</ul>
								<p><a className="learn-more-text" href="">Learn More</a></p>
		
						    </div>
						</div>
						 
                          <div className="row  col-mb-50">
					      <div className="col-md-12">
							<div className="h4-title">
										<h5>Related Pages</h5>
										 </div>
										 <ul className="pagelinksabouts">
											<li><a href="">Annual Reports<i className="long-arrow">→</i></a></li>
											<li><a href="">Investor Presentations<i className="long-arrow">→</i></a></li>
											<li><a href="">IR Contacts<i className="long-arrow">→</i></a></li>
											<li><a href="">Corporate Governance<i className="long-arrow">→</i></a></li>
										</ul> 
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