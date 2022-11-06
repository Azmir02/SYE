const cloudinary = require("cloudinary");
const { resolve } = require("dns/promises");
const fs = require("fs");
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

exports.uploadImage = async (req, res) => {
  try {
    const { path } = req.body;
    const files = Object.values(req.files).flat();
    const images = [];
    for (const file of files) {
      const url = await uploadToCloudinary(file, path);
      images.push(url);
      removeFile(file.tempFilePath);
    }
    res.json(images);
  } catch (error) {
    res.status(404).json({
      messasge: error.messasge,
    });
  }
};

// for getting images to frontend
exports.listimage = async (req, res) => {
  const { path, sort, max } = req.body;

  cloudinary.v2.search
    .expression(`${path}`)
    .sort_by("public_id", `${sort}`)
    .max_results(max)
    .execute()
    .then((result) => res.json(result))
    .catch((error) => {
      res.status(404).json({
        messasge: error.messasge,
      });
    });
};

const uploadToCloudinary = async (file, path) => {
  return new Promise((resolve) => {
    cloudinary.v2.uploader.upload(
      file.tempFilePath,
      {
        folder: path,
      },
      (err, res) => {
        if (err) {
          removeFile(file.tempFilePath);
          return res.status(400).json({
            messasge: "File upload failed",
          });
        }
        resolve({
          url: res.secure_url,
        });
      }
    );
  });
};

const removeFile = (path) => {
  fs.unlink(path, (err) => {
    if (err) throw err;
  });
};
