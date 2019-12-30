// 1. connect to db 
var Contact = require('../models/contact');

exports.createContact = function (contactData, callback) {
	console.log(contactData);
	console.log(callback);

	// 2. constructing  the query 
	var contactDao = new Contact(contactData);
	// 3. executing the query
	contactDao.save( function( err, data) { // 4. get the result 
		if(!err){
			console.log(data);
		}else{
			console.log(err);
		}
		callback(err, data); // 5. send the result
	});
}

exports.getContacts = function (callback) {
	Contact.find( function(err, data){
		if(!err){
			console.log(`Loaded Contacts ${data}`);
		}else{
			console.log(err);
		}
		callback(err, data);
	});
}

exports.getContactById = function (_id, callback) {
	
	Contact.findOne({contactId: _id}, function(err, data){
		if(!err){
			console.log(`Loaded Contacts ${data}`);
		}else{
			console.log(err);
		}
		callback(err, data);
	});
}

exports.updateContact = function (_contactId, updatableContactData, callback) {
	Contact.updateOne({ contactId: parseInt(_contactId) }, updatableContactData, function (err, data) {
		if (!err) {
			console.log(`Contact updated successfully`);
			if(data && data.ok == 1){
				data = {
					status: 200,
					info: 'Updated Successfully!'
				}
			}
		}
		
		callback(err, data);
	});

}