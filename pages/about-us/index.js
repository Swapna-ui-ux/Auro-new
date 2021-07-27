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
								<h2>Aurobindo Overview</h2>
								<p>Founded in 1986 by Mr. P. V. Ramprasad Reddy, Mr. K. Nityananda Reddy and a small group of highly committed professionals, Aurobindo Pharma was born of a vision. The company commenced operations in 1988-89 with a single unit manufacturing Semi-Synthetic Penicillin (SSP) at Pondicherry.<br/><br/>

                                   Aurobindo Pharma became a public company in 1992 and listed its shares on the Indian stock exchanges in 1995. In addition to being the market leader in Semi-Synthetic Penicillins, it has a presence in key therapeutic segments such as neurosciences, cardiovascular, anti-retrovirals, anti-diabetics, gastroenterology and anti-biotics, among others.</p>
                        	</div>		 
						</div>  
					</div>

					<div className="row mrt-25">
						<div className="col-6">
						  <div className="row">
						    <div className="col-12">
						    	<div className="commitment-con"> 
									<h3><a className="big-arrow-text" href="/about-us/business-units/rd/">Strengths and Leadership<i className="long-arrow">→</i></a></h3>
										<ul className="scales_lists">
											<li>Large manufacturing facilities approved by leading regulatory bodies</li>
											<li>Large diversified product portfolio</li>
											<li>Large R&amp;D facility in India for formulations and active ingredients</li>
										</ul>
										<p><a className="learn-more-text" href="/about-us/business-units/rd/">Learn More</a></p>
								</div>
						    </div>
						  </div>
						</div>

						<div className="col-6">
							<div className="row">
						    <div className="col-12">
						    	<div className="commitment-con">
								<h3><a className="big-arrow-text" href="/about-us/at-a-glance/global-operations-map/">Operational Excellence<i className="long-arrow">→</i></a></h3>
									<ul className="scales_lists">
										<li>Vertical integration</li>
										<li>Proven regulatory expertise</li>
										<li>Technology and know-how for specialty formulations</li>
									</ul>
									<p><a className="learn-more-text" href="/about-us/at-a-glance/global-operations-map/">Learn More</a></p>

								</div>
						    </div>
						  </div>
						</div>
					</div> 
               </div>


				<div className="sustain-counter mrt-40">
					<div className="row col-mb-50 mb-5 mrt-40">
						<div className="col-sm-6 col-lg-3 sustain-number">
							<div className="counter center counter-small"><span data-from="1" data-to="20000" data-refresh-interval="100" data-speed="2000">20000 +</span></div>
							<h5>Employees World Wide</h5>
						</div>

						<div className="col-sm-6 col-lg-3 sustain-number">
							<div className="counter center counter-small"><span data-from="1" data-to="150" data-refresh-interval="200" data-comma="true" data-sep="+"  data-places="358" data-speed="2500">150 +</span></div>
							<h5>Markets we are present</h5>
						</div>

						<div className="col-sm-6 col-lg-3 sustain-number">
							<div className="counter center counter-small"><span data-from="1" data-to="25" data-refresh-interval="50"  data-comma="true" data-sep="+"  data-speed="3500">25 +</span></div>
							<h5>Manufacturing Facilities</h5>
						</div>

						<div className="col-sm-6 col-lg-3 sustain-number">
							<div className="counter center counter-small"><span data-from="1" data-to="26" data-refresh-interval="150" data-comma="true" data-sep="+"  data-speed="2700">26 Billion+</span></div>
							<h5>Diverse Dosage Forms </h5>
						</div>
					</div>
				</div>

			 
				<div className="container mrt-40"> 
					<div className="row mrt-25">
						<div className="">
						<h4>Related Pages</h4>
						<ul className="pagelinksabouts">
							<li><a href="/about-us/at-a-glance/business-overview">Business Overview<i className="long-arrow">→</i></a></li>
							<li><a href="/about-us/business-units/formulations">Formulations<i className="long-arrow">→</i></a></li>
							<li><a href="/about-us/corporate-governance/board-of-directors">Board Of Directors<i className="long-arrow">→</i></a></li>
							<li><a href="/about-us/at-a-glance/global-operations-map">Global Operations<i className="long-arrow">→</i></a></li>
						</ul>
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