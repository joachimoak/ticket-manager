import { createComment } from "./comment-controller";
import { isAuthenticated } from "../../middleware/auth";

export default [
    {
        path: "/api/comments",
        method: "post",
        handler: [
            isAuthenticated,
            createComment
        ]
    }
];
