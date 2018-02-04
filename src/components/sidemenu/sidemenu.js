import React from 'react';
import '../../css/sidemenu.css';
import FontAwesome from 'react-fontawesome';
import ChangeBackground from "./changeBackground";
import Stickers from "./stickers";


class SideMenu extends React.Component {
    constructor() {
        super();
        this.state = {
            isOpen: 'none',
            currentContent: 0,
        };
        this.changeContent = this.changeContent.bind(this)
    }

    handleIsOpen() {
        this.setState({
            isOpen: this.state.isOpen === 'none' ? 'block' : 'none'
        })
    }

    changeContent(id) {
        this.setState({
            currentContent: id
        })
    }

    render () {
        const {isOpen, currentContent} = this.state;
        let content = [<div>Basic content</div>, <ChangeBackground/>, <Stickers/>];
        return (
            <div>
                <button onClick={this.handleIsOpen.bind(this)} className="menu-btn">Menu</button>
                <div style={{display: isOpen}} className="sidemenu">
                     <FontAwesome onClick={this.handleIsOpen.bind(this)} className="super-crazy-colors" name='times' size="2" style={{ color: 'white', textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', cursor: 'pointer'}}/>
                    <ul>
                        <li data-id="0" onClick={() => this.changeContent(1)}>Change Background</li>
                        <li data-id="1" onClick={() => this.changeContent(2)}>Stickers</li>
                    </ul>
                    {content [currentContent]}
                </div>
            </div>
        )
    }
}

export default SideMenu;