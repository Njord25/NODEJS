const EventEmitter = require('events').EventEmitter;
const fs = require('fs');
module.exports = {
	create,
};
/**
 * Create a new CSV file
 * @param  {String} filename filename with the path
 * @param  {Array} data      array with the data to convert to csv
 * @return {EventEmitter}    event
 */
function create(filename, data){
	let event = new EventEmitter();
	//csv content
	let csv = '';
	data.records.forEach(function (element) {
		csv += element.id + ', ' + element.model + ', ' + element.brand + ', ' + element.year + ', ' + element.price + ', ' + element.color + ', ' + element.styleSelect + '\n';
	});

	console.log('csv'+csv)
	// write the csv file
	fs.writeFile(filename, csv, error => {
		if(error) event.emit('error', error);
		event.emit('done','\n',csv);
	});
	return event;
}
