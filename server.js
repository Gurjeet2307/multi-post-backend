const express = require("express");
const app = express();
const cors = require("cors");
const multer = require("multer");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post("/upload/:platform", upload.single("media"), async (req, res) => {
  const { platform } = req.params;
  const { caption, token } = req.body;

  console.log("Platform:", platform);
  console.log("Caption:", caption);

  res.json({
    success: true,
    message: `${platform} upload received`,
  });
});

app.get("/", (req, res) => {
  res.send("MultiPost Pro Backend Running");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running");
});
