import { OpenApiDocument } from "express-openapi-validate"

export const Doc: OpenApiDocument = {
    openapi: "3.0.2",
    info: {
        title: "AutoQuest API",
        version: "1.0"
    },
    servers: [
        { url: "http://localhost:3000/" }
    ],
    paths: {
        "/fun/pog": {
            post: {
                parameters: [
                    {
                        name: "pogVal",
                        in: "query",
                        required: true,
                        schema: {
                            type: "integer"
                        }
                    },
                    {
                        name: "pogName",
                        in: "query",
                        required: true,
                        schema: {
                            type: "string"
                        }
                    },
                    {
                        name: "pogSecret",
                        in: "query",
                        required: false,
                        schema: {
                            type: "string"
                        }
                    },
                ],
                responses: {
                    200: {
                        description: "Nice"
                    },
                    404: {
                        description: "Not found"
                    }
                }
            }
        }
    }
}