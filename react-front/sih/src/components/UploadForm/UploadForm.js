import React, { useState } from 'react'
// import axios from 'axios';
import Firebase from '../../firebase';
import axios from 'axios';

const UploadForm = (props) => {

	const [state, setState] = useState({
		file: null
	});

	const handleChange = (e) => {
		setState({
			...state,
			file: e.target.files[0]
		})
	}

	const sendURL = async (url) => {

		console.log('urlllll ', typeof(url));

		// const body = {
		// 	path: url,
		// };

		// let reqOptions = {};
		// reqOptions.method = 'POST';
		// reqOptions.body = JSON.stringify(body);

		// fetch('http://localhost:9000/api/process', reqOptions)
		// .then((result) => {
		// 	alert('done');
		// 	console.log(result);
		// })
		// .catch((err) => {
		// 	console.log(err);
		// })


		// axios.post('http://localhost:9000/api/process', body)
		// .then((result) => {
		// 	console.log(result);
		// })
		// .catch((err) => {
		// 	console.log(err);
		// })

		try {
			const res = await axios.post('http://localhost:9000/api/process',{
				path: url
			})

			console.log(res)

			props.history.push({
				pathname:'/details',
				state: res.data
			})
		} catch (error) {
			console.log(error)
		}
	}


	const imageName = Math.random();
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			console.log(state.file)
			let x = Firebase.storage().ref().child(`images/${imageName}.jpg`).put(state.file)
		
			x.on('state_changed', (snapshot) => {}, (err) => {}, () => {

				x.snapshot.ref.getDownloadURL()
				.then((url) => {
					console.log('url', url);

					sendURL(url);
				})
				.catch((err) => {
					console.log(err);
				})
			})

		} catch (error) {
			console.log(error)
		}

	}


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
				<br />
				
				<div class="col s12 m12">
					<div class="card white darken-1">
						<div class="card-content black-text">
							<span class="card-title">Upload Image</span>
							<p>Take photo or upload</p>
						

							<form onSubmit={handleSubmit}>
								<div class="file-field input-field">
								<div class="btn">
									<span>Photo</span>
									<input 
										type="file" 
										accept='image/jpeg' 
										capture='environment' 
										name="cropImage"
										onChange={handleChange}/>
								</div>
								<div class="file-path-wrapper">
									<input class="file-path validate" type="text" />
								</div>
								</div>

								<button 
									class="btn waves-effect waves-light" 
									type="submit" name="action">Submit
									<i class="material-icons right">send</i>
								</button>
								
							</form>							


						</div>
				
					</div>
				</div>
			</div>
		</div>
	)
}

export default UploadForm;



