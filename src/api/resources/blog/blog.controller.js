const Blog  = require('./blog.model')

const getAll = async (req, res) => {
    const {user_id} = req.query
    const blogs = await Blog.find({_user: user_id}).cache({key: user_id})
    return res.json({ blogs })
}

const create = async (req, res) => {
    const { title, content } = req.body
    const { user_id } = req.query
    await Blog.create({ title, content, _user: user_id })
    res.json({ message: 'created successfully' })
}

module.exports = {
    getAll,
    create,
}
