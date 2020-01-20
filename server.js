const express = require('express');
const fileUpload = require('express-fileupload');
const uuid4 = require('uuid/v4');
const multer = require('multer');
const cors = require('cors')
let upload = multer({ dest: 'uploads/ '});

const app = express();
app.use(cors())



app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use(fileUpload());

app.use(express.static('./public'));





function runPy(path) {

	return new Promise((resolve, reject) => {
	
		console.log('Running Py Script');

		let spawn = require('child_process').spawn;

		const process = spawn('python3', ["./classifier/index.py", path]);
		
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

app.use('/', (req, res, next) => {
	console.log('here');
	next();
})

app.post('/api/process', (req, res) => {

	

	let path = req.body.path;
	console.log(path)

	runPy(path)
		.then((data) => {

			return res.status(200).json({
				success: true,
				message: 'result',
				crop: data
			});
		})
		.catch((err) => {

			return res.status(500).json({
				success: false,
				message: 'try later'
			})
		});

}) 




app.post('/api/expressup', (req, res) => {


	if(!req.files || Object.keys(req.files).length === 0) {
		return res.status(400).json({
			success: false,
			message: 'No files uplodaded'
		});
	}

	let file = req.files.imageFile;

	const path = `./images/${uuid4()}.jpg`; 
	file.mv(path, (err) => {

		if(err) {
			return res.status(500).json({
				success: false,
				message: 'couldnt move',
				error: err
			});
		}

		runPy(path)
		.then((data) => {

			return res.status(200).json({
				success: true,
				message: 'result',
				crop: data
			});
		})
		.catch((err) => {

			return res.status(500).json({
				success: false,
				message: 'try later'
			})
		});

	})
})
















const PORT = 9000;
app.listen(PORT, (err) => {

	if(err) {
		console.log('Server could not be started');
		return;
	}

	console.log(`Server started at http://localhost:${PORT}`);
})