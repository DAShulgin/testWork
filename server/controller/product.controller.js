const db = require('../db')

class ProductController {
    async getOneProduct(req, res) {
        const id = req.params.id
        const OneProduct = await db.query('SELECT *FROM product where id = $1',[id])
        res.json(OneProduct.rows[0])
    }
    async getProducts(req, res) {
        const Products = await db.query('SELECT *FROM product')
        res.json(Products.rows)
    }
    async createProduct(req, res) {
        const {dates, names, amount, distance} = req.body
        const newProduct = await db.query(`INSERT INTO product (dates, names, amount, distance) values ($1, $2, $3, $4) RETURNING *`,[dates, names, amount, distance])
        res.json(newProduct.rows[0])
    }
    async updateProduct(req, res) {
        const {dates, names, amount, distance, id} = req.body
        const updateProduct = await db.query(`UPDATE product set dates = $1, names = $2, amount = $3, distance = $4 where id = $5 RETURNING *`,
        [dates, names, amount, distance, id])
        res.json(updateProduct.rows[0])
    }
    async deleteProduct(req, res) {
        const id = req.params.id
        const deleteProduct = await db.query('DELETE FROM  product where id = $1',[id])
        res.json(deleteProduct.rows[0])
    }
}
module.exports = new ProductController();