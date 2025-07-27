const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// ✅ Enable CORS and JSON parsing
app.use(cors());
app.use(express.json());

// ✅ Temporary in-memory data store
let returnData = [];

// ✅ GET /api/returns → returns all data
app.get("/api/returns", (req, res) => {
  res.json(returnData);
});

// ✅ POST /api/returns → receives product + score
app.post("/api/returns", (req, res) => {
  const { product, score } = req.body;

  if (!product || !score) {
    return res.status(400).json({ error: "Missing product or score" });
  }

  const carbonSaved = (parseInt(score) / 100) * 10;
  const suggestion =
    score >= 80
      ? "Great job! This product is highly sustainable."
      : score >= 50
      ? "Decent choice. Try aiming for higher eco scores!"
      : "Consider more eco-friendly products in the future.";

  const newReturn = {
    product,
    score,
    carbonSaved: parseFloat(carbonSaved.toFixed(2)),
    suggestion,
  };

  returnData.push(newReturn);
  res.json(newReturn);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
