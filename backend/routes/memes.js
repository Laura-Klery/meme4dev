const express = require('express');
const fs = require('fs');
const router = express.Router();
const multer  = require('multer')

// Stockage image
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, './memes')
    },
    filename: function (req, file, cb) {
    const uniqueSuffix = Date.now()
    const name = file.originalname.split('.')
    const extension = file.originalname.split('.')
    cb(null, name[0] + '-' + uniqueSuffix + '.' + extension[1])
    }
})
const upload = multer({ storage: storage  })

	router.route('/')
	.get(function(req, res) {
            fs.readdir('./memes', (err, files) => {
                if (err) throw err;
                res.json(files);
            } 
        )
	})
    
    router.route('/create')
    .post(upload.single('meme'), (req, res, next) => {
        const file = req.file
        if (!file) {
          const error = new Error('Please upload a file')
          error.httpStatusCode = 400
          return next(error)
        }
            res.send(file)
    }) 


    router.route('/delete/:name')
	.delete(function(req, res) {
        fs.unlink('./memes/'+req.params.name, (err) => {
            if (err) throw err;
		    res.send(req.params.name+' a été supprimé.');
        });
	});

module.exports = router;