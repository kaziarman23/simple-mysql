const express = require("express");
const router = express.Router();
const {
  GetAllUsers,
  GetOneUser,
  CreateUser,
  UpdateUser,
  DeleteUser,
  DeleteAllUser,
} = require("../Controllers/User.Controllers");

router.get("/", GetAllUsers);

router.get("/:id", GetOneUser);

router.post("/", CreateUser);

router.patch("/:id", UpdateUser);

router.delete("/:id", DeleteUser);

router.delete("/", DeleteAllUser);

module.exports = router;
