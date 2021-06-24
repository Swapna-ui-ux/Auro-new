import React from 'react';

import PropTypes from 'prop-types';
import Nav from './Nav';
import Footer from './Footer';
const propTypes = {};
const defaultProps = {};
const Layout = ({children}) => {
    return (
        <>
        <div id="wrapper" className="clearfix">
<Nav></Nav>
{children}
<Footer></Footer>
</div>
</>
    );
}

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;


export default Layout;