export default {
    delete: {
        tags: ['User operations'],
        description: "Deleting a user",
        operationId: "deleteUser",
        parameters: [
            {
                name: "id",
                in: "path",
                schema: {
                    $ref: "#/components/schemas/id"
                },
                required: true,
                description: "Deleting a done user"
            }
        ],
        responses: {
            '200': {
                description: "User successfully removed"
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
