const express = require("express");
const fs = require("fs");
const jimp = require("jimp");
const router = express.Router();
const multer = require("multer");
router.use(express.static('memes'));


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
      res.json(memes)
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
        // TODO: Resizer l'image
        meme.resize(1000, jimp.AUTO);
        jimp.loadFont(jimp.FONT_SANS_32_WHITE).then((font) => {
          meme.print(
            font,
            0,
            10,
            {
              text: textHaut,
              alignmentX: jimp.HORIZONTAL_ALIGN_CENTER,
              alignmentY: jimp.VERTICAL_ALIGN_TOP,
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
