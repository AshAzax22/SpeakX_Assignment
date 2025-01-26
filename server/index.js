const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const app = express();

const Question = mongoose.model(
  "Question",
  new mongoose.Schema({}, { strict: false })
);

app.use(cors());
app.options("*", cors());

app.get("/questions", async (req, res) => {
  const { title, page, limit = 10 } = req.query;

  try {
    const questions = await Question.find({ title: new RegExp(title, "i") })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const count = await Question.countDocuments({
      title: new RegExp(title, "i"),
    });

    res.json({
      questions,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to database");
  } catch (err) {
    console.log("failed to connect to database");
    console.log(err.message);
  }
};

const port = process.env.PORT || 3000;

connectDb().then(() => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});
