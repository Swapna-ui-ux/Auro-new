import React from 'react'; 
import PropTypes from 'prop-types';
 
const propTypes = {};

const defaultProps = {};
 
const videos = () => {
    return (
        <>
          <section id="content">
			<div className="content-wrap">
				<div className="container">

					<div className="row col-mb-50">
						<div className="col-12">
							<div className="head-title">
								<h2>Videos</h2>
								<div className="row">
									<div className="col-6">
										<h4>Corporate Video</h4>
										<div className="grid-inner">
											<div className="entry-image">
												<div className="fluid-width-video-wrapper" style={{"padding-top": "56.25%;"}}>
													<iframe src="//www.youtube.com/embed/hLTHFGrHX3Q?rel=0" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
												</div>
											</div> 
										</div>
									</div> 	
									<div className="col-6"> 
										<h4>Aurobindo Plant 15 – Vizag</h4>
										<div className="grid-inner">
											<div className="entry-image">
												<div className="fluid-width-video-wrapper" style={{"padding-top": "56.25%;"}}>
													<iframe src="//www.youtube.com/embed/jfcMJro6114?rel=0" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
												</div>
											</div> 
										</div> 
									</div>
									<div className="col-6"> 
										<h4>Aurobindo USA</h4>
										<div className="grid-inner">
											<div className="entry-image">
												<div className="fluid-width-video-wrapper" style={{"padding-top": "56.25%;"}}>
													<iframe src="//www.youtube.com/embed/jfcMJro6114?rel=0" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
												</div>
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

videos.propTypes = propTypes;
videos.defaultProps = defaultProps;
// #endregion

export default videos;