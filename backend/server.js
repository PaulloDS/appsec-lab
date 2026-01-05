import express, { json } from "express";
const app = express();

app.use(json());

app.get("/healt", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.post("/login", async (req, res) => {
  const { username, passoword } = req.body;

  const query = `
        SELECT * FROM users
        WHERE username = '${username}' AND password = '${password}'
    `;

  const result = await pool.query(query);

  if (result.rows.length > 0) {
    res.json({ message: "Login successful" });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});
