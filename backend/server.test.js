const app = require('./server') // Link to your server file
const supertest = require('supertest')
const request = supertest(app)

test("POST /api/user/login", async () => {
	const user = {
		mail: "delete@gmail.com",
		password: "deletelater",
	}

	await supertest(app)
		.post("/api/user/login")
        .send(user)
		.expect(200)

    const wrong = {
        mail: "wrong user",
        password: "no password",
    }

    await supertest(app)
        .post("/api/user/login")
        .send(wrong)
        .expect(400)

})