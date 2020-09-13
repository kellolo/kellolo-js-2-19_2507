let fs = require('fs');

module.exports = async function(url, data) {
	try {
		await fs.writeFile(url, JSON.stringify(data, null, ' '), err => {
			console.log("WRITE FILE ERR");
		});
		return true;
	}
	catch(err) {
		console.log("WRITE FILE ERR");
		return false;
	}
}