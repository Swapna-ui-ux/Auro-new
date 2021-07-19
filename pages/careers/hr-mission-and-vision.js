import React from 'react'; 
import PropTypes from 'prop-types';
 
const propTypes = {};

const defaultProps = {};
 
const Hrmissionandvision = () => {
    return (
        <>
          <section id="content">
			<div className="content-wrap">
				<div className="container">

					<div className="row">
						<div className="col-12">
							<div className="head-title">
								<h2>HR Mission and Vision</h2>
								<h4>HR Vision</h4> 
								<div className="mission_blockstitles">“To deliver sustained business performance through progressive talent management and development of Aurobindo Pharma as learning organization .”</div>
							</div>
						

						<div className=""> 
							 <h4>HR Mission</h4>
								<ul className="listitems">
									<li>To attract, build and retain right talent at all levels.</li>
									<li>To create and nurture a performance culture through continuous capability building, performance measurement and the leverage of IT.</li>
									<li>To foster leadership at all levels through trust, empowerment &amp; openness..</li>
									<li>To strengthen collaborative approach for Business Excellence.</li>
									<li>To provide equal opportunity to all people by recognizing diversity and inclusion as central to Talent Management .</li>
									<li>To promote a vibrant work culture based on innovation and reward people based on productivity and outstanding performance.</li>
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

Hrmissionandvision.propTypes = propTypes;
Hrmissionandvision.defaultProps = defaultProps;
// #endregion

export default Hrmissionandvision;