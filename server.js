const express = require('express');
const fileUpload = require('express-fileupload');

const app = express();




app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use(fileUpload());

app.use(express.static('./public'));





function runPy() {

	return new Promise((resolve, reject) => {
	
		console.log('Running Py Script');

		let spawn = require('child_process').spawn;

		const process = spawn('python3', ["./classifier/index.py"]);
		
		process.stdout.on('data', (data) => {

			let crop = data.toString().trim();

			console.log(crop, ' in promise');
		
			if(crop === undefined || crop === null) {
				reject(crop);
			}
			else {
				resolve(crop);
			}
		});
	});
}













let cnt = 0;
app.post('/api/expressup', (req, res) => {


	if(!req.files || Object.keys(req.files).length === 0) {
		return res.status(400).json({
			success: false,
			message: 'No files uplodaded'
		});
	}

	let file = req.files.imageFile;

	file.mv(`./images/${cnt++}.jpg`, (err) => {

		if(err) {
			return res.status(500).json({
				success: false,
				message: 'couldnt move',
				error: err
			});
		}

		return res.status(200).json({
			success: true,
			message: 'file uploaded'
		})
	})
})















app.use('/api', (req, res) => {

	runPy()
	.then((data) => {

		res.status(200).json({
			success: true,
			message: data
		});
	})
	.catch((err) => {

		res.status(500).json({
			success: false,
			message: 'Internal Server Error.',
			error: err
		});
	});	
})




const PORT = 9000;
app.listen(PORT, (err) => {

	if(err) {
		console.log('Server could not be started');
		return;
	}

	console.log(`Server started at http://localhost:${PORT}`);
})