import request from "supertest";
import express from "express";

const app = express();

describe("GET /api/users", () => {
    test("It should respond with an array of users", async () => {
        const response = await request(app).get("/api/users");
        expect(response.body.length).toBe(2);
        expect(response.body[0]).toHaveProperty("id");
        expect(response.body[0]).toHaveProperty("firstName");
        expect(response.body[0]).toHaveProperty("lastName");
        expect(response.body[0]).toHaveProperty("email");
        expect(response.statusCode).toBe(200);
    });
});
