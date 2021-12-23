import React from 'react';
import { breadCrumbDetails } from './breadcrumbs';
import { useRouter } from 'next/router';
import Link from 'next/link'

const propTypes = {};
const defaultProps = {};

const Innerbanner = () => {
const router = useRouter();

	const rawRoute = router.route.split("/");
	const pageName = rawRoute[rawRoute.length - 1];
	console.log("pageName", breadCrumbDetails[pageName]);
	const { bimage, bTitle, bcontent } = breadCrumbDetails[pageName];
	// const { bimage, bTitle, bcontent } = breadCrumbDetails.default;
    const fallBackPage = ["business-overview", "sdfg", "fgh"];
	// console.log('routerrouterrouter', pageName);

	const generateBreadCrumbTitle = (ind, name) => {
		const nameToDisplay = (!ind ? 'home' : name);
		console.log('asdfgsdfgh', nameToDisplay);
		return nameToDisplay.split("-").join(" ");
	}

	const navigateOnClick = (selectedPath) => {
	const pathToNavigate = selectedPath === "" ? "/" : breadCrumbDetails[selectedPath].path[selectedPath];
		router.push(pathToNavigate);

	}

	const generateHref = (i, name) => {
		var path="/"
		if(!i) {
			path = "/";
		} else if(i === rawRoute.length - 1) {
			path = router.pathname;
		} else {
			
			if (typeof breadCrumbDetails[name].path[name] !== "undefined" ) {
				path = breadCrumbDetails[name].path[name]
			}
		}
		console.log('jhgfdcnvfghj', i, path)
		return path
	}

	return (
		<>
			{/* <section id="page-title" className="page-title-parallax page-title-dark" style={{ backgroundImage: `url(require(${bimage})` }} > */}
			<section id="page-title" className="page-title-parallax page-title-dark" style={{ backgroundImage: `url(${bimage})` }} >
				<div className="container clearfix"> 
					<h1 dangerouslySetInnerHTML={{ __html: bTitle }}></h1>
					<h6 dangerouslySetInnerHTML={{ __html: bcontent }}></h6>
					<ol className="breadcrumb">
						{rawRoute.map((name, i) => 
							<li className={`breadcrumb-item ${(i === rawRoute.length - 1) ? 'active' : ''}`}>
									{/* {name === "" ? "/" : breadCrumbDetails[name].path[name]} */}
								<Link href={generateHref(i,name)}>
									<a>{generateBreadCrumbTitle(i, name)}</a>
								</Link>								
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