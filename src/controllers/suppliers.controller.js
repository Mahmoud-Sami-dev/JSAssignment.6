const connection = require("../config");

exports.createSupplier = (req, res) => {
  const { SupplierName, ContactNumber } = req.body;

  const query = `
    INSERT INTO Suppliers (SupplierName, ContactNumber)
    VALUES (?, ?)
  `;

  connection.execute(query, [SupplierName, ContactNumber], err => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.json({ message: "Supplier Added" });
    }
  });
};
