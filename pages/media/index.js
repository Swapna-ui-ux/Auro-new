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
								<h2>Media</h2>
			                    <p>Aurobindo Pharma became a public company in 1992 and listed its shares in the Indian stock exchanges in 1995. In addition to being the market leader in Semi-Synthetic Penicillins, it has a presence in key therapeutic segments such as neurosciences, cardiovascular, anti-retrovirals, anti-diabetics, gastroenterology and cephalosporins, among others.</p>
				 
							</div> 
					    </div>  							 
							<div className="col-md-6">
							<div className="h4-title">
									<h3 style={{"width":"98%;"}}><a className="big-arrow-text" href="">Press Releases<i className="long-arrow">→</i></a></h3>
									<ul className="scales_lists"><li>Corporate Announcements</li></ul>
									<p><a className="learn-more-text" href="/media/press-releases/corporate-announcements"><div>Learn More</div></a></p>

						    </div>
						 </div> 
						<div className="col-md-6">
							<div className="h4-title"> 
								<h3><a className="big-arrow-text" href="">Media Kit <i className="long-arrow">→</i></a></h3>
								<ul className="scales_lists">
									<li>Fact Sheet</li>
									<li>Photos</li>
									<li>Corporate Film</li>
									<li>Official Logos</li>
								</ul>
								<p><a className="learn-more-text" href="/media/media-kit/fact-sheet">Learn More</a></p> 
		
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