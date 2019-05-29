import React from 'react';

import MenuItem from '../MenuItem/MenuItem';

const MenuItems = (props) => {
    return(
        <ul>
            {props.items.map(item => (
                <MenuItem key={item.id}>
                    <a href={"#" + item.text}>{item.text}</a>
                </MenuItem>
            ))}
        </ul>
    )
}

export default MenuItems;