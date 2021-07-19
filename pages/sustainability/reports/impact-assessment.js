import React from 'react'; 
import PropTypes from 'prop-types';
 
const propTypes = {};

const defaultProps = {};
 
const Impactassessment = () => {
    return (
        <>
          <section id="content">
			<div className="content-wrap">
				<div className="container">

					<div className="row col-mb-50">
						<div className="col-12">
							<div className="head-title">
								<h2>Impact Assessment</h2> 
							</div>
							<div className="container">
							 <div className="row team-grid-inner">
								<div className="col-md-4 col-sm-6 col-xs-12">
									<div className="impact-box">
									 <a href=""> 
										 <img src="/img/impact-assesment/Aurobindo-Geriatric-Eye-Care-Center-Visakhapatnam.jpg" width="270" height="272" alt="" className="img-responsive"/> 
											</a>										 
										<h5 className="grid-title impact-title text-center ">Aurobindo Geriatric Eye Care Center Visakhapatnam</h5>
										<p>A study was conducted on the impact of the Aurobindo Geriatric Eye Care Center has created in the lives of its stakeholders since its establishment in the LV Prasad Eye Institute, GMR Varalakshmi Campus in Visakhapatnam</p>
									</div>	
								</div>

								<div className="col-md-4 col-sm-6 col-xs-12">
									<div className="impact-box">
									 <a href=""> 
										 <img src="/img/impact-assesment/Borpatla-Lift-Irrigation-Project.jpg" width="270" height="272" alt="" className="img-responsive"/> 
											</a>										 
										<h5 className="grid-title impact-title text-center">Borpatla Lift Irrigation Project</h5>
										<p>The impact of the Borapatla Lift Irrigation scheme on the farmers in the nearby villages is detailed in this impact assessment study since the inception of the project by the Aurobindo Pharma Foundation</p>
										</div>	
								</div>

								<div className="col-md-4 col-sm-6 col-xs-12">
									<div className="impact-box">
									 <a href=""> 
										 <img src="/img/impact-assesment/HKMCF-Centralized-Kitchen-Narsingi.jpg" width="270" height="272" alt="" className="img-responsive"/> 
											</a>										 
										<h5 className="grid-title impact-title text-center">HKMCF Centralized Kitchen Narsingi</h5>
										<p>This impact assessment study sheds light on the centralized kitchen established in Narsingi, Hyderabad, in collaboration with the Hare Krishna Movement Charitable Foundation has created a major impact since its establishment.</p>
										</div>	
								</div> 
							 
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

Impactassessment.propTypes = propTypes;
Impactassessment.defaultProps = defaultProps;
// #endregion

export default Impactassessment;