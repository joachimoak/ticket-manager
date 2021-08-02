import createComment from "./create-comment";
import updateComment from "./update-comment";
import deleteComment from "./delete-comment";

export default {
    paths: {
        '/api/comments': {
            ...createComment
        },
        '/api/comments/{id}': {
            ...updateComment,
            ...deleteComment
        }
    }
}
