import React from 'react';

import PropTypes from 'prop-types';

 
const propTypes = {}; 
const defaultProps = {};
 
const Banner = () => {
    return (
    <>
<section id="slider" className="slider-element slider-parallax swiper_wrapper min-vh-60 min-vh-md-100 include-header">
			<div className="slider-inner">

				<div className="swiper-container swiper-parent">
					<div className="swiper-wrapper">
						<div className="swiper-slide dark"> 
							<div className="swiper-slide-bg"  style={{backgroundImage: `url("img/aurobindo-home-banner-1.jpg")` }}></div>
						</div>
						 
						<div className="swiper-slide"> 
							<div className="swiper-slide-bg"  style={{backgroundImage: `url("img/SmartIndiaHackathon2.jpg")` }}></div>
						</div>
					</div>
					<div className="slider-arrow-left"><i className="icon-angle-left"></i></div>
					<div className="slider-arrow-right"><i className="icon-angle-right"></i></div>
				</div>

				<a href="#" data-scrollto="#content" data-offset="100" className="one-page-arrow dark"><i className="icon-angle-down infinite animated fadeInDown"></i></a>

			</div>
		</section>
    </>
    );
}

Banner.propTypes = propTypes;
Banner.defaultProps = defaultProps;
export default Banner;