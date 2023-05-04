const express = require('express');
const fs = require('fs');
const jimp = require('jimp');
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

    // Endpoint all meme
	router.route('/')
	.get(function(res) {
            fs.readdir('./memes', (err, files) => {
                if (err) throw err;
                res.json(files);
            } 
        )
	})
    
    // Endpoint create meme
    router.route('/create')
    .post(upload.single('meme'), (req, res, next) => {
        const file = req.file
        if (!file) {
          const error = new Error('Veuillez importer votre image')
          error.httpStatusCode = 400
          return next(error)
        } else {
            jimp.read(file.path) 
                .then((meme) => {
                    let textehaut = 'Texte du haut';
                    let textebas = 'Texte du bas';
                    let xh = jimp.HORIZONTAL_ALIGN_CENTER;
                    let yh = jimp.VERTICAL_ALIGN_TOP;
                    let xb = jimp.HORIZONTAL_ALIGN_CENTER;
                    let yb = jimp.VERTICAL_ALIGN_BOTTOM;

                    jimp.loadFont(jimp.FONT_SANS_32_WHITE).then(font => {
                        console.log('font loaded', font)
                        meme.print(font, yh, xh, textehaut)
                        meme.print(font, xb, yb, textebas)
                        meme.write(file.path)
                      })
                })
                .catch((err) => {
                    console.error(err);
                });
            res.send(file)
        }
    }) 

    // Endpoint delete meme
    router.route('/delete/:name')
	.delete(function(req, res) {
        fs.unlink('./memes/' + req.params.name, (err) => {
            if (err) throw err;
		    res.send(req.params.name+' a été supprimé.');
        });
	});

module.exports = router;