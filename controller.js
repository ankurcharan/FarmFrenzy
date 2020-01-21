const Request = require('./models/crops').request;


exports.listAllRequests = (req, res) => {

	return new Promise((resolve, reject) => {

		Request.find({}, (err, rqst) => {
		
			if(err) {
				return reject(err);
			}
	
			return resolve(rqst);
		})
	})
}

exports.saveNewRqst = (data) => {

	
	return new Promise((resolve, reject) => {

		let newRqst = new Request(data);
		newRqst.save((err, rqst) => {

			if(err) {
				return reject(err);
			}
	
			return resolve(rqst);
		})

	})

	
}