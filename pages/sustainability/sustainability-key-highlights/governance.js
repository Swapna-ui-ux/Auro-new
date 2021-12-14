import React from 'react'; 
import PropTypes from 'prop-types';
 
const propTypes = {};

const defaultProps = {};
 
const governance = () => {
    return (
        <>
         <section id="content">
			<div className="content-wrap">
				<div className="container">
					<div className="row col-mb-50">
						<div className="">
							<div className="head-title text-center">
								<h2>Governance</h2>
							</div> 
						</div>
						<div className="col-12">
							<div className="head-title mrtb-30"> 
								 <div className="row">
								 	 <div className="col-4">
								 	 	<div className="environ-sec"> 
											<img src="/img/governance/group1.png" alt="Icon" />
											<p>  
											45% board comprises Independent Directors, of which 2 are woman directors</p>
										</div> 
								     </div>	
									 <div className="col-4">
									 	<div className="environ-sec"> 
									 		<img src="/img/governance/risk1.png" alt="Icon" />
											 <p>9 business risks identified and mitigation strategy in place (including EHS)</p> 
										</div> 
									 </div> 	
									 <div className="col-4">
									 	<div className="environ-sec"> 
									 		<img src="/img/governance/insurance1.png" alt="Icon" />
											 <p className="environ-section-content">Rolled-out COVID-19 Protection Policy</p> 
										</div> 
									 </div> 
								 </div>	
							</div> 
 
						</div> 
					</div> 

					<div className="row col-mb-50">
						<div className="col-12">
							<div className="head-title text-center">
								<h2>3-tier Sustainability Governance Model</h2>
							</div> 
							<div className="text-center pdt-20">
								<img src="/img/governance/Triangle.png" alt="Triangle Image" width="60%" />
							</div>
						</div>
					</div>

					<div className="row col-mb-50">
						<div className="col-12">
							<div className="head-title text-center pdt-40">
								<h2>Risk Governance Structure</h2>
							</div> 
							<div className="text-center pdt-20">
								<img src="/img/governance/Arrow.png" alt="Arrow Image" width="80%" />
							</div>
						</div>
					</div>


				</div>
			</div>
		</section>
        </>
    );
}

governance.propTypes = propTypes;
governance.defaultProps = defaultProps;
// #endregion

export default governance;