export default {
    delete: {
        tags: ['Comment operations'],
        description: "Deleting a comment",
        operationId: "deleteComment",
        security: [{
            jwt: {
                type: "http",
                scheme: "bearer",
                in: "header",
                bearerFormat: "JWT"
            }
        }],
        parameters: [
            {
                name: "id",
                in: "path",
                schema: {
                    $ref: "#/components/schemas/id"
                },
                required: true,
                description: "Deleting a done comment"
            }
        ],
        responses: {
            '200': {
                description: "Comment successfully removed"
            },
            '404': {
                description: "Comment not found"
            },
            '500': {
                description: "Server error"
            }
        }
    }
}
