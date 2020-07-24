// Daniel da Rocha Fróes 10255956
// Gabriel Santos Nicolau 10684600
// Kaio Tadeu Rodrigues 7561083
import React from 'react';
import './Footer.scss';

export default class Footer extends React.Component {

  render() {
    return (
    <div class="footer">
      <footer>
        <div id="presentation">
            <section id="left">
                <div class="row">
                    <h1 id="title">NeoPetwo</h1>
                    <p id="slogan">Your best friend, is our best friend</p>
                </div>
            </section>
            <section id="center">
                <p>As pet lovers ourselves, we propose a modern way of remotely checking out everything you might need to
                    care and love your best friend in the world!</p>
            </section>
            <section id="iconsSection">
                <div class="verticalLine"></div>
                <ul class="icons">
                    <li><a href="#" class="icon brands fa-twitter alt"><span class="label"></span></a></li>
                    <li><a href="#" class="icon brands fa-facebook alt"><span class="label"></span></a></li>
                    <li><a href="#" class="icon brands fa-instagram alt"><span class="label"></span></a></li>
                </ul>
            </section>
        </div>
        <div id="info">
            <p>Address: 2544 São Carlos Avenue &bull; São Carlos, SP &bull; Phone: (16) 0000-0000 &bull; Email:
                sac-neopetwo@neopetwo.com</p>
        </div>
      </footer>
    </div>);
  }
}