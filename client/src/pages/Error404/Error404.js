// Daniel da Rocha Fróes 10255956
// Gabriel Santos Nicolau 10684600
// Kaio Tadeu Rodrigues 7561083
import React from 'react';
import './Error404.scss';
import { Link, Route } from 'react-router-dom';

import NavbarAdminRegister from '../../components/NavbarAdminRegister/NavbarAdminRegister';
import AdminServices from '../AdminServices/AdminServices';
import NavbarAdminInventory from '../../components/NavbarAdminInventory/NavbarAdminInventory';
import AdminServiceUpdate from '../AdminServiceUpdate/AdminServiceUpdate';

export default class Error404 extends React.Component {
  render() {
    return (
      <div className="error404">
       <div id="notfound">
        <div class="notfound">
          <div class="notfound-404">
            <h1>Oops!</h1>
            <h2>Error 404. Page not found</h2>
          </div>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <Link to="/">Return to HomePage</Link>
        </div>
      </div>
    </div>
    );
  }
}