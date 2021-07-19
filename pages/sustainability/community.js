import React from 'react'; 
import PropTypes from 'prop-types';
 
const propTypes = {};

const defaultProps = {};
 
const community = () => {
    return (
        <>
          <section id="content">
			<div className="content-wrap">
				<div className="container">

					<div className="row">
						<div className="col-12">
							<div className="head-title">
								<h2>Community</h2>
									<p>We employ sustainable methods and assist social welfare groups,to contribute to the eradication of extreme hunger and poverty.</p>
									<p>Empowerment of Communities, inclusive of Socio-Economic growth</p>
									<ul className="listitems">
										<li>Female empowerment/ livelihood generation center (Stitching &amp; Embroidery training centers for women)</li>
										<li>Skill development/vocational training (for Men &amp; Women)</li>
									</ul>
									<p>Upliftment of the marginalized and underprivileged sections of society</p>
									<ul className="listitems">
										<li>Education (free literacy programmes at various centers in deprived urban areas)</li>
										<li>Aiding institutions for differently abled /disabled or handicapped people</li>
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

community.propTypes = propTypes;
community.defaultProps = defaultProps;
// #endregion

export default community;