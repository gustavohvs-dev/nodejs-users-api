let supertest = require("supertest")
let request = supertest("www.google.com")

describe("Grupo de teste 1", () => {

    test("Descrição de teste exemplo 1", () => {
        return request.get("/").then(res => expect(res.statusCode).toEqual(200));
    })

})