import React from 'react'; 
import PropTypes from 'prop-types';
 
const propTypes = {};

const defaultProps = {}; 
const Phonenumbersemailaddresses = () => {
    return (
        <>
          <section id="content">
			<div className="content-wrap">
				<div className="container">

					<div className="row col-mb-50">
						<div className="col-12">
							<div className="head-title">
								<h2>Phone Numbers & Email Addresses</h2>
								</div> 
								<div className="row">
								 <div className="col-6">
								 	<div className="boxsodwstyless">
									<h5>Mr. Krishna Kiran</h5>
									  <p>Investor Relations Department,
										<br/>Aurobindo Pharma Limited,
										<br/>Plot No.2, Maître Vihar, Ameerpet,
										<br/>Hyderabad – 500 038.
										<br/>Board Line: 91(40) 6672 5000
										<br/>Direct Line: 91(40) 6672 5401
										<br/>Fax: +91(40) 2374 1080 / 2374 6833
										<br/>Email: <a href="mailto:ir@aurobindo.com">ir@aurobindo.com</a></p>
									</div> 
								</div>	
								<div className="col-6">
									<div className="boxsodwstyless">
									<h5>Mr. Krishna Kiran</h5>
									  <p>Investor Relations Department,
										<br/>Aurobindo Pharma Limited,
										<br/>Plot No.2, Maître Vihar, Ameerpet,
										<br/>Hyderabad – 500 038.
										<br/>Board Line: 91(40) 6672 5000
										<br/>Direct Line: 91(40) 6672 5401
										<br/>Fax: +91(40) 2374 1080 / 2374 6833
										<br/>Email: <a href="mailto:ir@aurobindo.com">ir@aurobindo.com</a></p> 
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

Phonenumbersemailaddresses.propTypes = propTypes;
Phonenumbersemailaddresses.defaultProps = defaultProps;
// #endregion

export default Phonenumbersemailaddresses;