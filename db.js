const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://ankur:asdfghjkl@croppredict-5u6qv.mongodb.net/test?retryWrites=true&w=majority';

const options = {
	poolSize: 10,
	useNewUrlParser: true,
	useUnifiedTopology: true
}


mongoose.connect(dbURI, options)
.then(() => {
	console.log('Database connecttion establised');
}, err => {
	console.log('error', err);
})


require('./models/crops');