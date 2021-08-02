export default {
    components: {
        schemas: {
            id: {
                type: 'number',
                description: "An id of a data",
                example: 3
            },
            email: {
                type: 'string',
                description: "An email of an user",
                example: "koami.kpognon@yahoo.com"
            },
            Ticket: {
                type: 'object',
                properties: {
                    title: {
                        type: 'string',
                        description: "Ticket's title",
                        example: "Run the pipeline"
                    },
                    description: {
                        type: 'string',
                        description: "Ticket's description",
                        example: "This ticket is opened to work on CI/CD pipeline..."
                    },
                    status: {
                        type: 'string',
                        description: "Ticket's status",
                        enum: ["todo", "wip", "done"]
                    },
                    createDate: {
                        type: 'date',
                        description: "Ticket's creation date",
                        example: new Date()
                    },
                    updateDate: {
                        type: 'date',
                        description: "Ticket's update date",
                        example: new Date()
                    },
                    user: {
                        type: 'object',
                        properties: {
                            firstName: {
                                type: 'string',
                                description: "User's first name",
                                example: "Koami"
                            },
                            lastName: {
                                type: 'string',
                                description: "User's last name",
                                example: "Kpognon"
                            },
                            username: {
                                type: 'string',
                                description: "username",
                                example: "joachimoak"
                            },
                            email: {
                                type: 'string',
                                description: "User's email",
                                example: "koami.kpognon@yahoo.com"
                            }
                        }
                    },
                }
            },
            TicketInput: {
                type: 'object',
                properties: {
                    title: {
                        type: 'string',
                        description: "Ticket's title",
                        example: "Run the pipeline"
                    },
                    description: {
                        type: 'string',
                        description: "Ticket's description",
                        example: "This ticket is opened to work on CI/CD pipeline..."
                    },
                    status: {
                        type: 'string',
                        description: "Ticket's status",
                        enum: ["todo", "wip", "done"]
                    }
                }
            },
            CommentInput: {
                type: 'object',
                properties: {
                    content: {
                        type: 'string',
                        description: "Comment's content"
                    },
                    ticket: {
                        type: 'number',
                        description: "Id of the involved ticket",
                        example: 2
                    }
                }
            },
            Comment: {
                type: 'object',
                properties: {
                    content: {
                        type: 'string',
                        description: "Comment's content"
                    },
                    ticket: {
                        type: 'object',
                        properties: {
                            title: {
                                type: 'string',
                                description: "Ticket's title",
                                example: "Run the pipeline"
                            },
                            description: {
                                type: 'string',
                                description: "Ticket's description",
                                example: "This ticket is opened to work on CI/CD pipeline..."
                            },
                            status: {
                                type: 'string',
                                description: "Ticket's status",
                                enum: ["todo", "wip", "done"]
                            },
                            createDate: {
                                type: 'date',
                                description: "Ticket's creation date",
                                example: new Date()
                            },
                            updateDate: {
                                type: 'date',
                                description: "Ticket's update date",
                                example: new Date()
                            },

                        }
                    },
                    user: {
                        type: 'object',
                        properties: {
                            firstName: {
                                type: 'string',
                                description: "User's first name",
                                example: "Koami"
                            },
                            lastName: {
                                type: 'string',
                                description: "User's last name",
                                example: "Kpognon"
                            },
                            username: {
                                type: 'string',
                                description: "username",
                                example: "joachimoak"
                            },
                            email: {
                                type: 'string',
                                description: "User's email",
                                example: "koami.kpognon@yahoo.com"
                            }
                        }
                    },
                }
            },
            UserInput: {
                type: 'object',
                properties: {
                    firstName: {
                        type: 'string',
                        description: "User's first name",
                        example: "Koami"
                    },
                    lastName: {
                        type: 'string',
                        description: "User's last name",
                        example: "Kpognon"
                    },
                    username: {
                        type: 'string',
                        description: "username",
                        example: "joachimoak"
                    },
                    email: {
                        type: 'string',
                        description: "User's email",
                        example: "koami.kpognon@yahoo.com"
                    }
                }
            },
            User: {
                type: 'object',
                properties: {
                    firstName: {
                        type: 'string',
                        description: "User's first name",
                        example: "Koami"
                    },
                    lastName: {
                        type: 'string',
                        description: "User's last name",
                        example: "Kpognon"
                    },
                    username: {
                        type: 'string',
                        description: "username",
                        example: "joachimoak"
                    },
                    email: {
                        type: 'string',
                        description: "User's email",
                        example: "koami.kpognon@yahoo.com"
                    }
                }
            },
            Error: {
                type: 'object',
                properties: {
                    message: {
                        type: 'string'
                    },
                    internal_code: {
                        type: 'string'
                    }
                }
            }
        }
    }
}
