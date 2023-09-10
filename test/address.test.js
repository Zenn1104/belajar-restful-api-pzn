import supertest from "supertest"
import {web} from "../src/application/web.js"
import { createTestUser, removeAllTestContacts, removeTestUser, removeAllTestAddresses ,createTestContact , getTestContact, createManyTestContact } from "./test-util.js"


describe('POST /api/contacts/:contactId/addresses', function () {
    beforeEach( async () => {
        await createTestUser()
        await createTestContact()
    })

    afterEach( async () => {
        await removeAllTestAddresses()
        await removeAllTestContacts()
        await removeTestUser()
    })

    it('should can create new address', async () => {
        const testContact = await getTestContact()

        const result = await supertest(web).post('/api/contacts/' + testContact.id + '/addresses').set('Authorization', 'test').send({
            street: "jalan test",
            city: "kota test",
            province: "provinsi test",
            country: "indonesia",
            postal_code: "234234"
        })

        expect(result.status).toBe(200)
        expect(result.body.data.id).toBeDefined()
        expect(result.body.data.street).toBe("jalan test")
        expect(result.body.data.city).toBe("kota test")
        expect(result.body.data.province).toBe("provinsi test")
        expect(result.body.data.country).toBe("indonesia")
        expect(result.body.data.postal_code).toBe("234234")
    })

    it('should reject if address request is invalid', async () => {
        const testContact = await getTestContact()

        const result = await supertest(web)
        .post('/api/contacts/' + testContact.id + '/addresses').
        set('Authorization', 'test')
        .send({
            street: "jalan test",
            city: "kota test",
            province: "provinsi test",
            country: "",
            postal_code: ""
        })

        expect(result.status).toBe(400)
    })

    it('should reject if contact is was not found', async () => {
        const testContact = await getTestContact()

        const result = await supertest(web)
        .post('/api/contacts/' + (testContact.id + 1) + '/addresses')
        .set('Authorization', 'test')
        .send({
            street: "jalan test",
            city: "kota test",
            province: "provinsi test",
            country: "",
            postal_code: ""
        })

        expect(result.status).toBe(404)
    })
})