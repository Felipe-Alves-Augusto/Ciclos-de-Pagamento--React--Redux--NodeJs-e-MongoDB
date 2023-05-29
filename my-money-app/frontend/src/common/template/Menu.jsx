import React from "react";
import MenuItem from './MenuItem';
import MenuTree from "./MenuTree";

const Menu = (props) => {
    return (
        <ul className="sidebar-menu">
            <MenuItem path="/" label="Dasboard" icon="dashboard" ></MenuItem>
            <MenuTree label="Cadastro" icon="edit">
                <MenuItem path="/billingCycles" label="Ciclos de Pagamentos" icon="usd"></MenuItem>
            </MenuTree>
        </ul>
    )
}

export default Menu

