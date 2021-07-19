import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

const Relatedpartytransactions = () => {
    return (
        <>
          <section id="content">
			<div className="content-wrap">
				<div className="container">

					<div className="row col-mb-50">
						<div className="col-12">
							<div className="head-title">
								<h2>Related Party Transactions</h2>
								<ul className="govrce_plcy">
									<li><a href="" target="_blank" rel="noopener">RPT for the half year ended 30.09.2020<span className="pull-right">Download <i className="fa fa-file-pdf-o"></i></span></a></li>
									<li><a href="" target="_blank" rel="noopener">RPT for the half year ended 31.03.2020<span className="pull-right">Download <i className="fa fa-file-pdf-o"></i></span></a></li>
									<li><a href="" target="_blank" rel="noopener">RPT for the half year ended 30.09.2019<span className="pull-right">Download <i className="fa fa-file-pdf-o"></i></span></a></li>
									<li><a href="" target="_blank" rel="noopener"> RPT for the half year ended 31.03.2019.<span className="pull-right">Download <i className="fa fa-file-pdf-o"></i></span></a></li>
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

Relatedpartytransactions.propTypes = propTypes;
Relatedpartytransactions.defaultProps = defaultProps;
// #endregion

export default Relatedpartytransactions;