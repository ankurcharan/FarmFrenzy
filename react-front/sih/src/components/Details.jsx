import React from 'react'

const Details = (props) => {
	console.log(props);
	
	const {state} = props.location
	
	console.log(state);
	
	return (
		<div>
			
			<div class="row">
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				
				<div class="col s12 m12 center">
					<div class="card white darken-1">
						<div class="card-content black-text">
							<center><span class="card-title">Details</span>
							</center>
						
							<div>
								<img src={state.url} alt="crop img"/>
							</div>
							<br/>
							<h3>{state.data.crop.name}</h3>
			
							<p>{state.data.crop.text}</p>	 */}
												


						</div>
				
					</div>
				</div>
			</div>
		</div>
	)
}

export default Details
