import React from 'react'; 
import PropTypes from 'prop-types';
 
const propTypes = {};

const defaultProps = {};
 
const Annualreturns = () => {
    return (
        <>
         <section id="content">
			<div className="content-wrap">
				<div className="container">

					<div className="row col-mb-50">
						<div className="col-12">
							<div className="head-title">
								<h2>Annual Returns</h2>
								<ul className="govrce_plcy">
									<li><a href="" target="_blank" rel="noopener">Annual Return-2019-20<i className="fa fa-file-pdf-o pull-right"></i></a></li> 
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

Annualreturns.propTypes = propTypes;
Annualreturns.defaultProps = defaultProps;
// #endregion

export default Annualreturns;