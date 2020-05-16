const express = require("express");
const { asyncHandler } = require("../utils");
const { checkJwt } = require("../auth");
const router = express.Router();
const db = require("../db/models");
const { Post, Vote, User } = db;
const upload = require('./uploadUtil')
const singleUpload = upload.single('file')
const multer = require('multer');
//fetch is not built into node js but is needed to fetch user data from auth0
const fetch = require('node-fetch')

//returns all posts and vote data
router.get('/', asyncHandler(async (req, res) => {
    const posts = await Post.findAll({
        include: [{
            model: Vote
        }],
        order: [['id', 'DESC']]
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
    const posts = await Post.findAll({ where: { userId }, include: Vote, order: [['id', 'DESC']] });
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
        const { title, description, imageUrl, public } = req.body;
        const userToken = req.headers['authorization'];
        const userRes = await fetch("https://dev-1232de9a.auth0.com/userinfo", {
            headers: {
                Authorization: `${userToken}`
            }
        })
        const userInfo = await userRes.json({ userRes })
        const user = await User.findOne({ where: { email: userInfo.email } })
        const userId = user.dataValues.id

        const newPost = await Post.create({ userId, title, description, imageUrl, public });
        res.status(201).json({ newPost })
    })
);

module.exports = router;