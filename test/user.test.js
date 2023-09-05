import supertest from "supertest"
import { web } from "../src/application/web"
import { prismaClient } from "../src/application/database"

describe('POST /api/users', function() {

    afterEach(async() => {
       await prismaClient.user.deleteMany({
            where: {
                username: 'zennn'
            }
        })
    })

    it('should can register new user', async() => {
        const data = await supertest(web)
        .post('/api/users')
        .send({
            username: 'zennn',
            password: 'rahasia',
            name: 'Baso Alif'
        })

        expect(result.status).toBe(200)
        expect(result.body.data.username).toBe('zennn')
        expect(result.body.data.name).toBe('Baso Alif')
        expect(result.body.data.password).toBe()
    })

    it('should reject if request is invalid', async() => {
        const result = await supertest(web)
        .post('/api/users')
        .send({
            username: '',
            password: '',
            name: ''
        })

        expect(result.status).toBe(400)
        expect(result.body.errors).toBeUndefined()
    })

},30000)