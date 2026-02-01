const connection = require("../config");

exports.createSale = (req, res) => {
  const { ProductID, QuantitySold, SaleDate } = req.body;

  connection.execute(
    "INSERT INTO Sales (ProductID, QuantitySold, SaleDate) VALUES (?,?,?)",
    [ProductID, QuantitySold, SaleDate],
    err => {
      if (err) return res.status(500).json(err);

      connection.execute(
        "UPDATE Products SET StockQuantity = StockQuantity - ? WHERE ProductID = ?",
        [QuantitySold, ProductID]
      );

      res.json({ message: "Sale Added" });
    }
  );
};

exports.totalSold = (req, res) => {
  connection.execute(
    `
    SELECT p.ProductName, COALESCE(SUM(s.QuantitySold),0) AS TotalSold
    FROM Products p
    LEFT JOIN Sales s ON p.ProductID = s.ProductID
    GROUP BY p.ProductName
    `,
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json(result);
    }
  );
};

exports.getAllSales = (req, res) => {
  connection.execute(
    `SELECT p.ProductName, s.QuantitySold, s.SaleDate FROM Sales s JOIN Products p ON s.ProductID = p.ProductID`,
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json(result);
    }
  );
};
