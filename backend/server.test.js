const app = require('./server') // Link to your server file
const supertest = require('supertest')
const request = supertest(app)
const mongoose = require('mongoose')
require('dotenv').config()
const URI = process.env.MONGODB_URL
const UserModel = require('./models/User');




//  Tests de Simon Périquet 

// GET : Récupérer la liste des produits
/*
describe("Liste des produits", () => {  
    let connection;
    beforeAll(async () => {
        connection = await mongoose.connect(URI, {
            useNewUrlParser: true,
        })
    });
    it("GET /api/products/", async () => {
        
    
        await request
            .get("/api/products/")
            
            .expect(200)
    
        
    
        
    });
    afterAll(async () => {
        await mongoose.disconnect();
    });
})

// POST : Ajouter un produit

describe("Ajouter un produit", () => {  
    let connection;
    beforeAll(async () => {
        connection = await mongoose.connect(URI, {
            useNewUrlParser: true,
        })
    });
    it("POST /api/products/", async () => {
        const product = {
            brand: "Jest",
            name: "Jest Bouteille",
            description: "Produit rajouté avec jest",
            stock: 9,
            price: 99,
            image : "https://pizzeriavaleria.com/wp-content/uploads/2020/08/coca-png.png"
        }
    
        await request
            .post("/api/products/")
            .send(product)
            .expect(200)

        const wrong = {
            brand: "Wrong Brand",
            name: "Wrong name",
            description: "Wrong Description",
            stock: null,
            price: null,
            image : "Wrong URL"
        }
    
        await request
            .post("/api/products/")
            .send(wrong)
            .expect(500)
        
    
        
    });
    afterAll(async () => {
        await mongoose.disconnect();
    });
})

// PUT : Modifier un produit
/*
describe("Modifier un produit", () => {  
    let connection;
    beforeAll(async () => {
        connection = await mongoose.connect(URI, {
            useNewUrlParser: true,
        })
    });
    it("PUT /api/products/61c1cb7de15a5a6aec75bf6c", async () => {
        const product = {
            brand: "Coca-Cola",
            name: "NOM CHANGE PAR TEST",
            description: "Bouteille de Coca-Cola 49 Cl, avec sucre",
            stock: 3,
            price: 5,
            image : "https://pizzeriavaleria.com/wp-content/uploads/2020/08/coca-png.png"
        }
    
        await request
            .put("/api/products/61c1cb7de15a5a6aec75bf6c")
            .send(product)
            .expect(200)

        
    
     
        
    
        
    });
    afterAll(async () => {
        await mongoose.disconnect();
    });
})
*/

