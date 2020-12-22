import React from 'react';

import Aux from '../../hoc/Auxaliry';
import  './Layout.css';
import Toolbar from '../Navigations/Toolbar/Toolbar';
import SideDrawer from '../Navigations/SideDrawer/SideDrawer';


const layout = (props) => (
    <Aux>
        <Toolbar />
        <SideDrawer />
        <main className="Content">
            {props.children}
        </main>
    </Aux>
);
 
export default layout;