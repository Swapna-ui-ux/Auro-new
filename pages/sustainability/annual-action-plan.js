import React from 'react'; 
import PropTypes from 'prop-types';
 
const propTypes = {};

const defaultProps = {}; 
const annualactionplan = () => {
    return (
        <>
          <section id="content">
	<div className="content-wrap">
		<div className="container">
			<div className="row col-mb-50">
				<div className="col-12">
					<div className="head-title">
						<h2>Annual Action Plan</h2>
						<div className="tabs tabs-responsive clearfix">
							<ul className="tab-nav clearfix">
								<li><a href="#tab-responsive-1">2021 - 2022</a>
								</li> 
							</ul>
							<div className="tab-container pad-0">
								<div className="tab-content clearfix" id="tab-responsive-1">
									<div className="tab-brdr"> 
										<ul className="govrce_plcy">
											<li><a href="" target="_blank" rel="noopener">CSR Projects approved for 2021-22<span className="pull-right">Click to View <i className="fa fa-file-pdf-o"></i></span></a>
											</li>
										</ul>
									</div>
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

annualactionplan.propTypes = propTypes;
annualactionplan.defaultProps = defaultProps;
// #endregion

export default annualactionplan;