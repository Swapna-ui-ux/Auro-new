import React from 'react'; 
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {}; 

const pepfarprogram = () => {
    return (
        <>
          <section id="content">
			<div className="content-wrap">
				<div className="container">

					<div className="row col-mb-50">
						<div className="col-12">
							<div className="head-title">
								<h2>PEPFAR Program</h2>
									<h3>Aurobindo’s work supplying affordable Anti-Virals to the Global HIV and Hep-C communities</h3>
									<p>Aurobindo Pharma has supported the PEPFAR program since its inception by filing HIV drugs with the US Food and Drug Administration (USFDA) for tentative approval to supply to low- and middle-income countries (LMIC). Through the PEPFAR program, Aurobindo can reach out to people living with HIV (PLHIV) and deliver drugs at more affordable prices. Aurobindo was the first generic company to develop dolutegravir and has also developed the combination of tenofovir and lamivudine (“TLD”), before launching the USDFDA approved product in LMICs. Today, Aurobindo has significantly scaled up its capacity and is able to supply treatment to 3-4 million patients globally.</p>
									<p>Over the years, Aurobindo has actively worked to adapt and improve our outreach initiatives, incorporating feedback from many different stakeholders. We continue to closely monitor our efforts to reach as many patients as possible, to fulfil our commitment to healthier life,</p>
									<p><strong>We Believe</strong> – No child should be born with HIV. No child should be an orphan because of HIV. No one should die due to lack of access to treatment.</p>
									<p><a className="small-arrow-text" href="" target="_blank" rel="noopener">Read More at the Medicines Patent Pool <i className="long-arrow">→</i></a></p>

							</div> 
						</div>  
					</div>

				</div>
			</div>
		</section>
        </>
    );
}

pepfarprogram.propTypes = propTypes;
pepfarprogram.defaultProps = defaultProps;
// #endregion

export default pepfarprogram;