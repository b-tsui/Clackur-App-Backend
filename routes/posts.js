const express = require("express");
const { asyncHandler } = require("../utils");
const { checkJwt } = require("../auth");
const router = express.Router();
const db = require("../db/models");
const { Post, Vote, User } = db;
const upload = require('./uploadUtil')
const singleUpload = upload.single('file')
const multer = require('multer');
const uploadMulter = multer();
//returns all posts and like data
router.get('/', asyncHandler(async (req, res) => {
    const posts = await Post.findAll({
        include: [{
            model: Vote
        }]
    });
    res.status(201).json({ posts });
}))
//returns single post @ specified id
router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id)
    const post = await Post.findByPk(id, { include: [{ model: Vote }, { model: User }] })
    res.status(201).json({ post })
}))

// returns all posts for a given user
router.get('/user/:userId', asyncHandler(async (req, res) => {
    const userId = parseInt(req.params.userId)
    const posts = await Post.findAll({ where: { userId }, incude: [{ model: Vote }] });
    res.status(201).json({ posts })
}))

//uploads image from form data to aws and returns an image url
router.post('/image/upload', checkJwt, function (req, res) {
    singleUpload(req, res, function (err) {
        if (err) {
            return res.status(422).send({ errors: [{ title: 'File Upload Error', detail: err.message }] })
        }
        return res.json({ 'imageUrl': req.file.location })
    })
})

router.post(
    '/new',
    checkJwt,
    asyncHandler(async (req, res) => {
        const { categoryId, userId, title, description, imageUrl, public } = req.body;
        const parsedCategoryId = await parseInt(categoryId)
        const parsedUserId = await parseInt(userId)
        const newPost = await Post.create({ categoryId: parsedCategoryId, userId: parsedUserId, title, description, imageUrl, public });
        res.status(201).json({ newPost })
    })
);

module.exports = router;