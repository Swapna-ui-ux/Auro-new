import React from 'react'; 
import parse from 'html-react-parser';
const propTypes = {};
const defaultProps = {};
 
const Innerbanner = (bannerdetails) => {
	var baimage=bannerdetails.bimage;
	var batitle=bannerdetails.bTitle;
	var bacontent=bannerdetails.bcontent;
	//console.log(bannerdetails);
	//console.log(baimage);
    return (
        <>
       <section id="page-title" className="page-title-parallax page-title-dark" style={{backgroundImage: `url('${baimage}')` }} >
			<div className="container clearfix">
				<h1>{batitle}</h1> 
				{/* <h6>{bacontent}</h6> */}
				<h6 dangerouslySetInnerHTML={{ __html: bacontent }}></h6>
				<ol className="breadcrumb">
					<li className="breadcrumb-item"><a href="#">Home</a></li>
					<li className="breadcrumb-item"><a href="#">Investors</a></li> 
					<li className="breadcrumb-item"><a href="#">Results, Reports & Presentations</a></li>
					<li className="breadcrumb-item active" aria-current="page">Results Announcements</li>
				</ol> 
			</div> 
		</section>

        </>
    );
}

Innerbanner.propTypes = propTypes;
Innerbanner.defaultProps = defaultProps; 

export default Innerbanner;