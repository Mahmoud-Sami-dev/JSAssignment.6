const connection = require("../config");

exports.createProduct = (req, res) => {
  const { ProductName, Price, StockQuantity, SupplierID } = req.body;

  connection.execute(
    "INSERT INTO Products (ProductName, Price, StockQuantity, SupplierID) VALUES (?,?,?,?)",
    [ProductName, Price, StockQuantity, SupplierID],
    err => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Product Added" });
    }
  );
};

exports.updateProductPrice = (req, res) => {
  const { id } = req.params;
  const { price } = req.body;

  connection.execute(
    "UPDATE Products SET Price = ? WHERE ProductID = ?",
    [price, id],
    err => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Price Updated" });
    }
  );
};

exports.deleteProduct = (req, res) => {
  const { id } = req.params;

  connection.execute(
    "DELETE FROM Products WHERE ProductID = ?",
    [id],
    err => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Product Deleted" });
    }
  );
};

exports.highestStock = (req, res) => {
  connection.execute(
    "SELECT ProductName, StockQuantity FROM Products ORDER BY StockQuantity DESC LIMIT 1",
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json(result);
    }
  );
};

exports.neverSold = (req, res) => {
  connection.execute(
   `SELECT p.ProductName FROM Products p LEFT JOIN Sales s ON p.ProductID = s.ProductID WHERE s.ProductID IS NULL`,
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json(result);
    }
  );
};
