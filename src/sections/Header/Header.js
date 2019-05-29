import React from 'react';
import classes from './Header.css';

import MenuItems from '../../components/Menu/MenuItems/MenuItems';

class Header extends React.Component {
    state = {
        items: [
            {id: 1, text: 'About'},
            {id: 2, text: 'Portfolio'},
            {id: 3, text: 'Clients'},
            {id: 4, text: 'Team'},
            {id: 5, text: 'Services'},
            {id: 6, text: 'Blog'},
            {id: 7, text: 'Contacts'},
        ]
    };

    render() {
        return(
            <div className={classes.HeaderContainer}>
                <MenuItems items={this.state.items} />
            </div>
        );
    }
}

export default Header;