const express = require("express");
const fs = require("fs");
const jimp = require("jimp");
const fpath = require('path')
const router = express.Router();
const multer = require("multer");
router.use(express.static('memes'))


// Stockage image
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./memes");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    const name = file.originalname.split(".");
    const extension = file.originalname.split(".");
    cb(null, name[0] + "-" + uniqueSuffix + "." + extension[1]);
  },
});
const upload = multer({ storage: storage });

// Endpoint all meme
router.route("/").get(function (req, res) {
  fs.readdir("./memes", (err, memes) => {
    if (err) throw err;
    memes.sort((a, b) => {
      const memeA = fs.statSync("./memes/" + a);
      const memeB = fs.statSync("./memes/" + b);
      return memeB.ctimeMs - memeA.ctimeMs;
    });
    res.json(memes);
  });
});


// Endpoint create meme
router.route("/create").post(upload.single("meme"), (req, res, next) => {
  const file = req.file;
  const textHaut = req.body.topText;
  const textBas = req.body.bottomText;
  if (!file) {
    const error = new Error("Veuillez importer votre image");
    error.httpStatusCode = 400;
    return next(error);
  } else {
    jimp
      .read(file.path)
      .then((meme) => {
        // let pathFont = fpath.resolve(__dirname,'polices/font.fnt')
        meme.resize(500, jimp.AUTO);
        meme.contrast(-0.5);
        jimp.loadFont(jimp.FONT_SANS_32_WHITE).then((font) => {
          meme.print(
            font,
            0,
            10,
            {
              text: textHaut,
              alignmentX: jimp.HORIZONTAL_ALIGN_CENTER,
              alignmentY: jimp.VERTICAL_ALIGN_TOP,
              stroke: '#000000',      // Couleur des contours (noir)
              strokeThickness: 2     // Épaisseur des contours
            },
            meme.bitmap.width,
            meme.bitmap.height
          );
          meme.print(
            font,
            0,
            -10,
            {
              text: textBas,
              alignmentX: jimp.HORIZONTAL_ALIGN_CENTER,
              alignmentY: jimp.VERTICAL_ALIGN_BOTTOM,
              stroke: '#000000',      // Couleur des contours (noir)
              strokeThickness: 2     // Épaisseur des contours
            },
            meme.bitmap.width,
            meme.bitmap.height
          );

          meme.write(file.path);
        });
      })
      .catch((err) => {
        console.error(err);
      });
    res.send(file);
  }
});

// Endpoint delete meme
router.route("/delete/:name").delete(function (req, res) {
  fs.unlink("./memes/" + req.params.name, (err) => {
    if (err) throw err;
    res.send(req.params.name + " a été supprimé.");
  });
});

module.exports = router;
