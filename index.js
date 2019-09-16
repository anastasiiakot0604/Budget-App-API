const express = require("express");
const user = require("./routes/user");
const app = express();
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/budgetapp')
	.then(() => console.log('Connected to MongoDB...'))
	.catch(err => console.error('Could not connect to MongoDB...', err));

app.use(express.json());
app.use("./api/user", user);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
