// Including express package
const express = require('express');


// Initializing the app and create a port
const app = express();
var PORT = process.env.PORT || 8080;

// Set up body parsing, static, and route middleware
// "middleware" - code that runs before the final route call back.
// They are in the middle of the beginning of the route and the 
// callback function.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
// app.use("/", apiRoutes);
// app.use("/", htmlRoutes);
// Ding the same thing down here


// Grabbing apiROutes.js
require("./routes/apiRoutes")(app);
// Grabbing htmlRoutes
require("./routes/htmlRoutes")(app);
// start the server on the port

app.listen(PORT, () => console.log(`App listening on PORT: ${PORT}`));

