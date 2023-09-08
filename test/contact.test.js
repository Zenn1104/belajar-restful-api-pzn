import supertest from "supertest"
import {web} from "../src/application/web.js"
import { createTestUser, removeAllTestContacts, removeTestUser, createTestContact , getTestContact } from "./test-util.js"

describe('POST api/contacts', function () {
    
    beforeEach( async () => {
        await createTestUser()
    })

    afterEach( async () => {
        await removeAllTestContacts()
        await removeTestUser()
    })
    
    it('should can create new contact', async () => {
        const result = await supertest(web).post("/api/contacts").set('Authorization', 'test').send({
            first_name: "test",
            last_name: "test",
            email: "test@bag.com",
            phone: "082177573098"
        })

        expect(result.status).toBe(200),
        expect(result.body.data.id).toBeDefined()
        expect(result.body.data.first_name).toBe("test")
        expect(result.body.data.last_name).toBe("test")
        expect(result.body.data.email).toBe("test@bag.com")
        expect(result.body.data.phone).toBe("082177573098")
    })

    it('should reject if  request is not valid', async () => {
        const result = await supertest(web).post("/api/contacts").set('Authorization', 'test').send({
            first_name: "",
            last_name: "test",
            email: "test@bag.com",
            phone: "082177573098098777777777"
        })

        expect(result.status).toBe(400),
        expect(result.body.errors).toBeDefined()
    })

})

describe('GET /api/contacts/:contactId', function () {
    
    beforeEach( async () => {
        await createTestUser()
        await createTestContact()
    })

    afterEach( async () => {
        await removeAllTestContacts()
        await removeTestUser()
    })

    it('should can get contact', async () => {
        const testContact = await getTestContact()
        const result = await supertest(web)
                       .get("api/contacts/" + testContact.id)
                       .set('Authorization','test')

        expect(result.status).toBe(200)
        expect(result.body.data.id).toBe(testContact.id)
        expect(result.body.data.first_name).toBe(testContact.first_name)
        expect(result.body.data.last_name).toBe(testContact.last_name)
        expect(result.body.data.email).toBe(testContact.email)
        expect(result.body.data.phone).toBe(testContact.phone)
    })

    it('should return 404 if contact id is not found', async () => {
        const testContact = await getTestContact()
        const result = await supertest(web)
                       .get("api/contacts/" + (testContact + 1))
                       .set('Authorization','test')

        expect(result.status).toBe(404)
    })
})

describe('PUT /api/contacts/:contactId', function () {
    
    beforeEach( async () => {
        await createTestUser()
        await createTestContact()
    })

    afterEach( async () => {
        await removeAllTestContacts()
        await removeTestUser()
    })

    it('should can update existing contact', async () => {
        const testContact = await getTestContact()

        const result = await supertest(web)
                        .put('/api/contacts/' + testContact.id)
                        .set('Authorization', 'test')
                        .send({
                            first_name: "baso",
                            last_name: "alif",
                            email: "alif@bag.com",
                            phone: "0829333333"
                        })

        expect(result.status).toBe(200)
        expect(result.data.id).toBe(testContact.id)
        expect(result.body.data.first_name).toBe("baso")
        expect(result.body.data.last_name).toBe("alif")
        expect(result.body.data.email).toBe("alif@bag.com")
        expect(result.body.data.phone).toBe("0829333333")
    })  

    it('should reject if request is invalid', async () => {
        const testContact = await getTestContact()

        const result = await supertest(web)
                        .put('/api/contacts/' + testContact.id)
                        .set('Authorization', 'test')
                        .send({
                            first_name: "",
                            last_name: "",
                            email: "alif",
                            phone: ""
                        })

        expect(result.status).toBe(400)
    })

    it('should reject if contact is not found', async () => {
        const testContact = await getTestContact()

        const result = await supertest(web)
                        .put('/api/contacts/' + (testContact.id + 1))
                        .set('Authorization', 'test')
                        .send({
                            first_name: "baso",
                            last_name: "alif",
                            email: "alif@bag.com",
                            phone: "0829333333"
                        })

        expect(result.status).toBe(404)
    })
})


