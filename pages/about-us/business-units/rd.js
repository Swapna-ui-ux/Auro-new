import React from 'react'; 
import Innerbanner from '../../../components/Layout/Innerbanner';
import PropTypes from 'prop-types';
 
const propTypes = {};

const defaultProps = {};
 
const rd = () => {
    var bannerdetails={
		bimage :"/img/innerbanner.png",
		bTitle :"DELIVERING SUSTAINED GROWTH",
		bcontent :"We are diligently and sustainably achieving <br/> excellence in all that we do",
	}
    return (
        <>
         <Innerbanner {...bannerdetails} ></Innerbanner>
         <section id="content">
			<div className="content-wrap">
				<div className="container">

					<div className="row col-mb-50">
						<div className="col-12">
							<div className="head-title">
								<h2>Research and Development (R&amp;D)</h2>
									<h4>Overview</h4>
									<p>The Company’s R&amp;D strengths are in developing intellectual property in non-infringing processes and resolving complex chemistry challenges.Aurobindo Pharma is in the process of developing new drug delivery systems, new dosage formulations, and applying new technology for better processes.</p>
									<p>The R&amp;D Center, in Hyderabad covers over 13,000 sq.m, and provides a nurturing environment to a multi-disciplinary team of over 700 scientists striving for excellence.</p>
									<p>The Centre meets cGLP requirements, and is focused on the areas of organic synthesis, analytical research, dosage form development, pharmacology, bio-equivalence studies and drug delivery systems.</p>
									<p>The instrumentation and analytical knowledge base at the Centre facilitate:</p>
									<ul className="listitems">
										<li>Complete impurity profiling in all products developed.</li>
										<li>Development of analytical methods and specifications from raw materials, to non-compendial finished products.</li>
										<li>In-house synthesis of reagents for analysing organolithiums and noble metals.</li>
										<li>Accelerated and real-time stability studies.</li>
									</ul>
									<p>This reflects the Company’s commitment towards developing innovative technologies and creating a knowledge base in chemical synthesis, high quality generic formulations and development of drug delivery systems.</p>
									<h4>Our Strengths</h4>
									<p><strong className="titleslistess">1. Excellent infrastructure</strong></p>
									<p>The Centre is well equipped to handle various developmental challenges in the areas of oral and parenteral medications. Specifically, the available infrastructure includes:</p>
									<ul className="listitems">
										<li>Dedicated area and labs to handle potent substances like hormones.</li>
										<li>Process Development and Scale-up Labs attached to the manufacturing unit.</li>
										<li>An NDDS laboratory with specialized capabilities like nano-technology, hot melt extrusion, etc.</li>
										<li>A unit to develop parenteral dosage forms ranging from vials to ampoules to pre-filled syringes to large volume parenterals.</li>
										<li>A unit to develop opthalmic and nasal products using the BFS technology.</li>
										<li>Supporting dedicated packaging development labs with multifeeder BQS machinery capable of various packs including multi-product-in-a-blister.</li>
										<li>Dedicated analytical laboratories with UPLC’s, ion chromatography, an amino acid analyser, particle size and particle surface area analyser, hot stage microscopy, USP Type III and Type IV apparatus etc.</li>
										<li>A bio-equivalence laboratory approved by various regulatory bodies like USFDA, MHRA and WHO etc.</li>
									</ul>
									<p><strong className="titleslistess">2. Excellent talent pool</strong></p>
									<ul className="listitems">
										<li>A team of over 500 scientists dedicated to development of generic formulations, many of which are first-to-file.</li>
										<li>More than 180 patent applications have been filed by a dedicated IP team.</li>
										<li>The scientific team is supported by two separate project management teams dedicated to oral solids and parenteral portfolios. A group of more than 150 supports all regulatory filings across various geographies.</li>
									</ul>
									<h4>Our Achievements and Capabilities</h4>
									<p>The Centre is capable of developing, scaling up and commercializing various dosage forms spread across tablets, capsules, soft gels, oral liquids, injectables (solutions, suspensions, lyophilized, etc.), and ophthalmic (three piece and BFS) and nasal delivery systems.The focus is to develop products for the US and EU followed by other international markets, including specialized markets like Japan.We can develop complex in-vitro analytical as well as bio- analytical methods for various molecules including extremely potent drug combinations to support the formulation development team.The R&amp;D Centre has developed products and filed more than 200 ANDA’s, around 124 EU Dossiers for products and hundreds of Dossiers in other countries including Brazil, South Africa, Australia and China.The product range covers various pharmacological categories with special focus on anti-retroviral, anti-biotic, CNS and CVS drugs.</p>
							</div> 
						</div>  
					</div>

				</div>
			</div>
		</section>
        </>
    );
}

rd.propTypes = propTypes;
rd.defaultProps = defaultProps;
// #endregion

export default rd;