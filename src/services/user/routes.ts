import { Router } from "express";

const router = Router();

import { createUser, deleteUser, editUser, getUserById, getUsers } from "./user-controller";

router.get("/api/users", getUsers);
router.post("/api/users", createUser);
router.get("/api/users/:id", getUserById);
router.put("/api/users/:id", editUser);
router.delete("/api/users/:id", deleteUser);

export default router;
