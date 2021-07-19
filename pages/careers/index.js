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
								<h2>Careers</h2>
			                    <p>Aurobindo Pharma became a public company in 1992 and listed its shares in the Indian stock exchanges in 1995. In addition to being the market leader in Semi-Synthetic Penicillins, it has a presence in key therapeutic segments such as neurosciences, cardiovascular, anti-retrovirals, anti-diabetics, gastroenterology and cephalosporins, among others.</p>
			                    <p><strong>For Job Applications:</strong> <a href="mailto:hr@aurobindo.com">hr@aurobindo.com</a></p>
				 
							</div> 
					    </div>  							 
							<div className="col-md-4">
							<div className="h4-title">
									<h3 style={{"width":"98%;"}}><a className="big-arrow-text" href="">HR Mission and Vision<i className="long-arrow">→</i></a></h3> 
									<p><a className="learn-more-text" href="/careers/hr-mission-and-vision">Learn More</a></p>

						    </div>
						 </div> 
						<div className="col-md-4">
							<div className="h4-title"> 
								<h3><a className="big-arrow-text" href="">Current Vacancies <i className="long-arrow">→</i></a></h3>
								<p><a className="learn-more-text" href="//aurobindo.talentrecruit.com/Search/">Learn More</a></p> 
		
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