// DELETE : Retirer un produit 
/*
describe("Retirer un produit", () => {  
    let connection;
    beforeAll(async () => {
        connection = await mongoose.connect(URI, {
            useNewUrlParser: true,
        })
    });
    it("DELETE /api/products/61c1dd26158dd36c47e15aa8", async () => {
        
    
        await request
            .delete("/api/products/61c1dd26158dd36c47e15aa8")
            
            .expect(200)

        
    
        
    
        
    });
    afterAll(async () => {
        await mongoose.disconnect();
    });
})


// POST : Inscription d'un nouvel utilisateur 
/*
describe("Inscription", () => {  
    let connection;
    beforeAll(async () => {
        connection = await mongoose.connect(URI, {
            useNewUrlParser: true,
        })
    });
    it("POST /api/user/register", async () => {
        const newUser = {
            name:"jestUser",
            mail: "jestInscription@bangoo.com",
            password: "Jest123",
        }
    
        await request
            .post("/api/user/register")
            .send(newUser)
            .expect(200)

        await UserModel.findOneAndDelete({mail : newUser.mail})
    
        
    });
    afterAll(async () => {
        await mongoose.disconnect();
    });
})

// GET : Récupérer la liste des utilisateurs 
/*
describe("Liste des users", () => {  
    let connection;
    beforeAll(async () => {
        connection = await mongoose.connect(URI, {
            useNewUrlParser: true,
        })
    });
    it("GET /api/user/get_all_users", async () => {
        
    
        await request
            .get("/api/user/get_all_users")
            .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzFjZTc0ZjJlYTdiZDNlMGRiOTM2OCIsImlhdCI6MTY0MDA5MTM0NywiZXhwIjoxNjQwMTc3NzQ3fQ.Ju8KKUNXvCEBK2FLRikxp-3t2ybBd0Ot5jqHHempM_I')
            .expect(200);
    
        
    
        
    });
    afterAll(async () => {
        await mongoose.disconnect();
    });
})
/*
// POST : Ajouter une offre

describe("Ajouter une offre", () => {  
    let connection;
    beforeAll(async () => {
        connection = await mongoose.connect(URI, {
            useNewUrlParser: true,
        })
    });
    it("POST /api/offers/", async () => {
        const offer = {
          name:"Nouvelle Offre via jest",
          description: "Offre de jest test",
          price : 1000
        }
    
        await request
            .post("/api/offers/")
            .send(offer)
            .set('Authorisation', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzFiYWM3M2RmOTBmM2NlODI1ZTIxOCIsImlhdCI6MTY0MDA5NTExMCwiZXhwIjoxNjQwMTgxNTEwfQ.Vlk-EzvbAsXFQ8tjlfYh0r_G885eVC99TAuW2_xdSoI')
            .expect(200)

        
    });
    afterAll(async () => {
        await mongoose.disconnect();
    });
})

// DELETE : Supprimer une offre

describe("Retirer une offre", () => {  
    let connection;
    beforeAll(async () => {
        connection = await mongoose.connect(URI, {
            useNewUrlParser: true,
        })
    });
    it("DELETE /api/offers/61c1bb7ac779b22b5840d47d", async () => {
        
    
        await request
            .delete("/api/offers/61c1bb7ac779b22b5840d47d")
            .set('Authorisation', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzFiYWM3M2RmOTBmM2NlODI1ZTIxOCIsImlhdCI6MTY0MDA5NTExMCwiZXhwIjoxNjQwMTgxNTEwfQ.Vlk-EzvbAsXFQ8tjlfYh0r_G885eVC99TAuW2_xdSoI')
            
            .expect(200)

        
    
        
    
        
    });
    afterAll(async () => {
        await mongoose.disconnect();
    });
})
*/
// PUT : Modifier une offre 
/*
describe("Modifier une offre", () => {  
    let connection;
    beforeAll(async () => {
        connection = await mongoose.connect(URI, {
            useNewUrlParser: true,
        })
    });
    it("PUT /api/products/61c1c15b4a7d9432cec358a5", async () => {
        const offer = {
            name : "Jest modication",
            description : "Offre modifie en testing",
            price : 500
        }
    
        await request
            .put("/api/offers/61c1c15b4a7d9432cec358a5")
            .send(product)
            .expect(200)

        
    
     
        
    
        
    });
    afterAll(async () => {
        await mongoose.disconnect();
    });
})


// GET : Liste de toutes les offres 

describe("Liste des offres", () => {  
    let connection;
    beforeAll(async () => {
        connection = await mongoose.connect(URI, {
            useNewUrlParser: true,
        })
    });
    it("GET /api/offers/", async () => {
        
    
        await request
            .get("/api/offers/")
            .set('Authorisation', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzFiYWM3M2RmOTBmM2NlODI1ZTIxOCIsImlhdCI6MTY0MDA5NTExMCwiZXhwIjoxNjQwMTgxNTEwfQ.Vlk-EzvbAsXFQ8tjlfYh0r_G885eVC99TAuW2_xdSoI')
            .expect(200)
    
        
    
        
    });
    afterAll(async () => {
        await mongoose.disconnect();
    });
})

// DELETE : Suppression de l'utilisateur connecté 

*/


// Test de Christopher Fauconnier 

// POST : Connexion de l'utilisateur
/*
describe("Se connecter", () => {  
    let connection;
    beforeAll(async () => {
        connection = await mongoose.connect(URI, {
            useNewUrlParser: true,
        })
    });
    it("POST /api/user/login", async () => {
        const user = {
            mail: "jestInscription@bangoo.com",
            password: "Jest123",
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
*/