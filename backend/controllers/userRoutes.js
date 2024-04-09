// userRoutes.js

import express from "express";
import { createUser, authenticateUser } from "../controllers/userController.js";
import { createAdmin } from "../controllers/adminController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Route to create a user
router.post("/", createUser);

// Route to authenticate a user and get token
router.post("/auth", authenticateUser);

// Route to create an admin account (requires admin privileges)
router.post("/admin", protect, createAdmin);

export default router;
