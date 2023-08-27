//import { PrismaClient } from '@prisma/client'
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()





const getAll = async (req, res) => {
    try {
        const result = await prisma.post.findMany({
            orderBy: {
                createdAt: 'desc',
            }
        })
        console.log(result)
        res.status(200).json(result)
    }
    catch (err) {
        res.status(500).json(err)
    }

}

const create = async (req, res) => {
    try {
        const { id, label, content, authorId } = req.body
        const created = await prisma.post.create({

            data: {

                label: label,
                content: content,
                authorId: authorId || 1
            }
        })
        res.status(201).json({ message: 'Successfully creaded new post', created })
    }
    catch (err) {
        res.status(500).json({ message: 'Internal server error' })
    }
}

const remove = async (req, res) => {
    const id = (req.params.id)
    console.log(id)
    try {
        const deleted = await prisma.post.delete({
            where: {
                id: parseInt(id)
            }
        })
        res.status(200).json({ message: 'successfully deleted' })
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' })
    }

}

const findByLabel = async (req, res) => {
    try {
        const result = await prisma.post.findMany({
            orderBy: {
                createdAt: 'desc',
            },
            where: {
                label: req.query.label
            }
        })
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' })
    }
}



module.exports = { getAll, create, remove, findByLabel }
