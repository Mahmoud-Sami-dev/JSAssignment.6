const connection = require("../config");

exports.createSale = (req, res) => {
  const { ProductID, QuantitySold } = req.body;

  const saleQuery = `
    INSERT INTO Sales (ProductID, QuantitySold, SaleDate)
    VALUES (?, ?, CURDATE())
  `;

  const updateStockQuery = `
    UPDATE Products
    SET StockQuantity = StockQuantity - ?
    WHERE ProductID = ?
  `;

  connection.execute(saleQuery, [ProductID, QuantitySold], err => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      connection.execute(updateStockQuery, [QuantitySold, ProductID]);
      res.json({ message: "Sale Recorded" });
    }
  });
};
