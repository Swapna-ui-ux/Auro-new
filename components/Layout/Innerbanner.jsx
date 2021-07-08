import React from 'react';
import parse from 'html-react-parser';
import { breadCrumbDetails } from "./breadcrumbs";
import { useRouter } from 'next/router';

const propTypes = {};
const defaultProps = {};

const Innerbanner = () => {
const router = useRouter();

	const rawRoute = router.route.split("/");
	const pageName = rawRoute[rawRoute.length - 1];
	// const { bimage, bTitle, bcontent } = breadCrumbDetails[pageName];
	const { bimage, bTitle, bcontent } = breadCrumbDetails.default
    const fallBackPage = ["business-overview", "sdfg", "fgh"]
	console.log('routerrouterrouter', pageName);

	const generateBreadCrumbTitle = (ind, name) => {
		const nameToDisplay = !ind ? 'home' : name 
		return nameToDisplay
	}

	return (
		<>
			<section id="page-title" className="page-title-parallax page-title-dark" style={{ backgroundImage: `url(require(${bimage})` }} >
				<div className="container clearfix">
					<h1>{bTitle}</h1>
					<h6 dangerouslySetInnerHTML={{ __html: bcontent }}></h6>
					<ol className="breadcrumb">
						{rawRoute.map((name, i) => 
							<li className={`breadcrumb-item ${(i === rawRoute.length - 1) ? 'active' : ''}`}>
								<a href="javascript:void(0)">{generateBreadCrumbTitle(i, name)}</a>
							</li>
						)}
					</ol>
				</div>
			</section>

		</>
	);
}

Innerbanner.propTypes = propTypes;
Innerbanner.defaultProps = defaultProps;

export default Innerbanner;