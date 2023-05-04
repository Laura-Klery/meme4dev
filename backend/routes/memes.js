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


                    jimp.loadFont(jimp.FONT_SANS_32_WHITE).then(font => {
                        console.log('font loaded', font);
                        meme.print(font, 0, 0, {
                        text: textehaut,
                        alignmentX: jimp.HORIZONTAL_ALIGN_CENTER,
                        alignmentY: jimp.VERTICAL_ALIGN_TOP
                      }, meme.bitmap.width, meme.bitmap.height);
                      meme.print(font, 0, 0, {
                        text: textebas,
                        alignmentX: jimp.HORIZONTAL_ALIGN_CENTER,
                        alignmentY: jimp.VERTICAL_ALIGN_BOTTOM
                      }, meme.bitmap.width, meme.bitmap.height);

                        meme.write(file.path);
                      });
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