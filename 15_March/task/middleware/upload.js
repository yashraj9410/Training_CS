// using multer as a middleware 

const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null,"uploads")
    },
    filename: (req,file,cb) => {
        cb(null, Date.now() + '-' + file.originalname );
    }
});
const imageFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image")) {
      cb(null, true);
    } else {
      cb("Please upload only images.", false);
    }
  };
const  upload = multer({ storage: storage , fileFilter:imageFilter });

module.exports = upload;

