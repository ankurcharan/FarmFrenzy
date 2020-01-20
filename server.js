const express = require('express');

const app = express();



app.use(express.json())
app.use(express.urlencoded({extended : true}))




function runPy() {

	return new Promise((resolve, reject) => {
	
		console.log('Running Py Script');

		let spawn = require('child_process').spawn;

		let process = null;
		
		process = spawn('python3', ["./classifier/index.py"]);

		process.stdout.on('data', (data) => {

			let crop = data.toString().trim();

			console.log(crop, ' in promise');
		
			if(crop === undefined || crop === null) {
				reject(crop);
			}
			else {
				resolve(crop);
			}
		
		})

		
	})
}




app.use('/', (req, res) => {


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