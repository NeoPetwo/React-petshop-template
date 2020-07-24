// Daniel da Rocha Fróes 10255956
// Gabriel Santos Nicolau 10684600
// Kaio Tadeu Rodrigues 7561083

import React from 'react';
import { NavLink, Route } from 'react-router-dom';

import AdminInventoryAdd from '../../pages/AdminInventoryAdd/AdminInventoryAdd';
import AdminInventoryUpdate from '../../pages/AdminInventoryUpdate/AdminInventoryUpdate';
import AdminInventoryDelete from '../../pages/AdminInventoryDelete/AdminInventoryDelete';
import AdminInventoryConsult from '../../pages/AdminInventoryConsult/AdminInventoryConsult';

export default class NavbarAdminRegister extends React.Component {

  render() {
    return (
    <div class="content-wrapper">
      {/* <!-- ADM Registration page nav--> */}
      <div class="adm_nav">
          <h1>Inventory</h1>
          <ul>
              <li><NavLink to="/admin/inventory/add"><i class="fas fa-user-cog"></i> Add</NavLink></li>
              {/* <li><NavLink to="/admin/inventory/update"><i class="fas fa-user-tag"></i> Update</NavLink></li> */}
              {/* <li><NavLink to="/admin/inventory/delete"><i class="fas fa-tag"></i> Delete</NavLink></li> */}
              <li><NavLink to="/admin/inventory/consult"><i class="fas fa-concierge-bell"></i> Item list</NavLink></li>
              <hr/>
          </ul>
      </div>

      <Route path="/admin/inventory/add" component={AdminInventoryAdd} />
      <Route exact path="/admin/inventory/update" component={AdminInventoryUpdate} />
      <Route path="/admin/inventory/update/:productslug" component={AdminInventoryUpdate} />
      <Route path="/admin/inventory/delete" component={AdminInventoryDelete} />
      <Route path="/admin/inventory/consult" component={AdminInventoryConsult} />
    </div>
    );
  }
}