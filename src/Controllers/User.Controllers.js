const db = require("../Configs/DB.Config");

const GetAllUsers = async (req, res) => {
  try {
    const [result] = await db.query("SELECT * FROM users");
    console.log(result);
    res.status(200).json({
      message: "Viewing all the users",
      result: result,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const GetOneUser = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await db.query(
      `SELECT * FROM users where id= ? `,
      [id]
    );
    console.log(result);
    res.status(200).json({
      message: "user details",
      result: result,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const CreateUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const [result] = await db.query(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, password]
    );
    res.status(201).json({
      message: "User created",
      userId: result.insertId,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const UpdateUser = async (req, res) => {};

const DeleteUser = async (req, res) => {};

const DeleteAllUser = async (req, res) => {};

module.exports = {
  GetAllUsers,
  GetOneUser,
  CreateUser,
  UpdateUser,
  DeleteUser,
  DeleteAllUser,
};
