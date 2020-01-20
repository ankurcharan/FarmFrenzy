import React from 'react';
import Navbar from './components/Navbar/Navbar';
import UploadForm from './components/UploadForm/UploadForm';

import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './components/Home';
import Details from './components/Details';

function App() {
	return (
		<BrowserRouter>
		<div>
			<Navbar />

			<Switch>
			<div className='container'>
			<Route exact path="/" component={Home} />
			<Route exact path="/upload" component={UploadForm} />
			<Route exact path="/details" component={Details} />

			</div>
			
			</Switch>

		</div>
		</BrowserRouter>
		);
	}
	
	export default App;
	