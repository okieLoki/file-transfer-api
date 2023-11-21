const File = require("../models/file");

const deleteFile = async () => {
  try {
    const filesToDelete = await File.find({
      createdAt: { $lt: new Date(Date.now() - 5 * 60 * 60 * 1000) },
    });

    filesToDelete.forEach(async (file) => {
      fs.unlinkSync(file.path);

      await file.remove();
    });

    console.log("Cron Job: Files older than 5 hours deleted.");
  } catch (error) {
    console.error("Cron Job Error:", error.message);
  }
};

module.exports = deleteFile;
