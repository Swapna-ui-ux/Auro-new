import React from 'react'; 
import PropTypes from 'prop-types';
 
const propTypes = {};

const defaultProps = {}; 
const Creditrating = () => {
    return (
        <>
           <section id="content">
			<div className="content-wrap">
				<div className="container">

					<div className="row col-mb-50">
						<div className="col-12">
							<div className="head-title">
									<h2>Credit Rating</h2>
									<ul className="govrce_plcy">
										<li><a href="" target="_blank" rel="noopener">Rating letter Aurobindo Pharma – October 2019 <span className="pull-right">Download <i className="fa fa-file-pdf-o"></i></span></a></li>
										<li><a href="" target="_blank" rel="noopener">Rating Letter Aurobindo Pharma September 2018 <span className="pull-right">Download <i className="fa fa-file-pdf-o"></i></span></a></li>
										<li><a href="" target="_blank" rel="noopener">India Ratings Places Aurobindo Pharma on RWP<span className="pull-right">Download <i className="fa fa-file-pdf-o"></i></span></a></li>
										<li><a href="" target="_blank" rel="noopener">Rating letter Aurobindo Pharma May 2018<span className="pull-right">Download <i className="fa fa-file-pdf-o"></i></span></a></li>
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

Creditrating.propTypes = propTypes;
Creditrating.defaultProps = defaultProps;
// #endregion

export default Creditrating;