const connection = require("../config");

exports.createSupplier = (req, res) => {
  const { SupplierName, ContactNumber } = req.body;

  connection.execute(
    "INSERT INTO Suppliers (SupplierName, ContactNumber) VALUES (?,?)", 
    [SupplierName, ContactNumber],
    err => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Supplier Added" });
    }
  );
};

exports.getSuppliersByName = (req, res) => {
  connection.execute(
    "SELECT * FROM Suppliers WHERE SupplierName LIKE 'F%'",
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json(result);
    }
  );
};
