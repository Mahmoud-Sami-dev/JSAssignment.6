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
//https://nassefm807-7801898.postman.co/workspace/Mahmoud-Sami-Nassef's-Workspace~2c8f71e3-56cd-43ad-874e-f48b10c4129c/request/51125510-f8313591-da97-496d-b46e-af85e37795e0?action=share&creator=51125510&ctx=documentation&active-environment=51125510-a6a01ba8-8aeb-4d6b-ac3f-555686cd98a7