
// Daniel da Rocha Fróes 10255956
// Gabriel Santos Nicolau 10684600
// Kaio Tadeu Rodrigues 7561083
import React from 'react';
import { NavLink, Route } from 'react-router-dom';

import AdminRegisterAdmin from '../../pages/AdminRegisterAdmin/AdminRegisterAdmin';
import AdminRegisterCustomer from '../../pages/AdminRegisterCustomer/AdminRegisterCustomer';
import AdminRegisterProducts from '../../pages/AdminRegisterProducts/AdminRegisterProducts';
import AdminRegisterServices from '../../pages/AdminRegisterServices/AdminRegisterServices';
import AdminServiceUpdate from '../../pages/AdminServiceUpdate/AdminServiceUpdate';

export default class NavbarAdminRegister extends React.Component {

  render() {
    return (
    <div class="content-wrapper">
      {/* <!-- ADM Registration page nav--> */}
      <div class="adm_nav">
          <h1>Registration</h1>
          <ul>
              <li><NavLink to="/admin/register/admin"><i class="fas fa-user-cog" /> Admin</NavLink></li>
              <li><NavLink to="/admin/register/customer"><i class="fas fa-user-tag" /> Customer</NavLink></li>
              {/* <li><NavLink to="/admin/register/products"><i class="fas fa-tag"></i> Products</NavLink></li> */}
              <li><NavLink to="/admin/register/services"><i class="fas fa-concierge-bell"></i> Services</NavLink></li>
              <hr/>
          </ul>
      </div>

      <Route path="/admin/register/admin" component={AdminRegisterAdmin} />
      <Route path="/admin/register/customer" component={AdminRegisterCustomer} />
      {/* <Route path="/admin/register/products" component={AdminRegisterProducts} /> */}
      <Route path="/admin/register/services" component={AdminRegisterServices} />
      <Route path="/admin/services/update/:serviceId" component={AdminServiceUpdate}/>
    </div>
    );
  }
}