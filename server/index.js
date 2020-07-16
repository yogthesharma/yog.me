const express = require(`express`);
const cors = require(`cors`);

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5001;

app.get("/resume", async (req, res) => {
  try {
    await res.download("./assets/myresume.pdf");
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.listen(port, () => {
  console.log(`Server Started On Port ${port}`);
});
