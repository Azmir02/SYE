exports.uploadImage = async (req, res) => {
  try {
  } catch (error) {
    res.status(404).json({
      messasge: error.messasge,
    });
  }
};
