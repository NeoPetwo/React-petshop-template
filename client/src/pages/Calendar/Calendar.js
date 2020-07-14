import React from 'react';
import './Calendar.scss';

export default class Calendar extends React.Component {
  render() {
    return (
		<div class="calendar" >
			<div class="column">
	
					<div class="banner bg-green row" id="input-bar">
							<select class="box">
									<option>Services</option>
									<option>Haircut</option>
									<option>Bathing</option>
									<option>Veterinary appointment</option>
							</select>
							<h2 >Schedule Service</h2>
							<input type="date" class = "box"/>
					</div>
	
	
					
					<div  class="banner bg-white" id="activities-list">
							<h2>Available times</h2>
							<br/> 
							{/* <!-- trocar para o flow --> */}
							<div class="activity-card row bg-darker">
									<div class="hour-section">Hour:<br/> <span class = "hour-text">10:00 - 11:00</span></div>
									<form class="info row">
											<div class = "column">
													<p class= "service-name">Type:<b> Bathing</b></p>
													<select class = "select-pet bg-darker">
															<option><b>Select your pet</b></option>
															<option>My_pet 1</option> 
															<option>My_pet 2</option> 
															<option>My_pet 3</option> 
															<option>My_pet 4</option> 
													</select>
											</div>
											<p class="description">
													<b>Description:</b><br/>
													Full Bath in your pet. Includes gentle shampoo, blow-dry, ear cleaning, gland expression, 15-minute brushout, scented spritz and nail trim.
											</p>
											<input class="schedule-button" type="submit" value="Schedule"/>
									</form>
							</div>
							<div class="activity-card row bg-ligther">
									<div class="hour-section">Hour:<br/> <span class = "hour-text">10:00 - 11:00</span></div>
									<form class="info row">
											<div class = "column">
													<p class= "service-name">Type:<b> Bathing</b></p>
													<select class = "select-pet bg-ligther">
															<option><b>Select your pet</b></option>
															<option>My_pet 1</option> 
															<option>My_pet 2</option> 
															<option>My_pet 3</option> 
															<option>My_pet 4</option> 
													</select>
											</div>
											<p class="description">
													<b>Description:</b><br/>
													Full Bath in your pet. Includes gentle shampoo, blow-dry, ear cleaning, gland expression, 15-minute brushout, scented spritz and nail trim.
											</p>
											<input class="schedule-button" type="submit" value="Schedule"/>
									</form>
							</div>
							<div class="activity-card row bg-darker">
									<div class="hour-section">Hour:<br/> <span class = "hour-text">10:00 - 11:00</span></div>
									<form class="info row">
											<div class = "column">
													<p class= "service-name">Type:<b> Bathing</b></p>
													<select class = "select-pet bg-darker">
															<option><b>Select your pet</b></option>
															<option>My_pet 1</option> 
															<option>My_pet 2</option> 
															<option>My_pet 3</option> 
															<option>My_pet 4</option> 
													</select>
											</div>
											<p class="description">
													<b>Description:</b><br/>
													Full Bath in your pet. Includes gentle shampoo, blow-dry, ear cleaning, gland expression, 15-minute brushout, scented spritz and nail trim.
											</p>
											<input class="schedule-button" type="submit" value="Schedule"/>
									</form>
							</div>
							<div class="activity-card row bg-ligther">
									<div class="hour-section">Hour:<br/> <span class = "hour-text">10:00 - 11:00</span></div>
									<form class="info row">
											<div class = "column">
													<p class= "service-name">Type:<b> Bathing</b></p>
													<select class = "select-pet bg-ligther">
															<option><b>Select your pet</b></option>
															<option>My_pet 1</option> 
															<option>My_pet 2</option> 
															<option>My_pet 3</option> 
															<option>My_pet 4</option> 
													</select>
											</div>
											<p class="description">
													<b>Description:</b><br/>
													Full Bath in your pet. Includes gentle shampoo, blow-dry, ear cleaning, gland expression, 15-minute brushout, scented spritz and nail trim.
											</p>
											<input class="schedule-button" type="submit" value="Schedule"/>
									</form>
							</div>
							<div class="activity-card row bg-darker">
									<div class="hour-section">Hour:<br/> <span class = "hour-text">10:00 - 11:00</span></div>
									<form class="info row">
											<div class = "column">
													<p class= "service-name">Type:<b> Bathing</b></p>
													<select class = "select-pet bg-darker">
															<option><b>Select your pet</b></option>
															<option>My_pet 1</option> 
															<option>My_pet 2</option> 
															<option>My_pet 3</option> 
															<option>My_pet 4</option> 
													</select>
											</div>
											<p class="description">
													<b>Description:</b><br/>
													Full Bath in your pet. Includes gentle shampoo, blow-dry, ear cleaning, gland expression, 15-minute brushout, scented spritz and nail trim.
											</p>
											<input class="schedule-button" type="submit" value="Schedule"/>
									</form>
							</div>
							<div class="activity-card row bg-ligther">
									<div class="hour-section">Hour:<br/> <span class = "hour-text">10:00 - 11:00</span></div>
									<form class="info row">
											<div class = "column">
													<p class= "service-name">Type:<b> Bathing</b></p>
													<select class = "select-pet bg-ligther">
															<option><b>Select your pet</b></option>
															<option>My_pet 1</option> 
															<option>My_pet 2</option> 
															<option>My_pet 3</option> 
															<option>My_pet 4</option> 
													</select>
											</div>
											<p class="description">
													<b>Description:</b><br/>
													Full Bath in your pet. Includes gentle shampoo, blow-dry, ear cleaning, gland expression, 15-minute brushout, scented spritz and nail trim.
											</p>
											<input class="schedule-button" type="submit" value="Schedule"/>
									</form>
							</div>
							<div class="activity-card row bg-darker">
									<div class="hour-section">Hour:<br/> <span class = "hour-text">10:00 - 11:00</span></div>
									<form class="info row">
											<div class = "column">
													<p class= "service-name">Type:<b> Bathing</b></p>
													<select class = "select-pet bg-darker">
															<option><b>Select your pet</b></option>
															<option>My_pet 1</option> 
															<option>My_pet 2</option> 
															<option>My_pet 3</option> 
															<option>My_pet 4</option> 
													</select>
											</div>
											<p class="description">
													<b>Description:</b><br/>
													Full Bath in your pet. Includes gentle shampoo, blow-dry, ear cleaning, gland expression, 15-minute brushout, scented spritz and nail trim.
											</p>
											<input class="schedule-button" type="submit" value="Schedule"/>
									</form>
							</div>
							<div class="activity-card row bg-ligther">
									<div class="hour-section">Hour:<br/> <span class = "hour-text">10:00 - 11:00</span></div>
									<form class="info row">
											<div class = "column">
													<p class= "service-name">Type:<b> Bathing</b></p>
													<select class = "select-pet bg-ligther">
															<option><b>Select your pet</b></option>
															<option>My_pet 1</option> 
															<option>My_pet 2</option> 
															<option>My_pet 3</option> 
															<option>My_pet 4</option> 
													</select>
											</div>
											<p class="description">
													<b>Description:</b><br/>
													Full Bath in your pet. Includes gentle shampoo, blow-dry, ear cleaning, gland expression, 15-minute brushout, scented spritz and nail trim.
											</p>
											<input class="schedule-button" type="submit" value="Schedule"/>
									</form>
							</div><div class="activity-card row bg-darker">
									<div class="hour-section">Hour:<br/> <span class = "hour-text">10:00 - 11:00</span></div>
									<form class="info row">
											<div class = "column">
													<p class= "service-name">Type:<b> Bathing</b></p>
													<select class = "select-pet bg-darker">
															<option><b>Select your pet</b></option>
															<option>My_pet 1</option> 
															<option>My_pet 2</option> 
															<option>My_pet 3</option> 
															<option>My_pet 4</option> 
													</select>
											</div>
											<p class="description">
													<b>Description:</b><br/>
													Full Bath in your pet. Includes gentle shampoo, blow-dry, ear cleaning, gland expression, 15-minute brushout, scented spritz and nail trim.
											</p>
											<input class="schedule-button" type="submit" value="Schedule"/>
									</form>
							</div>
							<div class="activity-card row bg-ligther">
									<div class="hour-section">Hour:<br/> <span class = "hour-text">10:00 - 11:00</span></div>
									<form class="info row">
											<div class = "column">
													<p class= "service-name">Type:<b> Bathing</b></p>
													<select class = "select-pet bg-ligther">
															<option><b>Select your pet</b></option>
															<option>My_pet 1</option> 
															<option>My_pet 2</option> 
															<option>My_pet 3</option> 
															<option>My_pet 4</option> 
													</select>
											</div>
											<p class="description">
													<b>Description:</b><br/>
													Full Bath in your pet. Includes gentle shampoo, blow-dry, ear cleaning, gland expression, 15-minute brushout, scented spritz and nail trim.
											</p>
											<input class="schedule-button" type="submit" value="Schedule"/>
									</form>
							</div>
					</div>
			</div>
		</div>
    );
  }
}