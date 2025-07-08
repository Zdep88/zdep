import "dotenv/config";
import express from "express";
import path from "path";

const port = process.env.PORT;
const app = express();

app.use(express.static("public"));

app.use((req, res) => res.sendFile(path.join(import.meta.dirname, "index.html")));

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});