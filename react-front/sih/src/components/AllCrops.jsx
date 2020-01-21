import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';

import config from '../config';

const AllCrops = () => {

	const [state, setState] = useState({});



	useEffect(() => {

		const url = `${config.url}/api/crops`
		axios.get(url)
		.then((data) => {

			if(data.data.success === true) {
				
				let keys = Object.keys(data.data.data);
				let yy = keys.map((item) => {
					return data.data.data[item];					
				})

				setState({
					...state,
					crops: yy
				})
			}
		})
		.catch((err) => {
			console.log(err);
		});

	}, []) 

	return (
		<div>
			{
				(state.crops) ? (

					state.crops.map((item) => {

						return (
							<div>
								<span>{item.name}</span>
								<br />
								<p>{item.text}</p>
								<br />
							</div>
							
						)
					})

				) : 'Loading'
			}
		</div>
	)
}

export default AllCrops
