export default {
    put: {
        tags: ['User operations'],
        description: "Update user",
        operationId: "updateUser",
        parameters: [
            {
                name: "id",
                in: "path",
                schema: {
                    $ref: "#/components/schemas/id"
                },
                required: true,
                description: "Id of user to be updated"
            }
        ],
        responses: {

            '200': {
                description: "USER successfully modified"
            },
            '404': {
                description: "User not found"
            },
            '500': {
                description: "Server error"
            }

        }
    }
}
