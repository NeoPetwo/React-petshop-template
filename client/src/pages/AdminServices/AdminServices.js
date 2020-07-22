import React from 'react';
import './AdminServices.scss';

export default class AdminServices extends React.Component {
  render() {
  return (
    <div class="admin-services">
      <div class="adm_registration">
        <div class="content-wrapper">
          <div class="calendar-contain">
            <section class="title-bar">
                    {/* <span class="title-bar__year">
                      Calendar > April 2020
                    </span> */}
                  <div class="title-bar__select">
                      <select name="Mês" id="month-select">
                          <option value="4">April</option>
                          <option value="1">January</option>
                          <option value="2">February</option>
                          <option value="3">March</option>
                          <option value="5">May</option>
                          <option value="6">June</option>
                          <option value="7">July</option>
                          <option value="8">August</option>
                          <option value="9">September</option>
                          <option value="10">October</option>
                          <option value="11">November</option>
                          <option value="12">December</option>
                      </select>
                      <select name="Year" id="year-select">
                          <option value="4">2020</option>
                          <option value="1">2019</option>
                          <option value="2">2018</option>
                          <option value="3">2017</option>
                      </select>
                  </div>

            </section>

                <aside class="calendar__sidebar">
                    <div class="sidebar__nav">
                        {/* <!-- Icons by Icons8 --> */}
                        <ul>
                            <li><a href="#"> <i class="fas fa-plus"></i> Add</a></li>
                            <li><a href="#"> <i class="fas fa-trash-alt"></i> Remove</a></li>
                            <li><a href="#"> <i class="fas fa-exchange-alt"></i>  Change</a></li>
                        </ul>
                    </div>
                    <h2 class="sidebar__heading">Quarta<br/>15 de Abril</h2>
                    <h3>Scheduled Services</h3>
                    <ul class="sidebar__list">
                        <li class="sidebar__list-item">
                            <a href="#">
                            <span class="list-item__time">8.30</span>
                            Grooming </a>
                        </li>
                        <li class="sidebar__list-item">
                            <a href="#">
                                <span class="list-item__time">10.30</span>
                                Shower </a>
                        </li>
                        <li class="sidebar__list-item">
                            <a href="#">
                                <span class="list-item__time">14.30</span>
                                Shower </a>
                        </li>
                        <li class="sidebar__list-item">
                            <a href="#">
                                <span class="list-item__time">15.00</span>
                                Grooming </a>
                        </li>
                        <li class="sidebar__list-item">
                            <a href="#">
                                <span class="list-item__time">16.30</span>
                                Shower </a>
                        </li>
                        <li class="sidebar__list-item">
                            <a href="#">
                                <span class="list-item__time">17.00</span>
                                Grooming </a>
                        </li>
                    </ul>
                </aside>



            </div>


        </div>
      </div>
    </div>
    
  );
  }
}