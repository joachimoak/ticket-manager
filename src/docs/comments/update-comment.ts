export default {
    put: {
        tags: ['Comment operations'],
        description: "Update comment",
        operationId: "updateComment",
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
                description: "Id of comment to be updated"
            }
        ],
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/CommentInputEdit'
                    }
                }
            }
        },
        responses: {

            '200': {
                description: "TICKET successfully modified"
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
