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

const UpdateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;

    // finding the existing user
    const [existingUser] = await db.query(
      "SELECT * FROM users where id = ?",
      [id]
    );

    const updatedName = name || existingUser.name;
    const updatedEmail = email || existingUser.email;
    const updatedPassword =
      password || existingUser.password;

    const updatedResult = await db.query(
      "UPDATE users SET name = ?, email = ?, password = ? WHERE id = ? ",
      [updatedName, updatedEmail, updatedPassword, id]
    );

    res.status(201).json({
      message: "User Updated successfully",
      UpdatedUser: { id, name, email, password },
      UpdatedUserDetails: updatedResult,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const DeleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const [result] = await db.query(
      "DELETE FROM  users where id = ?",
      [id]
    );
    res.status(201).json({
      message: "User Deleted Successfully",
      result: result,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const DeleteAllUser = async (req, res) => {
  try {
    const [result] = await db.query("DELETE FROM users");
    res.status(201).json({
      message: "All users deleted",
      result: result,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  GetAllUsers,
  GetOneUser,
  CreateUser,
  UpdateUser,
  DeleteUser,
  DeleteAllUser,
};
