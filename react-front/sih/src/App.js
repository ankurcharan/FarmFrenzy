import React from 'react';
import Navbar from './components/Navbar/Navbar';
import UploadForm from './components/UploadForm/UploadForm';

import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './components/Home';
import Details from './components/Details';
import AllCrops from './components/AllCrops';

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
			<Route exact path="/crops" component={AllCrops} />
			</div>
			
			</Switch>

		</div>
		</BrowserRouter>
		);
	}
	
	export default App;
	