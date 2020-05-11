const express = require("express");
const { asyncHandler } = require("../utils");
const { checkJwt } = require("../auth");
const router = express.Router();
const db = require("../db/models");
const { Post } = db;
const upload = require('./uploadUtil')
const singleUpload = upload.single('image')

//returns all posts
router.get('/', asyncHandler(async (req, res) => {
    const posts = await Post.findAll();
    res.status(201).json({ posts });
}))

router.post('/image/upload', checkJwt, function (req, res) {
    singleUpload(req, res, function (err) {
        if (err) {
            return res.status(422).send({ errors: [{ title: 'File Upload Error', detail: err.message }] })
        }
        return res.json({ 'imageUrl': req.file.location })
    })
})

// router.post(
//     '/new',
//     checkJwt,
//     asyncHandler(async (req, res) => {
//         { categoryId, userId, title, description, imageUrl, public }
//     })
// );

module.exports = router;