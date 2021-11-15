import React from 'react'
import { ContextMenu, MenuItem } from '@eccenca/gui-elements';

const ContextThreeDotMenuComponent = () => {
    return (
        <div>
        <h1>Menu Component </h1>
        <ContextMenu
        align="left|right(default)"
        valign="top|bottom(default)"
        tooltip="for menu button(currently not supported)"
        target="idformymenu(auto generated if it is not given)"
        >
        <MenuItem>First Item</MenuItem>
        <MenuItem>Second Item</MenuItem>
        <MenuItem>Menu Item 3</MenuItem>
        <MenuItem>Another Menu Item</MenuItem>
        <MenuItem>Alright</MenuItem>
        </ContextMenu>
        </div>
    )
}

export default ContextThreeDotMenuComponent
