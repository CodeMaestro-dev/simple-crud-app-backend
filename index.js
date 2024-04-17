const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/models.js");
const productRoutes = require("./routes/product.route.js"); 
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// routes
app.use("/api/products", productRoutes);


app.get("/", (req, res) => {
  // Default Page
  res.send("Hello from Node API Server");
})

mongoose
  .connect(
    "mongodb+srv://codemaestro101:BV0pOsf3p0cpWYF4@backenddb.s09kgdl.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log("App running on port 3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
