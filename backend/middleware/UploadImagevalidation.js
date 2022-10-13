const fs = require("fs");

module.exports = async (req, res, next) => {
  try {
    if (!req.files || Object.values(req.files).flat().length === 0) {
      return res.status(404).json({
        messasge: "No file selected",
      });
    }
    const file = Object.values(req.files).flat();
    file.forEach((files) => {
      if (
        files.mimetype !== "image/jpeg" &&
        files.mimetype !== "image/png" &&
        files.mimetype !== "image/webp" &&
        files.mimetype !== "image/gif"
      ) {
        removeFile(files.tempFilePath);
        return res.status(404).json({
          messasge: "Unsupported File",
        });
      }
      if (files.size > 1024 * 1024 * 10) {
        removeFile(files.tempFilePath);
        return res.status(404).json({
          messasge: "File is too large",
        });
      }
    });
    next();
  } catch (error) {
    res.status(404).json({
      messasge: error.messasge,
    });
  }
};

const removeFile = (path) => {
  fs.unlink(path, (err) => {
    if (err) throw err;
  });
};
