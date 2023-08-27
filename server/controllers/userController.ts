const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()


const create = async (req, res) => {
    try {
        const {  email, name, password } = req.body
        const created = await prisma.user.create({

            data: {

                email: email,
                name: name,
                password: password
            }
        })
        res.status(201).json({ message: 'Successfully creaded new post', created })
    }
    catch (err) {
        console.error(err)
        res.status(500).json({ message: 'Internal server error' })
    }
}

module.exports = { create }
