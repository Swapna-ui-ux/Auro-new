import React from 'react';

import PropTypes from 'prop-types';
import Nav from './Nav';
import Footer from './Footer';
import Innerbanner from './Innerbanner';
const propTypes = {};
const defaultProps = {};
const Layout = ({children}) => {
    return (
        <>
        <div id="wrapper" className="clearfix">
<Nav></Nav>
<Innerbanner/>
{children}
<Footer></Footer>
</div>
</>
    );
}

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;


export default Layout;