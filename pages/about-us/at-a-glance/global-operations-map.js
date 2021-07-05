import React from 'react'; 
import Innerbanner from '../../../components/Layout/Innerbanner';
import PropTypes from 'prop-types'; 
const propTypes = {};

const defaultProps = {}; 
const Globaloperationsmap = () => {
    var bannerdetails={
		bimage :"/img/innerbanner.png",
		bTitle :"DELIVERING SUSTAINED GROWTH",
		bcontent :"We are diligently and sustainably achieving <br/> excellence in all that we do",
	}
    return (
        <>
        <Innerbanner {...bannerdetails} ></Innerbanner>
        <h2>Global Operations Map </h2>

        </>
    );
}

Globaloperationsmap.propTypes = propTypes;
Globaloperationsmap.defaultProps = defaultProps;
// #endregion

export default Globaloperationsmap;