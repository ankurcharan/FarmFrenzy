const express = require('express');
const fileUpload = require('express-fileupload');
const uuid4 = require('uuid/v4');
const multer = require('multer');
const cors = require('cors')
// let upload = multer({ dest: 'uploads/ '});

const controllers = require('./controller');

// init db
require('./db');

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
			console.log(crop.length, ' in promise');

			things = crop.split(' ');
			if(things.length === 0) {
				reject('Zero Length String From PY');
			}

			things = things[things.length - 1];
		
			if(things === undefined || things === null) {
				reject('String undefined/null');
			}
			else {
				resolve(things);
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

	let latitude = '29.941996699999997';	// req.body
	let longitude = '29.941996699999997';	// req.body
	
	// console.log(path);

	runPy(path)
		.then((data) => {


			let cc = data.trim();
			console.log(data, 'ye itna');

			controllers.saveNewRqst({
				latitude: latitude,
				longitude: longitude,
				image: path
			})
			.then((savedRqst) => {


				const cropData = {
					wheat: {
						name: 'Wheat',
						text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
					},
					coffee: {
						name: 'Coffee',
						text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
					},
					bottlegourd: {
						name: 'Bottle Gourd',
						text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
					},
					cotton: {
						name: 'Cotton',
						text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
					},
					sugarcane: {
						name: 'Sugarcane',
						text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
					},
				};

				console.log(cc, 'cc');

				// console.log(' yahan suc ', data);
				console.log(typeof(cc));
				console.log(cc.length)
				console.log()
				console.log('cc', cc)
				// console.log(cropData[`${data}`]);
				console.log(cropData[cc])

				return res.status(200).json({
					success: true,
					message: 'result and saved',
					crop: cropData[cc],
					savedRequest: savedRqst
				});
			})
			.catch((err) => {

				console.log('fail');

				return res.status(500).json({
					success: true,
					message: 'result and not saved',
					crop: cropData[data],
					error: err
				});
			});
		})
		.catch((err) => {

			return res.status(500).json({
				success: false,
				message: 'try later',
				error: err
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





app.get('/api/crops', (req, res) => {

	const cropData = {
		wheat: {
			name: 'Wheat',
			text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
		},
		coffee: {
			name: 'Coffee',
			text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
		},
		bottlegourd: {
			name: 'Bottle Gourd',
			text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
		},
		cotton: {
			name: 'Cotton',
			text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
		},
		sugarcane: {
			name: 'Sugarcane',
			text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
		},
	};

	return res.status(200).json({
		success: true,
		message: 'all crop data',
		data: cropData
	});
})











const PORT = process.env.PORT || 9000;
app.listen(PORT, (err) => {

	if(err) {
		console.log('Server could not be started');
		return;
	}

	console.log(`Server started at http://localhost:${PORT}`);
})