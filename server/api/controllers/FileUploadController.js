/**
 * FileUploadController
 *
 * @description :: Server-side logic for managing fileuploads
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	uploadFile : function(req, res){
		req.file('file').upload({
			// Directory path where you want to save...
			dirname : 'C:/Users/Mukul Softwap/Desktop/'
			
		},function(err, file){
			if(err) console.log(err);
			res.json({"status" : "file upload successfully" , "file" :file});
		});
	}
};
