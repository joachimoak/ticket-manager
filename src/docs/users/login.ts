export default {
    post: {
        tags: ['User operations'],
        description: "Create user",
        operationId: "createUser",
        parameters: [],
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/email'
                    }
                }
            }
        },
        responses: {
            '201': {
                description: "User was successfully signed in!"
            },
            '401': {
                description: "Login failed! Bad authentication credentials."
            },
            '500': {
                description: 'Server error'
            }
        }
    }
}
