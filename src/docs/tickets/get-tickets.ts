export default {
    get: {
        tags: ['Ticket operations'],
        description: "Get tickets",
        operationId: 'getTickets',
        parameters: [],
        responses: {
            '200': {
                description: "Tickets were obtained",
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/Ticket'
                        }
                    }
                }
            }
        }
    }
}
