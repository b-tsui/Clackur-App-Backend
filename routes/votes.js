const express = require("express");
const { asyncHandler } = require("../utils");
const { checkJwt } = require("../auth");
const router = express.Router();
const db = require("../db/models");
const { Vote } = db;

//gets all votes for a given post
router.get('/posts/:id/votes', asyncHandler(async (req, res) => {
    const postId = parseInt(req.params.id, 10);
    const votes = await Vote.findAll({ where: { postId } });
    res.status(201).json({ votes });
}))

//creates a new upvote if user votes for first time on post
//if post is already upvoted, resets the vote otherwise updates to upvote
router.patch('/posts/:id/upvote', checkJwt, asyncHandler(async (req, res) => {
    const postId = parseInt(req.params.id, 10);
    const { userId } = req.body;
    const voteRes = await Vote.findOne({
        where: {
            postId,
            userId
        }
    });
    if (!voteRes) {
        const newVote = await Vote.create({
            postId,
            userId,
            upVote: true,
            downVote: false
        });
        res.status(201).json({ newVote })
    } else if (voteRes.dataValues.upVote) {
        await voteRes.destroy();
        res.status(204).end();
    } else {
        await Vote.update({
            postId,
            userId,
            upVote: true,
            downVote: false
        }, { where: { postId, userId } });
        res.status(201).json({ voteRes })
    }
}))

router.patch('/posts/:id/downvote', checkJwt, asyncHandler(async (req, res) => {
    const postId = parseInt(req.params.id, 10);
    const { userId } = req.body;
    const voteRes = await Vote.findOne({
        where: {
            postId,
            userId
        }
    });
    if (!voteRes) {
        const newVote = await Vote.create({
            postId,
            userId,
            upVote: false,
            downVote: true
        });
        res.status(201).json({ newVote })
    } else if (voteRes.dataValues.downVote) {
        await voteRes.destroy();
        res.status(204).end();
    } else {
        await Vote.update({
            postId,
            userId,
            upVote: false,
            downVote: true
        }, { where: { postId, userId } });
        res.status(201).json({ voteRes })
    }
}))

module.exports = router;