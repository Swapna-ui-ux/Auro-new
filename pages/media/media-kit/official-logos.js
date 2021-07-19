import React from 'react'; 
import PropTypes from 'prop-types';
 
const propTypes = {};

const defaultProps = {};
 
const Officiallogos = () => {
    return (
        <>
          <section id="content">
			<div className="content-wrap">
				<div className="container">

					<div className="row col-mb-50">
						<div className="col-12">
							<div className="head-title">
								<h2>Official Logos</h2>
								 <p>The individual links will give you logos both for the web and print. The logos are of high resolution, print quality. In case you need pictures please mail us to</p>
								 <h4>Web version</h4>
								 <div className="row">
								 	 <div className="col-4">
								 	 	<div className="logos-border-grey">
											<a href="/img/official-logos/aurobindo-logo-bigsize.jpg" target="_blank" className="">
											  <img src="/img/official-logos/Aurobindo-logo.jpg" className="official-img" />
										    </a> 
										</div>
										<div className="logo_blocks"><a href="/img/official-logos/aurobindo-logo-bigsize.jpg" target="_blank" rel="noopener">Color logo</a></div>
								     </div>	
									 <div className="col-4">
									 	<div className="logos-border-grey">
											<a href="/img/official-logos/aurobindo-logo-bw-big.jpg" target="_blank" className="">
												<img src="/img/official-logos/Aurobindo-wb-logo-.jpg" className="official-img" /></a>
										</div>
										<div className="logo_blocks"><a href="/img/official-logos/aurobindo-logo-bw-big.jpg" target="_blank" rel="noopener">Black and white Logo</a></div>
									 </div>	
									 <div className="col-4">
									 	<div className="logos-border-grey">
											<a href="/img/official-logos/logo-tag-line-1.jpg" target="_blank" className="">
												<img src="/img/official-logos/logo-tag-line-smal.jpg"
												className="official-img" /></a>
										</div>
										<div className="logo_blocks"><a href="/img/official-logos/logo-tag-line-1.jpg" target="_blank" rel="noopener">Logo with Tag line</a></div>
									 </div>	
								 </div>	

								 <h4 className="mrt-25">Print Version</h4>
								 <div className="row">
								 	 <div className="col-4">
								 	 	<div className="logos-border-grey">
											<a href="/img/official-logos/aurobindo-logos.zip" target="_blank" className="">
											  <img src="/img/official-logos/Aurobindo-logo.jpg" className="official-img" />
										    </a> 
										</div>
										<div className="logo_blocks"><a href="/img/official-logos/aurobindo-logos.zip" target="_blank" rel="noopener">Aurobindo Logos</a></div>
								     </div>	
									 <div className="col-4">
									 	<div className="logos-border-grey">
											<a href="/img/official-logos/corporate-information.pdf" target="_blank" className="">
												<img src="/img/official-logos/Aurobindo-logo-info.jpg" className="official-img" /></a>
										</div>
										<div className="logo_blocks"><a href="/img/official-logos/corporate-information.pdf" target="_blank" rel="noopener">Corporate Information</a></div>
									 </div>	
									 <div className="col-4">
									 	<div className="logos-border-grey">
											<a href="/img/official-logos/specification-logo.pdf" target="_blank" className="">
												<img src="/img/official-logos/Aurobindo-logo.jpg"
												className="official-img" /></a>
										</div>
										<div className="logo_blocks"><a href="/img/official-logos/specification-logo.pdf" target="_blank" rel="noopener">Logo Specification</a></div>
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

Officiallogos.propTypes = propTypes;
Officiallogos.defaultProps = defaultProps;
// #endregion

export default Officiallogos;