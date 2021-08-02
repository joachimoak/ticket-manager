import { createComment, editComment, deleteComment } from "./comment-controller";
import { isAuthenticated } from "../../middleware/auth";

export default [
    {
        path: "/api/comments",
        method: "post",
        handler: [
            isAuthenticated,
            createComment
        ]
    },
    {
        path: "/api/comments/:id",
        method: "put",
        handler: [
            isAuthenticated,
            editComment
        ]
    },
    {
        path: "/api/comments/:id",
        method: "delete",
        handler: [
            isAuthenticated,
            deleteComment
        ]
    }
];
