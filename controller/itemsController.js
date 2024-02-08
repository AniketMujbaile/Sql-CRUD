import mysql from 'mysql';

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'crud_example'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL connected');
});

export const createItem = (req, res) => {
  const { name, description } = req.body;
  const INSERT_ITEM_QUERY = 'INSERT INTO items (name, description) VALUES (?, ?)';
  db.query(INSERT_ITEM_QUERY, [name, description], (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json({ message: 'Item created successfully', id: result.insertId });
    }
  });
};

export const getAllItems = (req, res) => {
  const SELECT_ALL_ITEMS_QUERY = 'SELECT * FROM items';
  db.query(SELECT_ALL_ITEMS_QUERY, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
};

export const updateItem = (req, res) => {
  const { name, description } = req.body;
  const { id } = req.params;
  const UPDATE_ITEM_QUERY = 'UPDATE items SET name=?, description=? WHERE id=?';
  db.query(UPDATE_ITEM_QUERY, [name, description, id], (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ message: 'Item updated successfully' });
    }
  });
};

export const deleteItem = (req, res) => {
  const { id } = req.params;
  const DELETE_ITEM_QUERY = 'DELETE FROM items WHERE id=?';
  db.query(DELETE_ITEM_QUERY, [id], (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ message: 'Item deleted successfully' });
    }
  });
};
