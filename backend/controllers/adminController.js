// adminController.js

import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

// Controller function to create an admin account
const createAdmin = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  // Check if the requesting user is authorized to create admin accounts
  if (!req.user.isAdmin) {
    res.status(403).json({ message: "Unauthorized to create admin accounts" });
    return;
  }

  try {
    // Check if username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      res.status(400).json({ message: "Username already exists" });
      return;
    }

    // Create the admin account
    const admin = new User({
      username,
      password,
      isAdmin: true,
    });

    // Save the admin account to the database
    await admin.save();

    res.status(201).json({ message: "Admin account created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

export { createAdmin };
