export default {
    post: {
        tags: ['Comment operations'],
        description: "Create comment",
        operationId: "createComment",
        parameters: [],
        security: [{
            jwt: {
                type: "http",
                scheme: "bearer",
                in: "header",
                bearerFormat: "JWT"
            }
        }],
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/CommentInput'
                    }
                }
            }
        },
        responses: {
            '201': {
                description: "Comment was successfully created!"
            },
            '500': {
                description: 'Server error'
            }
        }
    }
}
