import React from 'react';

import Aux from '../../hoc/Auxaliry';
import  './Layout.css';
import Toolbar from '../Navigations/Toolbar/Toolbar';
import SideDrawer from '../Navigations/SideDrawer/SideDrawer';


class Layout extends React.Component{
    state = {
        showSideDrawer: true
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        })
    }


    render () {
        return (
        <Aux>
            <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
            <SideDrawer 
            open={this.state.showSideDrawer} 
            closed={this.sideDrawerClosedHandler}/>
            <main className="Content">
                {this.props.children}
            </main>
       </Aux>
        );
    }
} 
 
export default Layout;