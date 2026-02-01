const express = require("express");
const app = express();
require("./config");
app.use(express.json());

app.use("/suppliers", require("./routes/suppliers.routes"));
app.use("/products", require("./routes/products.routes"));
app.use("/sales", require("./routes/sales.routes"));

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
