import React from 'react'; 
import Innerbanner from '../../../components/Layout/Innerbanner';
import PropTypes from 'prop-types'; 
const propTypes = {};

const defaultProps = {}; 
const Globaloperationsmap = () => {
    
    return (
        <> 
          <div className="container">
            <div className="row">
                <div className="col-12">
                <div className="card1 mt-3 tab-card">
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active p-3" id="one" role="tabpanel" aria-labelledby="one-tab">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d487295.02532044525!2d78.12785129924684!3d17.41215307568293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1627295068438!5m2!1sen!2sin" width="100%" height="400px" style={{"border":"0"}} allowfullscreen="" loading="lazy"></iframe>             
                    </div>
                    <div className="tab-pane fade p-3" id="two" role="tabpanel" aria-labelledby="two-tab">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30455.301897506473!2d78.41825859159812!3d17.41597493435588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9728e7c230a5%3A0xbf59752f5f7caa0!2sBanjara%20Hills%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1627295363363!5m2!1sen!2sin" width="100%" height="400px" style={{"border":"0"}} allowfullscreen="" loading="lazy"></iframe>          
                    </div>
                    <div className="tab-pane fade p-3" id="three" role="tabpanel" aria-labelledby="three-tab">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30439.374074444757!2d78.43238944167942!3d17.511247959292522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb906c99abd1db%3A0x54004b96921bb37e!2sChinthal%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1627295474761!5m2!1sen!2sin" width="100%" height="400px" style={{"border":"0"}} allowfullscreen="" loading="lazy"></iframe>              
                    </div>

                    </div>
                    <div className="card-header tab-card-header">
                        <div className="row">
                        <div className="col-md-8">
                    <ul className="nav" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link" id="one-tab" data-toggle="tab" href="#one" role="tab" aria-controls="One" aria-selected="true"><img src="/img/blue-map.png" alt=""></img> Internationals Subsidiaries</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="two-tab" data-toggle="tab" href="#two" role="tab" aria-controls="Two" aria-selected="false"><img src="/img/green-map.png" alt=""></img> Representive Offices</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="three-tab" data-toggle="tab" href="#three" role="tab" aria-controls="Three" aria-selected="false"><img src="/img/hq-map.png" alt=""></img> Global Head Quarters</a>
                        </li>
                    </ul>
                    </div>
                    <div className="col-md-4 form-group"> 
	                  <div id="listing" className="locationicons">
		                    <select name="countries" id="countries" className="sm-form-control" onchange="search2()">
			<option value="">Select Countries</option>
			<option value="Brazil"> Brazil</option>
			<option value="Canada"> Canada</option>
			<option value="China"> China</option>
			<option value="Colombia"> Colombia</option>
			<option value="Czech Republic"> Czech Republic</option>
			<option value="Ethiopia"> Ethiopia</option>
			<option value="France"> France</option>
			<option value="Germany"> Germany</option>
			<option value="Hong Kong"> Hong Kong</option>
			<option value="India"> India</option>
			<option value="Ireland"> Ireland</option>
			<option value="Italy"> Italy</option>
			<option value="Japan"> Japan</option>
			<option value="Kenya"> Kenya</option>
			<option value="Malta"> Malta</option>
			<option value="Mexico"> Mexico</option>
			<option value="Netherlands"> Netherlands</option>
			<option value="Nigeria"> Nigeria</option>
			<option value="Poland"> Poland</option>
			<option value="Portugal"> Portugal</option>
			<option value="Romania"> Romania</option>
			<option value="Russia"> Russia</option>
			<option value="South Africa"> South Africa</option>
			<option value="Spain"> Spain</option>
			<option value="Tanzania"> Tanzania</option>
			<option value="Thailand"> Thailand</option>
			<option value="Ukraine"> Ukraine</option>
			<option value="United Kingdom"> United Kingdom</option>
			<option value="USA"> USA</option>
			<option value="Vietnam"> Vietnam</option>
		</select>
	                </div> 
                    </div>
                    </div>
                    </div> 
                </div>
                </div>
            </div>
            </div>


        </>
    );
}

Globaloperationsmap.propTypes = propTypes;
Globaloperationsmap.defaultProps = defaultProps;
// #endregion

export default Globaloperationsmap;