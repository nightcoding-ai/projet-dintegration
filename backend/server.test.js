const app = require('./server') // Link to your server file
const supertest = require('supertest')
const request = supertest(app)
const mongoose = require('mongoose')
require('dotenv').config()
const URI = process.env.MONGODB_URL

 
describe("requests", () => {  
    let connection;
    beforeAll(async () => {
        connection = await mongoose.connect(URI, {
            useNewUrlParser: true,
        })
    });
    it("POST /api/user/login", async () => {
        const user = {
            mail: "delete@gmail.com",
            password: "deletelater",
        }
    
        await request
            .post("/api/user/login")
            .send(user)
            .expect(200)
    
        const wrong = {
            mail: "wrong user",
            password: "no password",
        }
    
        await request
            .post("/api/user/login")
            .send(wrong)
            .expect(400)
    });
    afterAll(async () => {
        await mongoose.disconnect();
    });
})