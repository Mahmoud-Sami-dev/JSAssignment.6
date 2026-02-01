const connection = require("../config");

exports.createProduct = (req, res) => {
  const { ProductName, Price, StockQuantity, SupplierID } = req.body;

  const query = `
    INSERT INTO Products (ProductName, Price, StockQuantity, SupplierID)
    VALUES (?, ?, ?, ?)
  `;

  connection.execute(
    query,
    [ProductName, Price, StockQuantity, SupplierID],
    err => {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.json({ message: "Product Added" });
      }
    }
  );
};
