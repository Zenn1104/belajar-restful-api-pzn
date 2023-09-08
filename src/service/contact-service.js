import { prismaClient } from "../application/database.js"
import { createContactValidation, getContactValidation } from "../validation/contact-validation"
import { validate } from "../validation/validation.js"
import { ResponseError } from "../error/response-error.js"

const create = async (user, request) => {
    const contact = validate(createContactValidation, request)
    contact.username = user.username

    return prismaClient.user.create({
        data: contact,
        select: {
            id: true,
            first_name: true,
            last_name: true,
            email: true,
            phone: true
        }
    })
}

const get = async (user, contactId) => {
    contactId = validate(getContactValidation, contactId)

    const contact = await prismaClient.contact.findFirst({
        where: {
            username: user.username,
            id: contactId
        },
        select: {
            id: true,
            first_name: true,
            last_name: true,
            email: true,
            phone: true
        }
    })

    if(!contact) {
        throw new ResponseError(404, "Contact is not found")
    }

    return contact
}

export default {
    create,
    get
}