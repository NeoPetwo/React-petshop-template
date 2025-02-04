// Daniel da Rocha Fróes 10255956
// Gabriel Santos Nicolau 10684600
// Kaio Tadeu Rodrigues 7561083
import React from 'react';
import './AdminActions.scss';
import { NavLink, Route } from 'react-router-dom';

import NavbarAdminRegister from '../../components/NavbarAdminRegister/NavbarAdminRegister';
import AdminServices from '../AdminServices/AdminServices';
import NavbarAdminInventory from '../../components/NavbarAdminInventory/NavbarAdminInventory';
import AdminServiceUpdate from '../AdminServiceUpdate/AdminServiceUpdate';

export default class AdminActions extends React.Component {
  render() {
    return (
    <div class="adminactions">
        {/* <!-- Adm indicator nav --> */}
        <div class="adm_nav">
            <hr/>
            <h1>Your account has admin privileges</h1>
            <hr/>
            <ul>
                <li><NavLink to="/admin/register/admin">Register</NavLink></li>
                <li><NavLink to="/admin/services">Services</NavLink></li>
                <li><NavLink to="/admin/inventory/consult">Inventory</NavLink></li>
            </ul>
        </div>
        
        <Route path="/admin/register" component={NavbarAdminRegister} />
        <Route exact path="/admin/services" component={AdminServices} />
        <Route path="/admin/inventory" component={NavbarAdminInventory} />
        <Route path="/admin/services/update/:_id" component={AdminServiceUpdate}/>
        
    </div>
    );
  }
}