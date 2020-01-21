import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
	return (
		<div>
			
			<nav>
				<div class="nav-wrapper">
				<a href="#!" class="brand-logo">Crop Processor</a>
				<a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
				<ul class="right hide-on-med-and-down">
					<li><Link to="/">Home</Link></li>
					<li><Link to="/upload">Process</Link></li>
					<li><Link to="/crops">Crops</Link></li>
					
				</ul>
				</div>
			</nav>

			<ul class="sidenav" id="mobile-demo">
				<li><Link to="/">Home</Link></li>
				<li><Link to="/upload">Process</Link></li>
				<li><Link to="/crops">Crops</Link></li>
			</ul>

		</div>
	)
}

export default Navbar;
