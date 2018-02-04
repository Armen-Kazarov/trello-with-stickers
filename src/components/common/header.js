import React from 'react';
import {Link} from "react-router-dom";
import '../../css/header.css';
import FontAwesome from 'react-fontawesome';
import SideMenu from "../sidemenu/sidemenu";

class Header extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div className="header">
                <div className="header-first-part">
                    <div className="header-boards">
                        <Link to='/board'>Boards</Link>
                    </div>
                </div>
                <div className="header-second-part">
                    <Link to='/'>Trello</Link>
                </div>
                <div className="header-third-part">
                    <span><FontAwesome name='rocket' size="2x" spin style={{ color: 'white', textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/></span>
                </div>


            </div>
                <div className="sub-header">
                    <SideMenu/>
                </div>
            </div>
        )
    }
}

export default Header;