// import { Router } from "express";
// import { isAuthenticated } from "src/middleware/auth";

// const router = Router();

import { createUser, deleteUser, editUser, getUserById, getUsers } from "./user-controller";

// router.get("/api/users", getUsers);
// router.post("/api/users", createUser);
// router.get("/api/users/:id", getUserById);
// router.put("/api/users/:id", editUser);
// router.delete("/api/users/:id", deleteUser);

// export default router;

export default [
    {
        path: "/api/users",
        method: "get",
        handler: [
            getUsers
        ]
    },
    {
        path: "/api/users",
        method: "post",
        handler: [
            createUser
        ]
    },
    {
        path: "/api/users/:id",
        method: "get",
        handler: [
            getUserById
        ]
    },
    {
        path: "/api/users/:id",
        method: "put",
        handler: [
            editUser
        ]
    },
    {
        path: "/api/users/:id",
        method: "delete",
        handler: [
            deleteUser
        ]
    }
];
