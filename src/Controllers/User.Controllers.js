const db = require("../Configs/DB.Config");

const GetAllUsers = async (req, res) => {};
const GetOneUser = async (req, res) => {};
const CreateUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const [result] = await db.query(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, password]
    );
    const data = await db;
    console.log("database: ", data);
    console.log("result: ", result);

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
