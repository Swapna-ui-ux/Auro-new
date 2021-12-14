import React from 'react';

import PropTypes from 'prop-types';

 
const propTypes = {}; 
const defaultProps = {};
 
const Banner = () => {
    return (
    <>
{/* <section id="slider" className="slider-element slider-parallax swiper_wrapper min-vh-60 min-vh-md-100 include-header">
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
		</section>  */} 

		<div id="carouselExampleCaptions" className="carousel carousel-fade slide" data-interval="2000" data-bs-ride="carousel">
				<div className="carousel-indicators">
					<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
					<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
					<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
				</div>
				<div className="carousel-inner">
					<div className="carousel-item active">
					<img src="/img/aurobindo-home-banner-1.jpg" className="d-block w-100" alt="Aurobindo banner"/> 
					</div>
					<div className="carousel-item">
					<img src="/img/SmartIndiaHackathon2.jpg" className="d-block w-100" alt="Aurobindo banner"/> 
					</div>
					<div className="carousel-item">
					<img src="/img/aurobindo-home-banner-1.jpg" className="d-block w-100" alt="Aurobindo banner"/> 
					</div>
				</div>
				 
				</div>
    </>
    );
}

Banner.propTypes = propTypes;
Banner.defaultProps = defaultProps;
export default Banner;