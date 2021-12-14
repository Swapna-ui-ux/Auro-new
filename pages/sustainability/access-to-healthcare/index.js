import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

const accesstohealthcare = () => {
    return (
        <>
          <section id="content">
			<div className="content-wrap">
				<div className="container">

					<div className="row col-mb-50">
						<div className="col-12">
							<div className="head-title">
								<h2>Access to Healthcare</h2>
								<p>Committed to community healthcare</p>
								<ul className="listitems">
									<li>Run general and specialized health camps</li>
									<li>Provide specialized medical treatment for reducing child mortality and improving maternal health.</li>
									<li>Operate health awareness camps (for HIV/AIDS, General Health etc.)</li>
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

accesstohealthcare.propTypes = propTypes;
accesstohealthcare.defaultProps = defaultProps;
// #endregion

export default accesstohealthcare;