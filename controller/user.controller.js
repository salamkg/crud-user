import db from '../db.js'

class UserController {

    // Create user
    async createUser(req, res) {
        const {firstName, lastName, age, isFree} = req.body
        const q = "INSERT INTO users SET ?"
        const newUser = await db.query(q, [req.body], (err, data) => {
            if (err) return res.json(err)
            return res.json(data)
        })
    }

    // Get all users with books
    async getUsers(req, res) {
        const users = await db.execute('SELECT * FROM users', (err, data) => {
            if (err) return res.json(err)
            return res.json(data)
        })
    }

    // Get user by Id
    async getOneUser(req, res) {
        const id = req.params.id
        const q = 'SELECT * FROM users WHERE id = ?'
        const users = await db.execute(q, [id], (err, data) => {
            if (err) return res.json(err)
            return res.json(data)
        })
    }

    // Get user by Id with books
    async getOneUserBook(req, res) {
        const id = req.params.id
        const q = `SELECT users.firstName, books.title FROM users JOIN books ON books.user_id = users.id WHERE users.id = ${id}`
        const users = await db.execute(q, [id], (err, data) => {
            if (err) return res.json(err)
            return res.json(data)
        })
    }

    // Update user
    async updateUser(req, res) {
        const id = req.params.id
        const q = 'UPDATE users SET ? WHERE id = ?'
        const updatedUser = db.query(q, [req.body, id], (err, data) => {
            if (err) return res.json(err)
            return res.json(data)
        })
    }

    // Remove user from db
    async deleteUser(req, res) {
        const id = req.params.id
        const q = 'DELETE FROM users WHERE id = ?'
        const user = await db.execute(q, [id], (err, data) => {
            if (err) return res.json(err)
            return res.json(data)
        })
    }
}

export default new UserController()