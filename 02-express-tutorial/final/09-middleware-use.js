const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");
//  req => middleware => res
// app.use(logger)  // je kono route e hit korlei .. ei middleware kaj korbe ..
//app.use("/", logger) // shob url e gele ei middlware kaj korbe ..
//app.use("/api", logger) // shudhu matro /api and er porer shob url e gele ei middleware kaj korbe
app.use([logger, authorize]); // multiple middleware use korar way // order maintain kore ..
// api/home/about/products
app.get("/", (req, res) => {
    res.send("Home");
});
app.get("/about", (req, res) => {
    res.send("About");
});
app.get("/api/products", (req, res) => {
    res.send("Products");
});
app.get("/api/items", (req, res) => {
    console.log(req.user);
    res.send("Items");
});

app.listen(5000, () => {
    console.log("Server is listening on port 5000....");
});
