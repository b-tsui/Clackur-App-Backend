const express = require("express");
const { asyncHandler } = require("../utils");
const { checkJwt } = require("../auth");
const router = express.Router();
const db = require("../db/models");
const { Post, User, Comment } = db;
//fetch is not built into node js but is needed to fetch user data from auth0
const fetch = require('node-fetch')

router.get('/posts/:postId/comments', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.postId)
    const comments = await Comment.findAll({ where: { id } })
    res.status(201).json({ comments })
}))

router.post('/posts/:postId/comments/new', checkJwt, asyncHandler(async (req, res) => {
    const userToken = req.headers['authorization'];
    const postId = parseInt(req.params.postId)
    const { comment } = req.body

    //gets user info from auth0 token by making a request on auth0 api
    const userRes = await fetch("https://dev-1232de9a.auth0.com/userinfo", {
        headers: {
            Authorization: `${userToken}`
        }
    })
    /*userInfo sample: 
        {
        "userInfo": {
            "sub": "auth0|<<auth0id>>",
            "nickname": "<<users nickname>>",
            "name": "<<users name>>",
            "picture": "<<profile photo url>>",
            "updated_at": "2020-05-16T05:19:34.025Z",
            "email": "<<user email>>",
            "email_verified": <<boolean>>
        }
    }*/
    const userInfo = await userRes.json();
    //gets user from our own user table from Auth0 userInfo
    const user = await User.findOne({ where: { email: userInfo.email } })
    const userId = user.dataValues.id
    const newComment = await Comment.create({
        postId,
        userId,
        comment
    })
    res.status(201).json({ newComment })
}))

module.exports = router;