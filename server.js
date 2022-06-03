const express = require("express");
const routes = require("./routes");
const path = require('path');
const cors = require("cors");
// const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create({});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({extended:false}));
// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors());

// app.use(routes);

app.use("/", routes);
// app.use("/trainers", routes);
// app.use("/shop", routes);
// app.use("/cart", routes);
// app.use("/profile", routes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))